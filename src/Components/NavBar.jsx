import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";



function NavBar() {
    return (
    <>
        <nav className="navbar">

                <ul>
                    <li>
                    <NavLink exact to = "/Revenue" className="nav-links">
                    Revenue
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to = "/Revenue_Growth" className="nav-links">
                    Revenue_Growth
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to = "/Cost_of_Revenue" className="nav-links">
                    Cost_of_Revenue
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to = "/Gross_Profit" className="nav-links">
                    Gross_Profit
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to = "/Selling_General_Admin" className="nav-links">
                    Selling_General_Admin
                    </NavLink>
                    </li>
                </ul>
        </nav>
    </>
    );
}

export default NavBar;
