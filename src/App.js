import React, { Component } from 'react';
import RandomCat from './RandomCat';



class App extends Component {

  render() {
    return (
    //llamamos a Catlist
    <div>
    <Catlist/>
    </div>
    				
    );
  }
}    

function Catlist() {
	   return(
	//llamamos a randomCat con los parametros especificados en el ejercicio
	   <div>
	   <RandomCat ancho="200" alto="200" />
	   <RandomCat ancho="200" alto="400" />
	   <RandomCat />
	   </div>
	   )
	}



export default App;


