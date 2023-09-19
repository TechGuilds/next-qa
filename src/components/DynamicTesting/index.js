/* eslint-disable */
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const DynamicTesting = (props) => {
  return (
    <Container className={`dynamic-testing-root ${props.rootClassName} `} />
  )
}

DynamicTesting.defaultProps = {
  fields: {},
  rootClassName: '',
}

DynamicTesting.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicTesting
