import React from 'react';
// import player from '../images/player.png'
import computer from '../images/computer.png'
import cart from '../images/cart.png'
import next from '../images/next.svg'
import backword from '../images/backword.svg'
import collection1 from '../images/collection1.png'

function Body() {
  return (
<div className='content-container'>
  <div className='navigator'>
<img className='go-back' src={backword}/>
<img className='img1' src={cart}/>
<img className='img1' src={cart}/>
<img className='img1' src={cart}/>
<img className='img1' src={cart}/>
<img className='img1' src={cart}/>
<img className='img1' src={cart}/>
<img className='go-back' src={next}/>
  </div>

    </div>

  )
}

export default Body