import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './css/index.css';
class MyComponent extends React.Component{
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
      //How to call classes???????????????????
      <h1>Your Click Counts : {this.state.n} </h1>
      <button onClick={this.increment}>++</button>
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
