/* eslint-disable */
import React from 'react'
import { Container } from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const Component1 = (props) => {
  return <Container className={`component1-root ${props.rootClassName} `} />
}

Component1.defaultProps = {
  rootClassName: '',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component1
