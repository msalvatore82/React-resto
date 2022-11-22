import React, { Component } from "react";
import "./Home.css";


export class Home extends Component {
  constructor(props) {
    super(props);
    this.dishesList = this.props.dishes.map((dish) => {
        return (
          
            <div key={dish.id} className='dish-card'>
                <p><b></b> {dish.name.toUpperCase()}</p>
                <p><b></b> {dish.description}</p>
                <p><b>€</b> {dish.price}</p>
            </div>
        )
    })
}
  render(props) {
    return (
        <div>
      <div className="contenedor-home">
        <h3 className="titulo"> ¿Qué cocinamos? </h3>
        <p className="texto-acerca-de">
          Lo que nos gusta, un poco de aquí y un poco de allí. Podríamos
          intentar contarte que hacemos una cocina fusión, con influencias sud
          asiáticas, y tal, y tal... pero creo que ya estamos cansados de
          escucharlo. Además, eso no es voltereta. En nuestro caso es muy
          sencillo, cocinamos todo aquello que nos apasiona, que probamos y nos
          marca, y esa, es básicamente nuestra carta, nuestros platos favoritos.
        </p>
      </div>
      <div className='dish'>
                <h1>Nuestros Platos</h1>
                    <div className='dishes-container'>
                     { this.dishesList }             
                    </div>
            </div>
      </div>
    );
  }
}

export default Home;
