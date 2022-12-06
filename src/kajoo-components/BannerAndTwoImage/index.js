/* eslint-disable */
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const BannerAndTwoImage = (props) => {
  return (
    <Container className={` ${props.rootClassName} `}>
      <Container className="banner-and-two-image-container">
        <Image
          src={props.src}
          className="banner-and-two-image-image banner-and-two-image-image-default"
        />
        <Container className="banner-and-two-image-container1 banner-and-two-image-container-default">
          <Image
            src={props.src2}
            className="banner-and-two-image-image1 banner-and-two-image-image-default"
          />
          <Container className="">
            <Image
              src={props.src1}
              className="banner-and-two-image-image2 banner-and-two-image-image-default"
            />
            <Text
              text={props.text}
              className="banner-and-two-image-text banner-and-two-image-paragraph-default"
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

BannerAndTwoImage.defaultProps = {
  rootClassName: '',
  src: '/graphics/default.png',
  src2: '/graphics/default.png',
  src1: '/graphics/default.png',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
}

BannerAndTwoImage.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  src2: PropTypes.string,
  src1: PropTypes.string,
  text: PropTypes.string,
}

export default BannerAndTwoImage
