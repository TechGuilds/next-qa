/* eslint-disable */
import React from 'react'
import { Container, Text, Image, Button } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const ProductRecommendation = (props) => {
  return (
    <Container
      className={`product-recommendation-root ${props.rootClassName} `}
    >
      <Container className="product-recommendation-container">
        <Container className="product-recommendation-container01">
          <Container className="product-recommendation-container02">
            <Text
              text="HEADER"
              tag="span"
              className="product-recommendation-text"
            />
            <Image
              src="/icons/default-imag.svg"
              alt="default-kajoo-imag"
              className="product-recommendation-image"
            />
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className="product-recommendation-text1"
            />
            <Container className="product-recommendation-container03">
              <Container className="product-recommendation-container04">
                <Button
                  link="#"
                  text="Button"
                  className="product-recommendation-button"
                />
                <Container className="product-recommendation-container05">
                  <Text
                    text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
                    tag="span"
                    className="product-recommendation-text2"
                  />
                </Container>
              </Container>
            </Container>
          </Container>
          <Container className="product-recommendation-container06">
            <Container className="product-recommendation-container07">
              <Text
                text="HEADER"
                tag="span"
                className="product-recommendation-text3"
              />
              <Image
                src="/icons/default-imag.svg"
                alt="default-kajoo-imag"
                className="product-recommendation-image1"
              />
            </Container>
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className="product-recommendation-text4"
            />
            <Button
              link="#"
              text="Button"
              className="product-recommendation-button1"
            />
          </Container>
          <Container className="product-recommendation-container08">
            <Container className="product-recommendation-container09">
              <Text
                text="HEADER"
                tag="span"
                className="product-recommendation-text5"
              />
              <Image
                src="/icons/default-imag.svg"
                alt="default-kajoo-imag"
                className="product-recommendation-image2"
              />
            </Container>
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className="product-recommendation-text6"
            />
            <Button
              link="#"
              text="Button"
              className="product-recommendation-button2"
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

ProductRecommendation.defaultProps = {
  fields: {},
  rootClassName: '',
}

ProductRecommendation.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ProductRecommendation
