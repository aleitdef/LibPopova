import "./Footer.css";
import ImgLogo from "../../img/Logo.png";
import Music from "../../img/Music.svg";
import Telega from "../../img/telegram.png";
import VK from "../../img/VK.png";

export default function Footer({ Menu }) {
  return (
    <footer className="footer">
      <img src={ImgLogo} alt="logo" className="footer-img" />
      <div className="footer-text">
        <div className="footer-block-1">
          <div className="footer-title">МЕНЮ</div>
          <div className="footer-menu">
            {Menu.map((el, i) => {
              return (
                <div key={i} className="footer-menu-title">
                  {el.title}
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-block-2">
          <div className="footer-podblock" style={{ textAlign: "left" }}>
            <div className="footer-title">АДРЕС</div>
            <div className="footer-menu-title">
              г. Нижний Новгород, ул. Горная, 30
            </div>
          </div>
          <div className="footer-podblock" style={{ textAlign: "center" }}>
            <div className="footer-title">НОМЕР ТЕЛЕФОНА</div>
            <div className="footer-menu-title">+7 (831) 465-01-93</div>
          </div>
          <div className="footer-podblock" style={{ textAlign: "right" }}>
            <div className="footer-title">СОЦ. СЕТИ</div>
            <div className="footer-images">
              <a href="https://music.yandex.ru/album/32654042?dir=desc&activeTab=about"><img src={Music} alt="музыка" className="images"/></a>
              <a href="https://vk.com/bibliotekapopova"><img src={VK} alt="вк" className="images" /></a>
              <a href="https://t.me/mavestreambot/app?startapp=vbibliotekeneshumyat"><img src={Telega} alt="телега" className="images" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
