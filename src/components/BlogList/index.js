/* eslint-disable */
import React from 'react'
import {
  Container,
  Text,
  Image,
  RichText,
} from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const RepeaterLocalComponent = (props) => {
  return (
    <Container
      className={`repeater-local-component-root ${props.rootClassName} `}
    >
      <Text
        text={props.fields.CollectionTitle}
        tag="span"
        className="repeater-local-component-text"
      />
      <Container className="repeater-local-component-container">
        {props.fields.items.map((item, index) => (
          <Container key={index} className="">
            <Container className="repeater-local-component-container2">
              <Container className="repeater-local-component-container3">
                <Image
                  src={item.Image}
                  alt={item.alt}
                  className="repeater-local-component-image 61a41d4370946d97c938c466"
                />
                <RichText
                  value={item.Description}
                  className="repeater-local-component-richtext"
                />
              </Container>
              <Text
                text={item.BlogTitle}
                tag="h1"
                className="repeater-local-component-text1"
              />
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

RepeaterLocalComponent.defaultProps = {
  rootClassName: '',
  fields: {},
}

RepeaterLocalComponent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RepeaterLocalComponent
