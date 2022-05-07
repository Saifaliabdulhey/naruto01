import React from 'react';
// import feature1 from '../images/feature1.png'
import logo1 from '../images/logo1.png'

function Chest() {
    return (
      <div className="headering"> 
        <div className="container content-container">
            <div className='main-content'>
                <div className='main_content_img'>
                    <img src={logo1} />
                </div>
                <div className='naruto_content'>
                    <div className='naruto_title'>
                        <h1>NARUTO</h1>
                        <p>Center</p>
                    </div>
                    <h1>PUT YOUR LIF IN THE HANDS OF A COMPUTER!</h1>
                    <p>I bet you will find waht you are looking for!</p>
                    <button className='button'>View all products</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Chest