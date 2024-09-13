import React from 'react'
import year25 from '../component/img/25-year-footer-01.png';
import footerlogo from '../component/img/karam-logo-01.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='row bg-dark text-light'>
        <div className='col-md-3 p-2'>            
              <img src={footerlogo} />
              <h3 className=''>Corporate Office</h3>              
                <Link className='nav-link my-3 ps-3' to={'/'}><i className='fa fa-map-marker-alt'></i>&nbsp;&nbsp;&nbsp;&nbsp;D-95, Sector 2, Noida, Uttar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pradesh - 201301</Link>
                <Link className='nav-link my-3 ps-3' to={'/'}><i className='fa fa-envelope'></i>&nbsp;&nbsp;&nbsp;&nbsp;customer@gmail.com</Link>
                <Link className='nav-link my-3 ps-3' to={'/'}><i className='fa fa-phone' valau={9720535155}></i>&nbsp;&nbsp;&nbsp;&nbsp;9720535155</Link>           
        </div>
        <div className='col-md-3 col-sm-5 py-5'>
            <ul className='menu  '>
              <li >
                <a className=''>Press Coverage</a><br/><br/>
              </li>
              <li >
                <a className=''> FAQs</a><br/><br/>
              </li>
              <li className=''>
                <a className=''>Blogs</a><br/><br/>
              </li>
              <li className=''>
                <a className=''> Newsletter</a><br/><br/>
              </li>
              <li className=''>
                <a className=''>News & Events</a>
              </li>
            </ul>
        </div>
        <div className='col-md-3 col-sm-6 py-5'>
            <ul className='menu nav '>
              <li >
                <a className=''>Corporate Affaires</a><br/><br/>
              </li>
              <li >
                <a className=''> Product Warranty & Disclaimer</a><br/><br/>
              </li>
              <li className='first'>
                <a className=''>EU Declaration</a><br/><br/>
              </li>
              <li className='first'>
                <a className=''> Karam Loyalty Reward Program</a><br/><br/>
              </li>
              <li className='first'>
                <a className=''>Quality Policy</a>
              </li>
            </ul>
        </div>
        <div className='col-md-3 py-5 '>
            <img src={year25} />
        </div>
    </div>
  )
}

export default Footer