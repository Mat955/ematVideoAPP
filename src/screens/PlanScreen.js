import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import db from '../firebase';
import { selectUser } from '../userSlice';
import './PlanScreen.css';
import { loadStripe } from '@stripe/stripe-js'

function PlanScreen() {

  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    db.collection('customers')
      .doc(user.uid)
      .collection('subscriptions')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(async subscription => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start: subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);

  useEffect(() => {
    db.collection('products')
      .where('active', "==", true)
      .get()
      .then(querySnapshot => {
        const products = {};
        querySnapshot.forEach(async productDoc => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection
            ('prices').get();
          priceSnap.docs.forEach(price => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data()
            }
          });
        });
        setProducts(products);
      })
  }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection('customers')
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        //show and error to customer and inspect my cloud function logs in firebase console
        alert(`an error occured: ${error.message}`);
      }
      if (sessionId) {
        //session, lets redirect to checkout page
        //init stripe

        const stripe = await loadStripe('pk_test_51IlWEoCAm8jyY226lP9kso1Uzn67pvlGMAZY3JkzM4VWCdazw3TytiOLmhIgNoBrS4BIs5Jmjkp5PbbFXZStpChX00Kdq4rhXh');
        stripe.redirectToCheckout({ sessionId });
      }
    })
  };

  return (
    <div className="planScreen">
      <br />
      {subscription && <p>Renewal date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>}
      {Object.entries(products).map(([productId, productData]) => {

        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);

        return (
          <div key={productId} className={`${isCurrentPackage && 'planScreen__plans--disabled'} planScreen__plans`}>
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
              {isCurrentPackage ? 'Current Package' : 'Subscribe'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlanScreen
