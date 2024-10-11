import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Compoment/Global/Header/Header";
import Footer from "./Compoment/Global/Footer/Footer";
import Home from "./Compoment/Page/Home/PageHome";
import PageMovie from "./Compoment/Page/ListMovie/PageMovie";
import Search from "./Compoment/Page/ListMovie/Search";
import DetailMovie from "./Compoment/Page/DetailMovie/DetailMovie";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list-movie" element={<PageMovie />}></Route>
        <Route path="/detail-movie/:searchQuery" element={<DetailMovie />}></Route>
        <Route path="/search/:searchQuery" element={<Search />}></Route>
        <Route path="*" element={"404 Page"}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
