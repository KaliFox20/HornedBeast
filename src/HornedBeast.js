import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
  <Card>
<Card.Header>
  <h2>{this.props.title}</h2>
</Card.Header>
 <img onClick ={this.likes} src={this.props.image_url}alt=''title={this.props.title}></img>
  <p>{this.props.description}</p>
  <p>{this.state.likes} heart</p>

  </Card>

 
  </>
);
  }
}
// add like counter with # and heart 
export default HornedBeast;