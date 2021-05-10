import React from 'react';
import './Banner.css';
import banner from './Images/banner.jpg'

function Banner() {

  function textcute(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center bottom"
      }}>
      <div className="banner__contents">
        <h1 className="banner__title">
          Movie Name
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
          {textcute(`Text Desc`, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner
