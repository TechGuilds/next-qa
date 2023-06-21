/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Josh.module.css'

const Josh = (props) => {
  return (
    <Container
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    />
  )
}

Josh.defaultProps = {
  rootClassName: '',
  fields: {},
}

Josh.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Josh
