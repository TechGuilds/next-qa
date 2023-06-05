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
              text={props.fields.text}
              className="product-recommendation-text product-recommendation-paragraph-default"
            />
            <Image
              src={props.fields.src}
              className="product-recommendation-image product-recommendation-image-default"
            />
            <Text
              text={props.fields.text1}
              className="product-recommendation-text1 product-recommendation-paragraph-default"
            />
          </Container>
          <Container className="product-recommendation-container3">
            <Container className="product-recommendation-container4">
              <Text
                text={props.fields.text2}
                className="product-recommendation-text2 product-recommendation-paragraph-default"
              />
              <Image
                src={props.fields.src1}
                className="product-recommendation-image1 product-recommendation-image-default"
              />
            </Container>
            <Text
              text={props.fields.text3}
              className="product-recommendation-text3 product-recommendation-paragraph-default"
            />
          </Container>
          <Container className="product-recommendation-container5">
            <Container className="product-recommendation-container6">
              <Text
                text={props.fields.text4}
                className="product-recommendation-text4 product-recommendation-paragraph-default"
              />
              <Image
                src={props.fields.src2}
                className="product-recommendation-image2 product-recommendation-image-default"
              />
            </Container>
            <Text
              text={props.fields.text5}
              className="product-recommendation-text5 product-recommendation-paragraph-default"
            />
          </Container>
        </Container>
        <Container className="product-recommendation-container7">
          <Button
            text={props.fields.text6}
            className="product-recommendation-button product-recommendation-button-default"
          />
          <Button
            text={props.fields.text7}
            className="product-recommendation-button1 product-recommendation-button-default"
          />
          <Button
            text={props.fields.text8}
            className="product-recommendation-button2 product-recommendation-button-default"
          />
        </Container>
      </Container>
    </Container>
  )
}

ProductRecommendation.defaultProps = {
  rootClassName: '',
  fields: {},
}

ProductRecommendation.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ProductRecommendation
