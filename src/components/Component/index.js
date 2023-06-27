/* eslint-disable */
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const AppComponent = (props) => {
  return (
    <Container className={`component-component ${props.rootClassName} `}>
      <Container className="component-container component-container-default">
        <Text
          text={props.fields.text}
          tag="span"
          className="component-paragraph-default"
        />
        <Text
          text={props.fields.text3}
          tag="h1"
          className="component-header-default"
        />
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className="component-image-default"
        />
        <Text
          text={props.fields.text1}
          tag="span"
          className="component-paragraph-default"
        />
        <Text
          text={props.fields.text2}
          tag="span"
          className="component-paragraph-default"
        />
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppComponent
