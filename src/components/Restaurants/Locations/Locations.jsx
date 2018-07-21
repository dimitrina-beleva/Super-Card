import React from 'react';
import Description from './Description';
import Item from './Item';
import ListItems from './ListItems';

const Locations = () => (
  <div>
    <h2>Locations</h2>
    <ListItems>
      <Item />
    </ListItems>
    <Description />
  </div>
);

export default Locations;
