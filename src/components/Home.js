import React, { Component } from 'react';
import '../App.css';
import CanadaMap from '../assets/CanadaMap.png';



class Home extends Component {
    render() { 
        return ( <div className="welcome">
            <img  src={CanadaMap}  alt="CanadianMap"/>
        </div> );
    }
}
 
export default Home;