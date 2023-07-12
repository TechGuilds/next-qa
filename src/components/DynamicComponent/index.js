/* eslint-disable */
import React from 'react'
import { Container, RichText, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const DynamicComponent = (props) => {
  return (
    <Container className={`dynamic-component-root ${props.rootClassName} `}>
      <RichText value={props.fields.value} />
      <Container className="dynamic-component-container">
        <Text text={props.fields.text} />
      </Container>
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    value:
      '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    tag: 'span',
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
