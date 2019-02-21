import React from 'react';

 class RandomCat extends React.Component {
	 
	  constructor(props) {
		    super(props);
		    this.state = { ancho: props.ancho, alto: props.alto};
		  }
	 
	render() {
		let link = "http://lorempixel.com/"+this.state.ancho+"/"+this.state.alto+"/cats";
		return (
		<div>
		<a href="http://lorempixel.com">
		<img src={link} alt="Random cat" />
		</a>
		</div>
		);
	}
 }
 
RandomCat.defaultProps = {
	ancho: "400",
	alto: "200"
};
 
 export default RandomCat;

