/* eslint-disable */
// @ts-nocheck
import React from 'react';
import YusufDemoComp from 'src/kajoo-components/YusufDemoComp';

const YusufTest1 = (props) => {
  console.log('YusufTest1', props);
  return <YusufDemoComp {...props} testCompName="YusufTest1" />;
};

export default YusufTest1;
