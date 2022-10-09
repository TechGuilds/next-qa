/* eslint-disable */
// @ts-nocheck
import React, { FC } from 'react';
import { Image } from 'kajoo-components/sitecore-nextjs';

const YusufDemoComp = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <span
        style={{
          margin: 8,
          padding: 8,
          background: 'rgba(200,0,0,0.2)',
        }}
      >
        {props.testCompName}
      </span>
      <div
        style={{
          margin: 8,
          padding: 8,
          display: 'flex',
          background: 'rgba(0,0,200,0.2)',
        }}
      >
        <div
          style={{
            margin: 8,
            padding: 8,
            minWidth: 100,
            minHeight: 100,
            background: 'rgba(0,200,0,0.2)',
          }}
        >
          <Image src={props.fields.src1} alt={props.alt1} />
        </div>
        <div
          style={{
            margin: 8,
            padding: 8,
            minWidth: 100,
            minHeight: 100,
            background: 'rgba(0,200,0,0.2)',
          }}
        >
          <Image src={props.fields.src2} alt={props.alt2} />
        </div>
        <div
          style={{
            margin: 8,
            padding: 8,
            minWidth: 100,
            minHeight: 100,
            background: 'rgba(0,200,0,0.2)',
          }}
        >
          <Image src={props.fields.src3} alt={props.alt3} />
        </div>
      </div>
    </div>
  );
};

export default YusufDemoComp;
