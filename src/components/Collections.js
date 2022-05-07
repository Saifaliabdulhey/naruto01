import React, { Component } from 'react'
import { setState } from "react"
import collection1 from '../images/collection1.png'
import Modal from 'react-modal'
import lenovo from '../images/laptop.png'
import facebook1 from '../images/facebook1.png'
import instagram1 from '../images/instagram1.png'
import star from '../images/star.png'
import youtube from '../images/youtube.png'

export class Collections extends Component {

  constructor(props) {
    super(props)

    this.state = ({ modal: false })

  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }
  render() {
    return (
      <div className='content-container whole-content'>
        <div className='focused_collection'>
          <p>Focused Collections</p>
          <span></span>
        </div>
        <div className='collections'>
          <div className='collection_item'>
            <img className='collect-img' src={collection1} />
            <div className='specifications'>
              <li>MB MSI B450 A PRO MAX</li>
              <li>CPU RYZEN 5 2400G</li>
              <li>PS 550W Thermaltake</li>
              <li>GPU RTX 3080Ti </li>
              <li>MSI MAG Vampiric 100R Mid-Tower Case</li>
              <p><span>1,300$</span> - <s>1,400$</s></p>
              <button onClick={this.openModal} className='button'>Show details</button>
            </div>
          </div>
        </div>
        <div className='collect'>
          <h4>Build your own collection</h4>
          <h4>Our collections</h4>
        </div>

        <Modal
          appElement={document.getElementById('root')}
          isOpen={this.state.modal}
          onRequestClose={this.closeModal}
          closeTimeoutMS={200}
          className='modal'
          backdropClassName="my-backdrop-style"
        >
          <div className='modal_container'>
            <div className='content'>
              <div className='images-container'>
                <img className='main-img' src={lenovo} />
                <div className='img_links'>
                  <img src={lenovo} />
                  <img src={lenovo} />
                  <img src={lenovo} />
                  <img src={lenovo} />
                </div>
                <div className="review-div">
                  <p>Review</p>
                  <iframe width="600px" h
                    src="https://www.youtube.com/embed/T05ht9-eA9U">
                  </iframe>
                </div>
              </div>

              <div className='product_desc-container'>
                <p className='product_brand_title'> lenovo</p>
                <p className='product_title'>LENOVO LEGION 5 17ACH6H, AMD Ryzen 5 5600H, 8GB, 256GB NVMe SSD,17.3" FHD IPS, NVIDIA GeForce GTX 1650, Windows 11</p>
                <div className="rate_div">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <div className="share_icons">
                  <button><img src={facebook1} /> share</button>
                  <button><img src={instagram1} />instagram</button>
                </div>
                <p className="availablity">Availablity: <strong>In Stock</strong></p>
                <hr></hr>
                <p className="price">Price: $770.00 <s>$800.00</s></p>
                <div>
                  <button className="btn"> Add to Crad</button>
                  <button className="btn-2"> By Now</button>
                </div>
                <h3>Specifications</h3>
                <hr></hr>
                <div className="specifications">
                  <li className="li">AMD Ryzen 5 5600H 3.3 GHz Six-Core</li>
                  <li className="li">8GB DDR4 3200MHz</li>
                  <li className="li">NVIDIA GTX 1650 4GB</li>
                  <li className="li">17.3" 1920 x 1080 IPS 60Hz</li>
                  <li className="li">256GB NVMe TLC SSD</li>
                  <li className="li">Windows 11, Phantom Black US</li>
                </div>
                <hr></hr>
                <div className="contact-us">
                  <p>Phone: 07729488987</p>
                  <p>Discord: #saifaliabdulhey87</p>
                </div>
              </div>
            </div>
            <button onClick={this.closeModal} className='btn-close'></button>
          </div>

        </Modal>
      </div>
    )
  }
}

export default Collections