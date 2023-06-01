/* eslint-disable */
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const BannerAndTwoImage = (props) => {
  return (
    <Container className={`banner-and-two-image-main ${props.rootClassName} `}>
      <Container className="banner-and-two-image-container">
        <Image
          src={props.fields.src}
          className="banner-and-two-image-image banner-and-two-image-image-default"
        />
        <Container className="banner-and-two-image-container1">
          <Image
            src={props.fields.src2}
            className="banner-and-two-image-image1 banner-and-two-image-image-default"
          />
          <Container className="">
            <Image
              src={props.fields.src1}
              className="banner-and-two-image-image2 banner-and-two-image-image-default"
            />
            <Text
              text={props.fields.text}
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
  fields: {},
}

BannerAndTwoImage.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default BannerAndTwoImage
