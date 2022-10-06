/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return <Container className={styles['root']} />
}

AppComponent.defaultProps = {
  fields: {},
}

AppComponent.propTypes = {
  fields: PropTypes.object,
}

export default AppComponent
