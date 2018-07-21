import React from 'react';
import Gender from './Gender';
import Partners from './Partners';
import Discounts from './Discounts';
import HumanBody from './HumanBody';

const Container = () => (
  <div>
    <div>
      <Gender />
      <Partners />
      <Discounts />
    </div>
    <div>
      <HumanBody />
    </div>
  </div>
);

export default Container;
