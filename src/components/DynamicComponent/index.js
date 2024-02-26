/* eslint-disable */
import React from 'react'
import { Container, RichText } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const DynamicComponent = (props) => {
  return (
    <Container className={`dynamic-component-root ${props.rootClassName} `}>
      <Container className="dynamic-component-container container-default">
        <RichText value={props.fields.value} className="richtext-richtext270" />
      </Container>
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    value:
      '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
