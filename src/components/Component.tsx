/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container
      className={` ${styles['component-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Container
        className={` ${
          styles['component-row-container']
        } ${'container-container'} `}
      />
    </Container>
  )
}

AppComponent.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

AppComponent.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppComponent
