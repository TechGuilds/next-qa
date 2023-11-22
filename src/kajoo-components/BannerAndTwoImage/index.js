/* eslint-disable */
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const BannerAndTwoImage = (props) => {
  return (
    <Container className={`banner-and-two-image-root ${props.rootClassName} `}>
      <Container className="banner-and-two-image-container">
        <Image
          src="/icons/default-imag.svg"
          alt="default-kajoo-imag"
          className="banner-and-two-image-image banner-and-two-image-image-default"
        />
        <Container className="banner-and-two-image-container1">
          <Container className="banner-and-two-image-container2">
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className="banner-and-two-image-text banner-and-two-image-paragraph-default"
            />
          </Container>
          <Image
            src="/icons/default-imag.svg"
            alt="default-kajoo-imag"
            className="banner-and-two-image-image1 banner-and-two-image-image-default"
          />
        </Container>
      </Container>
    </Container>
  )
}

BannerAndTwoImage.defaultProps = {
  fields: {},
  rootClassName: '',
}

BannerAndTwoImage.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default BannerAndTwoImage
