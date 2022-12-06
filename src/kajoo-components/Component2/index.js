/* eslint-disable */
import React from 'react'
import { Container } from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const Component2 = (props) => {
  return <Container className={`component2-root ${props.rootClassName} `} />
}

Component2.defaultProps = {
  rootClassName: '',
}

Component2.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component2
