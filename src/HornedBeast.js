import React from 'react';

class HornedBeast extends React.Component {

  render() {
    /*
   "_id": 1,
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
    */
return(
  <>
  <h2>{this.props.title}</h2>
  <img src={this.props.imageURL}alt={this.props.description}title={this.props.title}></img>
  <p>{this.props.description}</p>
  </>
);
  }
}

export default HornedBeast;