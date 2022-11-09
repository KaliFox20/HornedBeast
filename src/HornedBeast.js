import React from 'react';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      likes: 0,

    };
  }
  handleLikes = () => {
    this.setState({likes: this.state.likes + 1})};

  render() {
  
return(
  <>
  <h2>{this.props.title}</h2>
  <img onClick ={this.likes} src={this.props.imageURL}alt={this.props.description}title={this.props.title}></img>
  <p>{this.props.description}</p>
  <p>{this.state.likes} heart</p>

  </>
);
  }
}
// add like counter with # and heart 
export default HornedBeast;