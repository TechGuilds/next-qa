/* eslint-disable */
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const NurTest = (props) => {
  return (
    <Container className={`nur-test-nur-test ${props.rootClassName} `}>
      <Container className="nur-test-row-container container-default">
        <Text text={props.fields.text} />
      </Container>
    </Container>
  )
}

NurTest.defaultProps = {
  fields: {
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  },
  rootClassName: '',
  rendering: {},
}

NurTest.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default NurTest
