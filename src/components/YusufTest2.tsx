/* eslint-disable */
// @ts-nocheck
import React from 'react';
import YusufDemoComp from 'src/kajoo-components/YusufDemoComp';

const YusufTest2 = (props) => {
  console.log('YusufTest2', props);
  return <YusufDemoComp {...props} testCompName="YusufTest2" />;
};

export default YusufTest2;
