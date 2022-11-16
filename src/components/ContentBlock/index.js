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
            src={props.src}
            className="three-colu-d-image three-colu-d-image-default"
          />
          <Text
            text={props.text}
            className="three-colu-d-text three-colu-d-paragraph-default"
          />
          <Text
            text={props.text1}
            className="three-colu-d-text1 three-colu-d-paragraph-default"
          />
        </Container>
        <Container className="three-colu-d-container2 three-colu-d-container-default">
          <Image
            src={props.src1}
            className="three-colu-d-image1 three-colu-d-image-default"
          />
          <Text
            text={props.text2}
            className="three-colu-d-text2 three-colu-d-paragraph-default"
          />
          <Text
            text={props.text3}
            className="three-colu-d-text3 three-colu-d-paragraph-default"
          />
        </Container>
        <Container className="three-colu-d-container3 three-colu-d-container-default">
          <Image
            src={props.src2}
            className="three-colu-d-image2 three-colu-d-image-default"
          />
          <Text
            text={props.text4}
            className="three-colu-d-text4 three-colu-d-paragraph-default"
          />
          <Text
            text={props.text5}
            className="three-colu-d-text5 three-colu-d-paragraph-default"
          />
        </Container>
      </Container>
    </Container>
  )
}

ThreeColuD.defaultProps = {
  rootClassName: '',
  src: '/graphics/default.png',
  text: 'HEADER',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  src1: '/graphics/default.png',
  text2: 'HEADER',
  text3:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  src2: '/graphics/default.png',
  text4: 'HEADER',
  text5:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
}

ThreeColuD.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  src1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  src2: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
}

export default ThreeColuD
