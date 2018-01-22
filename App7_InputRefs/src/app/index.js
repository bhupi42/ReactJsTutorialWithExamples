import React from 'react';
import ReactDOM from 'react-dom';
import GetInt from './getInstent.js';

class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state ={value:''};
  }
 render(){
   return(
     <div>
       <h1>Exmaple of input using refrence</h1>
       <form onSubmit={this.myFun.bind(this)}>
         <input type="text" ref ="name"></input>
       <button type="submit">Get Value</button>
     </form>
      <p>{this.state.value}</p>

      <GetInt/>
     </div>
   );
 }
 myFun(e){
    e.preventDefault();
    //var n = this.refs.name.value;
    this.setState({value: this.refs.name.value});
  //   <p>{n}</p>

   }
}

ReactDOM.render(<MyComponent/>,document.getElementById('app'));
