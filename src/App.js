import React, { Component } from 'react';

function Welcome(props) {
  console.log(props);
  console.log(props.ancho);
  return <h1>Hello, {props.ancho},{props.alto}</h1>;
}

function Greet() {
  return (
    <div>
      <Welcome ancho="200" alto="200" />
      <Welcome ancho="200" alto="200"  />
      <Welcome />
    </div>
  );
}

class App extends Component {

  render() {
    return (
      <Greet />
    );
  }
}
      
 Welcome.defaultProps = {
  ancho: "200",
  alto: "200"
}


export default App;


