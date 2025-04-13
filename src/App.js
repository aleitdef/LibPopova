import Banner from "./Components/Banner/Banner";
import "./App.css";

function App() {
  return (
    <>
      <Banner width={"100%"} autoPlay={true} autoPlayTime={20000}/>
      <div>Блок меню</div>
      <div>Станицы</div>
      <div>Подвал</div>
    </>
  );
}

export default App;
