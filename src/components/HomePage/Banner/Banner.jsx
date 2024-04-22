import Slider from "../../Slider/Slider";
import './Banner.css'

const Banner = () => {
    return (
        <div className="mt">
        <div className="banner">
        <div className='banner-left'>
         <h1 className = "section-header montserrat">Erasmus Mundus Association - Bangladesh</h1>
         <p className='mt-5'>EMA is the Erasmus Mundus Students and Alumni Association. EMA was founded in 2008 ans id registered as an AISBL non-profit organization. Our aims are to help EMJMD students and alumni promote higher education, and be a go-to network for our Alumni across the world.</p>
         <button className='mt-10 btn-red montserrat'>Contact Us</button>
        </div>
        <div className='banner-slider'>
          <Slider/>
        </div>
        </div>
    
     </div>
    );
};

export default Banner;