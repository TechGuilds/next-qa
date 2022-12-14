/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './YusufTest.module.css'

const YusufTest = (props) => {
  return (
    <Container
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    />
  )
}

YusufTest.defaultProps = {
  rootClassName: '',
}

YusufTest.propTypes = {
  rootClassName: PropTypes.string,
}

export default YusufTest
