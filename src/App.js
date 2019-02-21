import React, { Component } from 'react';
var dogurl='https://dog.ceo/api/breed/chihuahua/images/random';

function Randomcat(props) {

               return fetch(dogurl)
                .then(function(imageResponse){
                  return imageResponse.json();   })
                   .then(function(imageJSON){
                    var img = document.getElementById(props.id);
                     img.src = imageJSON.message;
                 img.width=props.ancho;
                 img.height=props.alto;
       }); 
    }

function Catlist() {
  return (
    <div>
      <Randomcat id="1" ancho="200" alto="200" />
      <Randomcat id="2" ancho="200" alto="400"  />
      <Randomcat id="2" />
    </div>
  );
}

class App extends Component {

  render() {
    return (
    <img id="image1"></img>
    <img id="image2"></img>
    <img id="image3"></img>
      <Catlist />
    );
  }
      
 Welcome.defaultProps = {
  ancho: "200",
  alto: "200"
}


export default App;


