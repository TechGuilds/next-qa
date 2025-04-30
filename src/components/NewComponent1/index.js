/* eslint-disable */
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const NewComponent1 = (props) => {
  return (
    <Container
      className={`new-component1-new-component1 ${props.rootClassName} component ${props.params?.styles} `}
    >
      <Text
        text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
        className="text-default"
      />
    </Container>
  )
}

NewComponent1.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

NewComponent1.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default NewComponent1
