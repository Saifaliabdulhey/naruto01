import React from 'react';
import youtube from '../images/youtube.png';
import logo from '../images/logo.svg';

function GamingPc() {
  const img = "https://upload.wikimedia.org/wikipedia/commons/2/20/Avant-Tower-Gaming-PC.png";
  return (
    <div className="grid">
    <div className="item">
      <img className="item-img" src={img}/>
      <img className="youtube-icon" src={youtube} />
      <img className="logo-pic" src={logo} />
      <div className="product-details">
        <p className="item-title">huawei matebook x pro 2021</p>
        <p className="item-content"></p>
        <p className="learn-more">$1,200</p>
        <button className="button">Show up</button>
      </div>
    </div>
  </div>
  )
}

export default GamingPc