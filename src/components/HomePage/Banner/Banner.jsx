// import Slider from "../../Slider/Slider";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image1 from '../../../Assets/images/Slider1.jpg'

import './Banner.css'
import { BsTwitterX } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className="banner-wrapper">
        <div className="banner">
          <img src={Image1}></img>
          {/* <Slider></Slider> */}

          <div className='overlay'></div>
        <div className='banner-text'>
         <h1 className = "banner-header montserrat">Erasmus Mundus Association Bangladesh</h1>
         <p>EMA is the Erasmus Mundus Students and Alumni Association. EMA was founded in 2008 ans id registered as an AISBL non-profit organization. Our aims are to help EMJMD students and alumni promote higher education, and be a go-to network for our Alumni across the world.</p>
         {/* <button className='btn-red montserrat'>Contact Us</button> */}
        </div>
       
        </div>
        <div className='contact-bar'>
          <div className='socials'>
            <a href='https://www.facebook.com/groups/105556129476392'><FaFacebookF/></a>
            <a href='#'><BsTwitterX /></a>
            <a href='#'><FaLinkedinIn/></a>
            <a href='#'><FaInstagram/></a>
            
          </div>
        </div>
     </div>
    );
};

export default Banner;