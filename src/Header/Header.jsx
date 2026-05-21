import CustomButton from "../CustomButton/CustomButton";

import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <img src="/Logo.png" alt="" />
        <div className="header-right">
          <nav>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
          </nav>
          <CustomButton>ORDER NOW</CustomButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
