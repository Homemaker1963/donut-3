import React, { Component } from 'react';
import Donut from './Donut';

class Donuts extends Component {
  render() {
    const donuts = [{
      innerRadius: .5,
      outerRadious: 1,
      sprinkleCoverage: .667,
      frostingCoverage: .2,
      frostingThickness: .8,
    }];

    return (
      <ul className="Donuts">
        {donuts.map((donut, i) => {
          return (
            <li key={i}>
              <Donut donut={donut} />
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Donuts;
