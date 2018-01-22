import React from 'react';
import ReactDOM from 'react-dom';
class MyComponent extends React.Component{
//Create Initial State.........
 constructor(props){
	 super(props);
	 this.state = {
		 jsFramework :['AngularJS','ReactJS','ExppressJS','webRTC','viewJS'],
		 tittle : "Java Script FramWork List",
		 total : 3
	 }
	 //update state in every 5 sec.....
	 setInterval(()=>{
		this.setState({total: this.state.jsFramework.length})
	},5000);
 }
	render(){
		return(
			<div>
				<h1><strong>Total {this.state.total} </strong>{this.state.tittle}</h1>
				{this.state.jsFramework.map((item, index) => (
	         <p>{item} !</p>
	     ))}
     </div>
			);
	}
}
ReactDOM.render(<MyComponent/>,document.getElementById('app'));
