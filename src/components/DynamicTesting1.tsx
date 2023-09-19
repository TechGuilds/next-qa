/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicTesting1.module.css'

const DynamicTesting1 = (props) => {
  return (
    <Container
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    />
  )
}

DynamicTesting1.defaultProps = {
  fields: {},
  rootClassName: '',
}

DynamicTesting1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicTesting1
