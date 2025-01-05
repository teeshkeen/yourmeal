import LogoPrimary from '../assets/images/logoPrimary.svg';
import phoneIcon from '../assets/icons/call.svg';
import telegramIcon from '../assets/icons/tg.svg';
import vkontakteIcon from '../assets/icons/vk.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__block">
          <img className='footer__logo' src={LogoPrimary} alt="YourMeal" />
          <div className="footer__contacts">
            <div className="footer__phone">
              <div className="footer__phone-title">Номер для заказа</div>
              <div className="footer__phone-content">
                <img className='footer__phone-icon' src={phoneIcon} alt="Телефон" />
                <a className='footer__phone-link' href="tel:+7(930)833-38-11">+7(930)833-38-11</a>
              </div>
            </div>
            <div className="footer__social">
              <div className="footer__social-title">Мы в соцсетях</div>
              <div className="footer__social-content">
                <img src={vkontakteIcon} alt="VK" />
                <img src={telegramIcon} alt="Telegram" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__desc">© YouMeal, 2022</div>
      </div>
    </footer>
  );
};

export default Footer;