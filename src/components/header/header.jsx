import Logo from '../../assets/images/logo.svg';
import Burger from '../../assets/images/burger.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__background"></div>
      <div className="header__inner">
        <img className='header__logo' src={Logo} alt="Логотип" />
        <div className="header__content">
          <div className="header__content-text">
            <p className='header__content-slogan'>Только самые <br /> <span>сочные бургеры!</span></p>
            <span className='header__content-delivery'>Бесплатная доставка от 599₽</span>
          </div>
          <img src={Burger} alt="Бургер" />
        </div>
      </div>
    </header>
  );
};

export default Header;