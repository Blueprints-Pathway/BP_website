import "./App.css"

import Home from "./component/Home"
import AboutUs from "./component/AboutUs"
import Products from "./component/Products"
import Cavemen from "./component/Cavemen"
import Culture from "./component/Culture"
import { SliderData } from "./component/SliderData"
import Contact from "./component/Contact"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./component/Navbar"

function App() {
  return (
    <div className='App'>
      <Router>
        <Home />
        <Navbar />
        <AboutUs />

        <Products />
        <Cavemen />
        <Culture slides={SliderData} />
        <Contact />
      </Router>
    </div>
  )
}

export default App
