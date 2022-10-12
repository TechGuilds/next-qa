/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './LinkComponent.module.css'

const LinkComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.className]} `} />
  )
}

LinkComponent.defaultProps = {
  className: '',
}

LinkComponent.propTypes = {
  className: PropTypes.string,
}

export default LinkComponent
