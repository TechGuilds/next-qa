/* eslint-disable */
import React from 'react'
import { Container } from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const Component3 = (props) => {
  return <Container className={`component3-root ${props.rootClassName} `} />
}

Component3.defaultProps = {
  rootClassName: '',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component3
