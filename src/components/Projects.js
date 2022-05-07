import React from 'react'
import Footer from './Footer';
import logo from '../images/logo1.png';
import { Link, useLocation, Outlet } from 'react-router-dom'

function Projects() {

  const location = useLocation();
  const { pathname } = location;
  const splitlocation = pathname.split('projects/')
  return (
    <div className="project-container">
      <div className="headering">
        <div className="container content-container">
          <div className='all-container'>
            <img className="all_logo_img" src={logo} />
            <div className='naruto_content'>
              <div className='naruto_title _all'>
                <h1>NARUTO</h1>
                <p>Center</p>
              </div>
            </div>
          </div>
        </div>
        <h1>All Our Products</h1>
        <hr></hr>
        <div className="all_links">
          <Link to="/projects/laptop" className={splitlocation[1] === "laptop" ? "active1" : "link1"}>Laptop</Link>
          <Link to="/projects/desktop" className={splitlocation[1] === "desktop" ? "active1" : "link1"}>Desktop</Link>
          <Link to="/projects/monitors" className={splitlocation[1] === "monitors" ? "active1" : "link1"}>Monitors</Link>
          <Link to="/projects/gaming" className={splitlocation[1] === "gaming" ? "active1" : "link1"}>Gaming PCs</Link>
          <Link to="/projects/accessories" className={splitlocation[1] === "accessories" ? "active1" : "link1"}>Accessories</Link>
          <Link to="/projects/allinone" className={splitlocation[1] === "allinone" ? "active1" : "link1"}>All In One Computer</Link>
          <Link to="/projects/software" className={splitlocation[1] === "software" ? "active1" : "link1"}>Software</Link>
        </div>
        <hr></hr>
      </div>
    
      <Outlet />
      
      <Footer />
    </div>

  )
}

export default Projects