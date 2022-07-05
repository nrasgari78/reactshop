import React from "react";
import NavItem from "../NavItem/NavItem";
import "./Navitems.css"
const Navitems=()=>{
    return(
        <ul className="nav" >
            <NavItem link="/">Shopping</NavItem>
            <NavItem link="/">CheckOut</NavItem>
        </ul>
    )
}
export default Navitems
