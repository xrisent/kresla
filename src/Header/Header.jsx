import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-right">
          <nav>
            <a href="/">Главная</a>
            <a href="/about">О продукте</a>
            <a href="">Отзывы</a>
            <a href="">Доставка и оплата</a>
            <a href="">Контакты</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
