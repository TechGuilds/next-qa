/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Test.module.css'

const Test = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.className]} `} />
  )
}

Test.defaultProps = {
  className: '',
}

Test.propTypes = {
  className: PropTypes.string,
}

export default Test
