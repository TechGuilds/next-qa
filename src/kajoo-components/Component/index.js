/* eslint-disable */
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const AppComponent = (props) => {
  return <Container className={`component-root ${props.rootClassName} `} />
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
