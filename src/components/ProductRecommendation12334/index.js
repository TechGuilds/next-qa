/* eslint-disable */
import React from 'react'
import { Container, Text, Image, Button } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const ProductRecommendation12334 = (props) => {
  return (
    <Container
      className={`product-recommendation12334-main ${props.rootClassName} `}
    >
      <Container className="product-recommendation12334-container">
        <Container className="product-recommendation12334-container1">
          <Container className="product-recommendation12334-container2">
            <Text
              text={props.fields.text}
              className="product-recommendation12334-text product-recommendation12334paragraph-default"
            />
            <Image
              src={props.fields.src}
              className="product-recommendation12334-image product-recommendation12334image-default"
            />
            <Text
              text={props.fields.text1}
              className="product-recommendation12334-text1 product-recommendation12334paragraph-default"
            />
          </Container>
          <Container className="product-recommendation12334-container3">
            <Container className="product-recommendation12334-container4">
              <Text
                text={props.fields.text2}
                className="product-recommendation12334-text2 product-recommendation12334paragraph-default"
              />
              <Image
                src={props.fields.src1}
                className="product-recommendation12334-image1 product-recommendation12334image-default"
              />
            </Container>
            <Text
              text={props.fields.text3}
              className="product-recommendation12334-text3 product-recommendation12334paragraph-default"
            />
          </Container>
          <Container className="product-recommendation12334-container5">
            <Container className="product-recommendation12334-container6">
              <Text
                text={props.fields.text4}
                className="product-recommendation12334-text4 product-recommendation12334paragraph-default"
              />
              <Image
                src={props.fields.src2}
                className="product-recommendation12334-image2 product-recommendation12334image-default"
              />
            </Container>
            <Text
              text={props.fields.text5}
              className="product-recommendation12334-text5 product-recommendation12334paragraph-default"
            />
          </Container>
        </Container>
        <Container className="product-recommendation12334-container7">
          <Button
            text={props.fields.text6}
            className="product-recommendation12334-button product-recommendation12334button-default"
          />
          <Button
            text={props.fields.text7}
            className="product-recommendation12334-button1 product-recommendation12334button-default"
          />
          <Button
            text={props.fields.text8}
            className="product-recommendation12334-button2 product-recommendation12334button-default"
          />
        </Container>
      </Container>
    </Container>
  )
}

ProductRecommendation12334.defaultProps = {
  rootClassName: '',
  fields: {},
}

ProductRecommendation12334.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ProductRecommendation12334
