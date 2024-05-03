/* eslint-disable */
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const AppComponent = (props) => {
  return (
    <Container className={`app-component-container ${props.rootClassName} `} />
  )
}

AppComponent.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

AppComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default AppComponent
