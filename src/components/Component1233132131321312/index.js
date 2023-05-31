/* eslint-disable */
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const Component1233132131321312 = (props) => {
  return (
    <Container
      className={`component1233132131321312-component ${props.rootClassName} `}
    >
      <Text
        text={props.fields.text}
        tag="span"
        className="component1233132131321312-text component1233132131321312paragraph-default"
      />
      <Container className="component1233132131321312-container component1233132131321312container-default">
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className="component1233132131321312-image component1233132131321312image-default"
        />
      </Container>
    </Container>
  )
}

Component1233132131321312.defaultProps = {
  rootClassName: '',
  fields: {},
}

Component1233132131321312.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Component1233132131321312
