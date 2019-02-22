import React, { Component } from 'react';
import './item.css';
import PropTypes from 'prop-types';


class Positionapp extends Component {

	  render() {
	    return (
	    <div>
	  <Positionleft>
	    <h3 style={{float:'left'}}>Contenido situado a la izquierda</h3>
	  </Positionleft>
	  <Positionleft>
	    <h3 style={{float:'right'}}>Contenido situado a la derecha</h3>
	  </Positionleft>
	    </div>
	    );
	  }
	}

class Positionleft extends Component {
  render() {
    return (
    		 <div>
    	        { this.props.children }
    	      </div>
    );
  }
}

class PositionRight extends Component {
	  render() {
	    return (
	    		 <div>
	    	        { this.props.children }
	    	      </div>
	    );
	  }
	}




export default Positionapp;