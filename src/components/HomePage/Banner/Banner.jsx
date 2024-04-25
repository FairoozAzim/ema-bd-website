// import Slider from "../../Slider/Slider";
import Image1 from '../../../Assets/images/Slider1.jpg'
import Image2 from '../../../Assets/images/Slider2.jpg'

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-wrapper">
        <div className="banner">
        <div className='banner-left'>
         <h1 className = "banner-header section-header montserrat">Erasmus Mundus Association - Bangladesh</h1>
         <p className='mt-5'>EMA is the Erasmus Mundus Students and Alumni Association. EMA was founded in 2008 ans id registered as an AISBL non-profit organization. Our aims are to help EMJMD students and alumni promote higher education, and be a go-to network for our Alumni across the world.</p>
         <button className='mt-10 btn-red montserrat'>Contact Us</button>
        </div>
        <div className='banner-slider'>
          <div className='img-frame'>
          <img src={Image1}></img>
          </div>
          <div className='img-frame'>
          <img src={Image2}></img>
          </div>
        </div>
        </div>
    
     </div>
    );
};

export default Banner;