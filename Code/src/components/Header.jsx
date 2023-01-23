import { Link } from 'react-router-dom';
import Logo from '../assets/img/foodVilla.jpeg'
const Title = () => (
  <a href="/">
    <img alt="logo" src={Logo} className="logo" />
  </a>
);

const HeadersComponent = () => {
  return (
    <div className="header">
      <Title />
      <div
        className="nav-items" >
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default HeadersComponent;
