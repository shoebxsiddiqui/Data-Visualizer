import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { NavLink } from "react-router-dom";
import NavBar from "./Components/NavBar";
import {Revenue} from "./Components/Pages/Revenue"
import {Revenue_Growth} from "./Components/Pages/Revenue_Growth"
import {Cost_of_Revenue} from "./Components/Pages/Cost_of_Revenue"
import {Gross_Profit} from "./Components/Pages/Gross_Profit"
import {Selling_General_Admin} from "./Components/Pages/Selling_General_Admin"

function App() {
  return ( <>
            <Header />
        <div className="container">
            <NavBar />
      
      <div className="pages">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/Revenue" element={<Revenue />}/>
          <Route path="/Revenue_Growth" element={<Revenue_Growth />}/>
          <Route path="/Cost_of_Revenue" element={<Cost_of_Revenue />}/>
          <Route path="/Gross_Profit" element={<Gross_Profit />}/>
          <Route path="/Selling_General_Admin" element={<Selling_General_Admin />}/>
        </Routes>
        </div>
        </div>
    </> 
  )
}

export default App;