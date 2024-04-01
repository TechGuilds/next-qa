/* eslint-disable */
import React from 'react'
import { Container, RichText } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const BoundComponent = (props) => {
  return (
    <Container className={`bound-component-container ${props.rootClassName} `}>
      <RichText value={props.fields.value} className="" />
    </Container>
  )
}

BoundComponent.defaultProps = {
  fields: {
    value:
      '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
  },
  rootClassName: '',
}

BoundComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default BoundComponent
