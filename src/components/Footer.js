import React from 'react'
import instagram from '../images/instagram.png'
import discord from '../images/discord.png'
import telegram from '../images/telegram.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import meta from '../images/meta.png'
import mail from '../images/mail.png'

function Footer() {
  return (
    <footer className="footer content-container">
    <hr></hr>
    <p>Mail me on:</p>
    <div className="circle">
     <img src={mail}/>
     <img src={instagram}/>
     <img src={discord}/>
     <img src={telegram}/>
     <img src={meta}/>
     <img src={twitter}/>
     <img src={linkedin}/>

    </div>
    <p>Copyright © 2017-2022 Saif's Portfolio LLC. All rights reserved.</p>
    </footer>
  )
}

export default Footer