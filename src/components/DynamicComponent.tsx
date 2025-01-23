/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['dynamic-component-container1']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Container
        className={` ${
          styles['dynamic-component-container2']
        } ${'container-container'} `}
      />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {},
  rendering: {},
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default withDatasourceCheck()(DynamicComponent)
