import LogoPrimary from '../../assets/images/logoPrimary.svg';
import phoneIcon from '../../assets/icons/call.svg';
import telegramIcon from '../../assets/icons/tg.svg';
import vkontakteIcon from '../../assets/icons/vk.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__content-block">
          <img className='footer__content-block-logo' src={LogoPrimary} alt="YourMeal" />
          <div className="footer__content-block-contacts">
            <div className="footer__content-block-contacts-phone">
              <div className="footer__content-block-contacts-phone-title">Номер для заказа</div>
              <div className="footer__content-block-contacts-phone-main">
                <img src={phoneIcon} alt="Телефон" />
                <a href="tel:+7(930)833-38-11">+7(930)833-38-11</a>
              </div>
            </div>
            <div className="footer__content-block-contacts-social">
              <div className="footer__content-block-contacts-social-title">Мы в соцсетях</div>
              <div className="footer__content-block-contacts-social-main">
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