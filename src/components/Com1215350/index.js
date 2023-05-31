/* eslint-disable */
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const Com1215350 = (props) => {
  return (
    <Container className={`com1215350-component ${props.rootClassName} `}>
      <Text
        text={props.fields.text}
        tag="span"
        className="com1215350paragraph-default"
      />
    </Container>
  )
}

Com1215350.defaultProps = {
  rootClassName: '',
  fields: {},
}

Com1215350.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Com1215350
