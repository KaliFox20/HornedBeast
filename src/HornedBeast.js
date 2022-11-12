import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FiHeart } from "react-icons/fi";


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      clicks: 0

    };

  }
  handleLikes = () => {
    this.setState({ likes: this.state.likes + 1 })
  };

  handleClicks = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {

    return (
      <>
        <Card>
          <Card.Body>
            <Card.Header>
              <h2>{this.props.title}</h2>
            </Card.Header>
            <img onClick={this.handleClicks} src={this.props.image_url} alt={this.props.description} title={this.props.title}></img>
            <p>{this.props.description}</p>
            <p>Click Like to add more hearts</p>
            <p>Click the Image to help with views</p>
            <p>{this.state.likes} <FiHeart /></p>
         <Button onClick={(this.handleLikes)}>Like</Button>
       
        </Card.Body>
      </Card>
     

      </>
    );
  }
}
// add like counter with # and heart 
export default HornedBeast;