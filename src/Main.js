import React from 'react';
import data from './data.json';
import HornedBeast from './HornedBeast';

class Main extends React.Component {

  render() {
    let beastArr = []; 
    data.map(v, i);
    
  }
  return(
      <main>
        <HornedBeast />

        <HornedBeast />
      </main >
    );
  }
}

export default Main;