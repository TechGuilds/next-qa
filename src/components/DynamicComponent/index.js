/* eslint-disable */
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const DynamicComponent = (props) => {
  return (
    <Container className={`dynamic-component-root ${props.rootClassName} `} />
  )
}

DynamicComponent.defaultProps = {
  fields: {},
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
