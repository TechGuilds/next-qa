/* eslint-disable */
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const ThreeColumnTest = (props) => {
  return (
    <Container className="">
      <Container bgImage className="three-column-test-container">
        <Container
          bgImage={props.bgImage}
          className="three-column-test-container1"
        >
          <Image src={props.src} className="three-column-test-image" />
          <Text text={props.text} className="three-column-test-text" />
          <Text text={props.text1} className="three-column-test-text1" />
        </Container>
        <Container
          bgImage={props.bgImage1}
          className="three-column-test-container2"
        >
          <Image
            src="/icons/default-imag.svg"
            className="three-column-test-image1"
          />
          <Text text={props.text2} className="three-column-test-text2" />
          <Text text={props.text3} className="three-column-test-text3" />
        </Container>
        <Container
          bgImage={props.bgImage2}
          className="three-column-test-container3"
        >
          <Image
            src="/icons/default-imag.svg"
            className="three-column-test-image2"
          />
          <Text text={props.text4} className="three-column-test-text4" />
          <Text text={props.text5} className="three-column-test-text5" />
        </Container>
      </Container>
    </Container>
  )
}

ThreeColumnTest.defaultProps = {
  kX7XQVMUoQUMM4C6PrZEe: '/icons/default-imag.svg',
  du6x2n2CF9pnr1vzte51N: '/icons/default-imag.svg',
  bgImage: '',
  src: '/icons/default-imag.svg',
  text: 'HEADER',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  bgImage1: '',
  text2: 'HEADER',
  text3: 'ddf',
  bgImage2: '',
  text4: 'HEADER',
  text5:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
}

ThreeColumnTest.propTypes = {
  kX7XQVMUoQUMM4C6PrZEe: PropTypes.string,
  du6x2n2CF9pnr1vzte51N: PropTypes.string,
  bgImage: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  bgImage1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  bgImage2: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
}

export default ThreeColumnTest
