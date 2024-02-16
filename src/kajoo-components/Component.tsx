/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import Component1 from './Component1'
import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <Component1 rootClassName="root-class-name1" />
    </Container>
  )
}

AppComponent.defaultProps = {
  fields: {},
  rootClassName: '',
}

AppComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default AppComponent
