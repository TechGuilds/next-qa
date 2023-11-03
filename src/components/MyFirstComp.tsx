/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './MyFirstComp.module.css'

const MyFirstComp = (props) => {
  return (
    <Container
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    />
  )
}

MyFirstComp.defaultProps = {
  fields: {},
  rootClassName: '',
}

MyFirstComp.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default MyFirstComp
