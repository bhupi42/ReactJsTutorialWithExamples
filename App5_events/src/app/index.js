import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
  var styles = {
    background-color: #4CAF50;

  };

  constructor(props) {
     super(props);
     this.state = {
        data: 'Count Clicks',
        n :0
     }
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  };
 render(){
   return(
    <div>
      <h1 style={this.getStyles()}>Your Click Counts : {this.state.n} </h1>
      <button onClick={this.increment} >++</button>
      <button onClick={this.decrement}>--</button>
    </div>
   );
 }
increment(){
   this.setState({n:this.state.n+1});
 }
 decrement(){
   this.setState({n:this.state.n-1});
 }
}
ReactDOM.render(<MyComponent/>,document.getElementById('app'));
