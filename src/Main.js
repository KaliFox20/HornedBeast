import React from 'react';
import data from './data.json';
import HornedBeast from './HornedBeast';

class Main extends React.Component {

  render() {

    let beastArr = this.props.data.map((beast, idx) => {
      return <HornedBeast
        id={beast._id}
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        horns={beast.horns}
        keyword={beast.keyword}
        key={idx}
      />

    });
    return (
      <main>
        {beastArr}
      </main >
    );


  }



}

export default Main;