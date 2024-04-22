import logo1 from '../../../Assets/images/home-logo1.png'
import logo2 from '../../../Assets/images/home-logo2.png'
import logo3 from '../../../Assets/images/home-logo3.png'
import logo4 from '../../../Assets/images/home-logo4.png'
import './About.css'

const About = () => {
    return (
      <div className='mt'>
        <div className="d-flex about-section">
            <div className="logo-gallery">
             <div className='grid-item'>
             <img src={logo1}></img>
             </div>
              <div className='grid-item' >
              <img src={logo2}></img>
              </div>
              <div className='grid-item'>
              <img src={logo3}></img>
              </div>
              <div className='grid-item'>
              <img  src={logo4}></img>
              </div>
            </div>
            <div className='about-right'>
                <h1 className="section-header montserrat">About Us</h1>
                <p className="mt-5"> Over <span>24000</span> students have taken part in Erasmus Mundus courses. Over <span>12000</span> of them are EMA members!</p>
                <button className='mt-10 btn-red montserrat'>Learn More</button>
            </div>
        </div>
        </div>
    );
};

export default About;