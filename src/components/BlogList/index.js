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

const AppComponent = (props) => {
  return (
    <Container className={`component-root ${props.rootClassName} `}>
      <Text
        text={props.fields.CollectionTitle}
        tag="span"
        className="component-text"
      />
      <Container className="component-container">
        {props.fields.items.map((item, index) => (
          <Container key={index} className="">
            <Container className="component-container2">
              <Container className="component-container3">
                <Image
                  src={item.Image}
                  alt={item.alt}
                  className="component-image 61a41d4370946d97c938c466"
                />
                <RichText
                  value={item.Description}
                  className="component-richtext"
                />
              </Container>
              <Text
                text={item.BlogTitle}
                tag="h1"
                className="component-text1"
              />
            </Container>
          </Container>
        ))}
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
