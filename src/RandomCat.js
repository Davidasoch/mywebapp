import React from 'react';

 class RandomCat extends React.Component {
	 
	  constructor(props) {
		  //creamos un constructor qur maneje las props y las guarde en el state de la clase
		    super(props);
		    this.state = { ancho: props.ancho, alto: props.alto};
		  }
	 
	render() {
		//creamos una variable para almacenar el link con los datos recibidos en state
		let link = "http://lorempixel.com/"+this.state.ancho+"/"+this.state.alto+"/cats";
		return (
		//devolvemos la imagen
		<div>
		<a href="http://lorempixel.com">
		<img src={link} alt="Random cat" />
		</a>
		</div>
		);
	}
 }
 
RandomCat.defaultProps = {
	//definimos los datos por defecto
	ancho: "400",
	alto: "200"
};
 
 export default RandomCat;

