/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    />
  )
}

Component1.defaultProps = {
  rootClassName: '',
  fields: {},
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Component1
