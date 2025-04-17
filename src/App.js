import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  let Menu = [
    {title:"Главная", value:"Home"},
    {title:"События", value:"Events"},
    {title:"Подкасты", value:"Podcasts"},
    {title:"Команда", value:"Team"},
    {title:"Контакты", value:"Contacts"} 
  ];
  return (
    <>
      <Banner width={"100%"} autoPlay={true} autoPlayTime={20000}/>
      <div>Блок меню</div>
      <div>Станицы</div>
      <Footer Menu={Menu}/>
    </>
  );
}

export default App;
