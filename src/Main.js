import React from 'react';
import data from './data.json';
import HornedBeast from './HornedBeast';

class Main extends React.Component {

  render() {
    return (
      <main>
        <>
          {
            data.map((beast) => (

              <HornedBeast
                _id={beast._id}
                title={beast.title}
                image_url={beast.image_url}
                horns={beast.horns}
                keyword={beast.keyword}
                description={beast.description}
              />
            ))
          }

        </>

      </main >
    );

  }



}

export default Main;