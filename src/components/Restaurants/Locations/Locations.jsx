import React from 'react';
import Description from './Description';
import Item from './Item';

class Locations extends React.Component {
  get getLocation() {
    return this.locations;
  }

  locations = [
    { id: 1, name: 'Raffy Terrace Bar', desc: 'bla bla' },
    { id: 2, name: 'Spaghetti Kitchen', desc: 'kla kla' },
    { id: 3, name: 'La Bocca', desc: 'kla kla' },
    { id: 4, name: 'BMS Cuisine', desc: 'kla kla' },
    { id: 5, name: 'Nordsee', desc: 'kla kla' },
    { id: 6, name: 'Casavino', desc: 'kla kla' }
  ];

  render() {
    return (
      <div>
        <h2>Locations</h2>
        <div>{this.getLocation.map(location => <Item key={location.id} location={location} />)}</div>
        <Description />
      </div>
    );
  }
}

export default Locations;
