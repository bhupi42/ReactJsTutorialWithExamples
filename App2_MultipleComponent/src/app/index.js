import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
	render(){
		return(
				<div>
				<h1>Multiple Component</h1>
				<HeadClass/>
            	<FootClass/>
        	 </div>
			);
	}
}

class HeadClass extends React.Component{
	render(){
		return(
				<h2>Header Compnent</h2>

		);
	}
}

class FootClass extends React.Component{
	render(){
		return(
		<h2>Footer Component</h2>
		);
	}
}
ReactDOM.render(<MyComponent/>,document.getElementById('app'));


