/* eslint-disable */
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const Component2 = (props) => {
  return (
    <Container className={`component2-container ${props.rootClassName} `} />
  )
}

Component2.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

Component2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default Component2
