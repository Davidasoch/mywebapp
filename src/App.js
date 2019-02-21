import React, { Component } from 'react';
import RandomCat from './RandomCat';



class App extends Component {

  render() {
    return (
    <div>
    <Catlist/>
    </div>
    				
    );
  }
}    

function Catlist() {
	   return(
	   <div>
	   <RandomCat ancho="200" alto="200" />
	   <RandomCat ancho="200" alto="400" />
	   <RandomCat />
	   </div>
	   )
	}



export default App;


