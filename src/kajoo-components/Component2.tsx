/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component2.module.css'

const Component2 = (props) => {
  return (
    <Container
      className={` ${styles['component2']} ${styles[props.rootClassName]} `}
    />
  )
}

Component2.defaultProps = {
  fields: {},
  rootClassName: '',
}

Component2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Component2
