/* eslint-disable */
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const ThreeColuD = (props) => {
  return (
    <Container className={` ${props.rootClassName} `}>
      <Container className="three-colu-d-container">
        <Container className="three-colu-d-container1 three-colu-d-container-default">
          <Image
            src={props.fields.src}
            className="three-colu-d-image three-colu-d-image-default"
          />
          <Text
            text={props.fields.text}
            className="three-colu-d-text three-colu-d-paragraph-default"
          />
          <Text
            text={props.fields.text1}
            className="three-colu-d-text1 three-colu-d-paragraph-default"
          />
        </Container>
        <Container className="three-colu-d-container2 three-colu-d-container-default">
          <Image
            src={props.fields.src1}
            className="three-colu-d-image1 three-colu-d-image-default"
          />
          <Text
            text={props.fields.text2}
            className="three-colu-d-text2 three-colu-d-paragraph-default"
          />
          <Text
            text={props.fields.text3}
            className="three-colu-d-text3 three-colu-d-paragraph-default"
          />
        </Container>
        <Container className="three-colu-d-container3 three-colu-d-container-default">
          <Image
            src={props.fields.src2}
            className="three-colu-d-image2 three-colu-d-image-default"
          />
          <Text
            text={props.fields.text4}
            className="three-colu-d-text4 three-colu-d-paragraph-default"
          />
          <Text
            text={props.fields.text5}
            className="three-colu-d-text5 three-colu-d-paragraph-default"
          />
        </Container>
      </Container>
    </Container>
  )
}

ThreeColuD.defaultProps = {
  rootClassName: '',
  fields: {},
}

ThreeColuD.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ThreeColuD
