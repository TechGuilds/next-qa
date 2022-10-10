/* eslint-disable */
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className="">
      <Container bgImage className="new-figma-component-container">
        <Container
          bgImage={props.fields.bgImage}
          className="new-figma-component-container1"
        >
          <Container
            bgImage={props.fields.bgImage1}
            className="new-figma-component-container2"
          >
            <Container
              bgImage={props.fields.bgImage2}
              className="new-figma-component-container3"
            >
              <Text
                text={props.fields.text}
                className="new-figma-component-text"
              />
              <Image
                src={props.fields.src}
                alt={props.fields.alt}
                className="new-figma-component-image"
              />
            </Container>
            <Container
              bgImage={props.fields.bgImage3}
              className="new-figma-component-container4"
            >
              <Text
                text={props.fields.text1}
                className="new-figma-component-text1"
              />
            </Container>
            <Container
              bgImage={props.fields.bgImage4}
              className="new-figma-component-container5"
            >
              <Container
                bgImage={props.fields.bgImage5}
                className="new-figma-component-container6"
              >
                <Text
                  text={props.fields.text2}
                  className="new-figma-component-text2"
                />
              </Container>
            </Container>
          </Container>
        </Container>
        <Container
          bgImage={props.fields.bgImage6}
          className="new-figma-component-container7"
        >
          <Image
            src={props.fields.src1}
            alt={props.fields.alt1}
            className="new-figma-component-image1"
          />
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  fields: {},
}

NewFigmaComponent.propTypes = {
  fields: PropTypes.object,
}

export default NewFigmaComponent
