/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import Repeater from './Repeater'
import Component11 from './Component11'
import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['dynamic-component-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Text text="fgfgfgfg" tag="h1" className={'text-text'} />
      <Repeater rootClassName="repeaterroot-class-name">
        <Component11 rootClassName="component11root-class-name" />
      </Repeater>
    </Container>
  )
}

DynamicComponent.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {
    List: [
      {
        fields: {
          Text: 'Lorem Ipsum',
        },
      },
      {
        fields: {
          Text: 'Lorem Ipsum',
        },
      },
      {
        fields: {
          Text: 'Lorem Ipsum',
        },
      },
    ],
    Image: {
      src: 'https://app.kajoo.ai/icons/default-imag.svg',
      alt: '',
    },
  },
}

DynamicComponent.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(DynamicComponent)
