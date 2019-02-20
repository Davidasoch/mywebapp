import React, { Component } from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name},{props.ancho}</h1>;
}

function Greet() {
  return (
    <div>
      <Welcome name="Sara" ancho="200" alto="200" />
      <Welcome name="tamara" />
      <Welcome name="Edite" ancho=""  alto />
    </div>
  );
}

class App extends Component {

 state = {
      users: [
        {id: 1, name: "miguel", email: "test@miguelgomez.io"},
        {id: 2, name: "test", email: "test@test.es"}
      ]
    };

  render() {
    return (
      <Greet />
    );
  }
}

App.defaultProps = {
  ancho: "200",
  alto: "200" 
};

export default App;


