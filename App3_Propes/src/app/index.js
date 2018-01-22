import React from 'react';
import ReactDOM from 'react-dom';
class MyComponent extends React.Component{
	render(){
  return(
    // Here in below code we are going to retrive props value using {this.props.js.lang1}...............
				<div>

        <p><strong>Today is </strong>{this.props.msg}</p>
        <p><strong>My Fav language 1 </strong>{this.props.js.lang1}</p>
        <p><strong>My Fav language 2 </strong>{this.props.js.lang2}</p>
        <p><strong>My Favlanguage 3  </strong>{this.props.js.lang3}</p>

        </div>
			);
	}
}

var js ={lang1:"ReactJS",lang2:"NodeJS",lang3:"ExpressJS"}

// below we are going to define two props 1st is msg and other one is js..........

ReactDOM.render(<MyComponent msg="Programmers Day..." js={js}/>,document.getElementById('app'));
