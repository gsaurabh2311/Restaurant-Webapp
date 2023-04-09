import logo from '../../assets/logo.png'

export const Title = () => (
    <a href="/">
      <img class="logo" alt="logo" src={logo}></img>
      </a>
    );
  
    const Header = () => (
      <div class = "header">
        <Title />
        <div class="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
  
      </div>
    );

export default Header;