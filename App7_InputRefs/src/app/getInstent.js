import React from 'react';
import ReactDOM from 'react-dom';

export default class GetInt extends React.Component{
  constructor(props) {
  super(props);

  this.state = {text:''};
};

handleChange(event) {
  this.setState({ text: event.target.value });
};
  render(){
    return(

      <div>
        <h1>Exmaple of getting value instantly from user input..</h1>
       <h2>It is {this.state.text}.</h2>
       <input type="text"  placeholder = "enter value.." onKeyUp={this.handleChange.bind(this)} />
     </div>
  );
  }
}
