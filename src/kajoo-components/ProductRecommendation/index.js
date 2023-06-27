/* eslint-disable */
import React from 'react'
import { Container, Text, Image, Button } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const ProductRecommendation = (props) => {
  return (
    <Container
      className={`product-recommendation-main ${props.rootClassName} `}
    >
      <Container className="product-recommendation-container">
        <Container className="product-recommendation-container1">
          <Container className="product-recommendation-container2">
            <Text
              text={props.text}
              tag="span"
              className="product-recommendation-text product-recommendation-paragraph-default"
            />
            <Image
              src={props.src}
              className="product-recommendation-image product-recommendation-image-default"
            />
            <Text
              text={props.text1}
              tag="span"
              className="product-recommendation-text1 product-recommendation-paragraph-default"
            />
          </Container>
          <Container className="product-recommendation-container3">
            <Container className="product-recommendation-container4">
              <Text
                text={props.text2}
                tag="span"
                className="product-recommendation-text2 product-recommendation-paragraph-default"
              />
              <Image
                src={props.src1}
                className="product-recommendation-image1 product-recommendation-image-default"
              />
            </Container>
            <Text
              text={props.text3}
              tag="span"
              className="product-recommendation-text3 product-recommendation-paragraph-default"
            />
          </Container>
          <Container className="product-recommendation-container5">
            <Container className="product-recommendation-container6">
              <Text
                text={props.text4}
                tag="span"
                className="product-recommendation-text4 product-recommendation-paragraph-default"
              />
              <Image
                src={props.src2}
                className="product-recommendation-image2 product-recommendation-image-default"
              />
            </Container>
            <Text
              text={props.text5}
              tag="span"
              className="product-recommendation-text5 product-recommendation-paragraph-default"
            />
          </Container>
        </Container>
        <Container className="product-recommendation-container7">
          <Button
            text={props.text6}
            className="product-recommendation-button product-recommendation-button-default"
          />
          <Button
            text={props.text7}
            className="product-recommendation-button1 product-recommendation-button-default"
          />
          <Button
            text={props.text8}
            className="product-recommendation-button2 product-recommendation-button-default"
          />
        </Container>
      </Container>
    </Container>
  )
}

ProductRecommendation.defaultProps = {
  rootClassName: '',
  text: 'HEADER',
  src: '/icons/default-imag.svg',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text2: 'HEADER',
  src1: '/icons/default-imag.svg',
  text3:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text4: 'HEADER',
  src2: '/icons/default-imag.svg',
  text5:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text6: 'Button',
  text7: 'Button',
  text8: 'Button',
}

ProductRecommendation.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  src1: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  src2: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
}

export default ProductRecommendation
