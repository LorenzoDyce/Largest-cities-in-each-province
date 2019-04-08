import React from 'react';
import { NavLink } from "react-router-dom";
import '../Navigation.css';


const Navigation = () => {
    return ( <div className="links">
      <NavLink to="/" activeClassName="current" >Home</NavLink>
      <NavLink to="/alberta" activeClassName="current" >Alberta</NavLink>
      <NavLink to="/britishColumbia" activeClassName="current">British Columbia</NavLink>
      <NavLink to="/manitoba" activeClassName="current">Manitoba</NavLink>
      <NavLink to="/Newbrunswick" activeClassName="current">New Brunswick</NavLink>
      <NavLink to="/NewfoundlandAndlabrador" activeClassName="current">Newfoundland And Labrador</NavLink>
      <NavLink to="/Novascotia"activeClassName="current">Nova Scotia</NavLink>
      <NavLink to="/Ontario"activeClassName="current">Ontario</NavLink>
      <NavLink to="/Princeedwardisland"activeClassName="current">Prince Edward Island</NavLink>
      <NavLink to="/Quebec"activeClassName="current">Quebec</NavLink>
      <NavLink to="/Saskatchewan"activeClassName="current">Saskatchewan</NavLink>
      <NavLink to="/Northwestterritories"activeClassName="current">Northwest Territories</NavLink>
      <NavLink to="/Nunavut"activeClassName="current">Nunavut</NavLink>
      <NavLink to="/Yukon"activeClassName="current">Yukon</NavLink>
    </div> );
}
 
export default Navigation;