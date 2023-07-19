/* eslint-disable */
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const DynamicComponent = (props) => {
  return (
    <Container className={`dynamic-component-root ${props.rootClassName} `}>
      <Container className="dynamic-component-container">
        <Text text={props.fields.text} tag="span" />
      </Container>
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
