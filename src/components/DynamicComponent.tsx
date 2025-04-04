/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['dynamic-component-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

DynamicComponent.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

DynamicComponent.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default DynamicComponent
