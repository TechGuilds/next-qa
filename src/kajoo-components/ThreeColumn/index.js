/* eslint-disable */
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const ThreeColumn = (props) => {
  return (
    <Container className={` ${props.rootClassName} `}>
      <Container className="three-column-container">
        <Container className="three-column-container1 three-column-container-default">
          <Image
            src={props.src}
            className="three-column-image three-column-image-default"
          />
          <Text
            text={props.text}
            className="three-column-text three-column-paragraph-default"
          />
          <Text
            text={props.text1}
            className="three-column-text1 three-column-paragraph-default"
          />
        </Container>
        <Container className="three-column-container2 three-column-container-default">
          <Image
            src={props.src1}
            className="three-column-image1 three-column-image-default"
          />
          <Text
            text={props.text2}
            className="three-column-text2 three-column-paragraph-default"
          />
          <Text
            text={props.text3}
            className="three-column-text3 three-column-paragraph-default"
          />
        </Container>
        <Container className="three-column-container3 three-column-container-default">
          <Image
            src={props.src2}
            className="three-column-image2 three-column-image-default"
          />
          <Text
            text={props.text4}
            className="three-column-text4 three-column-paragraph-default"
          />
          <Text
            text={props.text5}
            className="three-column-text5 three-column-paragraph-default"
          />
        </Container>
      </Container>
    </Container>
  )
}

ThreeColumn.defaultProps = {
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

ThreeColumn.propTypes = {
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

export default ThreeColumn
