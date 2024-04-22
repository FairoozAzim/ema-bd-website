import { Link } from 'react-router-dom';
import logo from '../../../Assets/EMA BD LOGO.png'
import './Header.css'

const Header = () => {
    return (
        <header className='header-wrapper'>
       <div className='header'>
        <div className="logo">
        <img src={logo} alt="Erasmus Mundus Association - Bangladesh logo"/> 
        </div>
      <div className="nav">
        <ul className="nav-list">
          <li className="nav-item montserrat"><Link to = '/'>Home</Link></li>
          <li className="nav-item montserrat"><Link to='about'>About Us</Link></li>
          <li className="nav-item montserrat"><Link to='team'>Our Team</Link></li>
          <li className="nav-item montserrat"><Link to='alumni'>Student and Alumni</Link></li>
          <li className="nav-item montserrat"><Link to='events'>Events</Link></li>
          <li className="nav-item montserrat"><Link to='blogs'>Blog</Link></li>
          <li className="nav-item montserrat"><Link to='contacts'>Contact</Link></li>
        </ul>
      </div>
       </div>
       <hr className="header-divider" />
       </header>
    );
};

export default Header;