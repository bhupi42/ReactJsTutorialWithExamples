import React from 'react';
import ReactDOM from 'react-dom';
// Create Component here... Component is a part of DOm or you can say sub part of screen like search component
//login component etc...

class MyComponent extends React.Component{
	render(){
		return(

				<h1>React First Component</h1>
			);
	}
}

ReactDOM.render(<MyComponent/>,document.getElementById('app'));


