import React, { Component } from 'react';
import './item.css';
import PropTypes from 'prop-types';

// creamos el array statico de objetos
const items = [

	{
	name:"Cereales con chocolate",
	description: "Cereales rellenos de chocolate",
	quantity: 2,
	category: "Cereales",
	price: 5
	},
	{
	name:"Hamburguesa con queso",
	quantity: 1,
	category: "Fast-food",
	price: 15
	},
	{
	name:"Agua mineral",
	description: "Agua de un charco del Himalaya",
	quantity: 2,
	category: "Bebida",
	price: 5
	},
	{
		name:"Paella",
		description: "Paella valenciana de la buena",
		quantity: 1,
		category: "Arroces",
		price: 25
		},
		{
			description: "Vino rosado de importacion",
			quantity: 1,
			category: "Vinos",
			price: "mucho"
			}
	];


class Itemapp extends Component {

	  render() {
	    return (
	    //llamamos a itemlist
	    <div id="react-root"><ItemList/></div>
	    );
	  }
	}

class Item extends Component {
  render() {
    return (
    //en item devolvemos la structura html del objeto devolviendo los datos mediante los props de la clase
      <div className="item">
        <h5 className="quantity">{ this.props.quantity }</h5>
        <div>
          <h5>{ this.props.name }</h5>
          <h6 className="text-muted">{ this.props.description }</h6>
        </div>
        <div className="badge badge-info">{ this.props.category }</div>
        <h5 className="price">{ this.props.price }€</h5>
      </div>
    );
  }
}

class ItemList extends Component {
  render() {
	  // para iterar el array items creamos el nuevo array data y hacemos un map sobre items, asignandole el contenido a este
	  //en forma JSX para que pueda ser ejecutado en el render
	  const data = items.map((item, index) => {
		  return (
          <Item 
          name={item.name}
          description={item.description} 
          quantity={item.quantity}
          category={item.category}
          price={item.price}
          />
        );
        
  });
	    return (
	    		//una vez hecho devolvemos data que llamara a Item
	     <ul className="item-list">
	      <li>
	    	{data}
	      </li>
	     </ul>
	 );
	  
 }
}

//definimos las variables por defecto
Item.defaultProps = {
		description: "No hay descripccion"
	};

//definimos las condiciones de las variables
Item.propTypes = {
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
		};


export default Itemapp;