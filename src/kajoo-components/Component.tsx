/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import NewFigmaComponent from './NewFigmaComponent'
import RealTestFigma from './RealTestFigma'
import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <NewFigmaComponent rootClassName="root-class-name" />
      <RealTestFigma rootClassName="root-class-name" />
    </Container>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
