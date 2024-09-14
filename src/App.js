import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";

import Other from "./components/Other/Other";
import Portfolio from "./components/Portfolio/Portfolio";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App(props) {
  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <div className='containerItem'>
        <Routes>
          <Route path='/about-me' element={<AboutMe />}></Route>

          <Route
            path='/other'
            element={
              <Other certification={props.state.otherPage.certification} />
            }
          ></Route>
          <Route
            path='/portfolio'
            element={
              <Portfolio projects={props.state.portfolioPage.projects} />
            }
          ></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
