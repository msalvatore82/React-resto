import React, { Component } from "react";
import"./Headers.css"



export class Headers extends Component {
  render() { 
    return (
    <div className="contenedor-nav">
        <nav className="nav">
            <a href="#nosotros">NOSOTROS</a>
            <a href="#platos">PLATOS</a>       
        </nav>
    </div>
    );
  }
}

export default Headers;