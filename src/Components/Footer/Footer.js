import "./Footer.css";
import ImgLogo from "../../img/Logo.png";
export default function Footer({Menu}) {
  return (
    <footer className="footer">
      <img src={ImgLogo} alt="logo" className="footer-img" />
      <div className="footer-text">
        <div>
            <div className="footer-title">Меню</div>
            <div className="footer-menu">
                {
                    Menu.map((el,i)=>{return(<div key={i} className="footer-menu-title">{el.title}</div>);})
                }
            </div>
        </div>
        <div>
            
        </div>
      </div>
    </footer>
  );
}
