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
          <li className="nav-item montserrat"><a href="#">Home</a></li>
          <li className="nav-item montserrat"><a href="#">About Us</a></li>
          <li className="nav-item montserrat"><a href="#">Our Team</a></li>
          <li className="nav-item montserrat"><a href="#">Student and Alumni</a></li>
          <li className="nav-item montserrat"><a href="#">Events</a></li>
          <li className="nav-item montserrat"><a href="#">Blog</a></li>
          <li className="nav-item montserrat"><a href="#">Contact</a></li>
        </ul>
      </div>
       </div>
       <hr className="header-divider" />
       </header>
    );
};

export default Header;