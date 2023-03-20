/* eslint-disable */
/* eslint-disable */
/* eslint-disable */
/* eslint-disable */
/* eslint-disable */
/* eslint-disable */
/* eslint-disable */
/* eslint-disable */
/* eslint-disable */
/* eslint-disable */
/* eslint-disable */
/* eslint-disable */
/* eslint-disable */
import React from 'react'
import { Container, Text, Image, Button } from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const Product781920 = (props) => {
  return (
    <Container className={` ${props.rootClassName} `}>
      <Container className="product781920-container">
        <Container className="product781920-container1 product781920-container-default">
          <Container className="product781920-container2 product781920-container-default">
            <Text
              text={props.fields.text}
              className="product781920-text product781920-paragraph-default"
            />
            <Image
              src={props.fields.src}
              className="product781920-image product781920-image-default"
            />
            <Text
              text={props.fields.text1}
              className="product781920-text1 product781920-paragraph-default"
            />
          </Container>
          <Container className="product781920-container3 product781920-container-default">
            <Container className="product781920-container4 product781920-container-default">
              <Text
                text={props.fields.text2}
                className="product781920-text2 product781920-paragraph-default"
              />
              <Image
                src={props.fields.src1}
                className="product781920-image1 product781920-image-default"
              />
            </Container>
            <Text
              text={props.fields.text3}
              className="product781920-text3 product781920-paragraph-default"
            />
          </Container>
          <Container className="product781920-container5 product781920-container-default">
            <Container className="product781920-container6 product781920-container-default">
              <Text
                text={props.fields.text4}
                className="product781920-text4 product781920-paragraph-default"
              />
              <Image
                src={props.fields.src2}
                className="product781920-image2 product781920-image-default"
              />
            </Container>
            <Text
              text={props.fields.text5}
              className="product781920-text5 product781920-paragraph-default"
            />
          </Container>
        </Container>
        <Container className="product781920-container7 product781920-container-default">
          <Button
            text={props.fields.text6}
            className="product781920-button product781920-button-default"
          />
          <Button
            text={props.fields.text7}
            className="product781920-button1 product781920-button-default"
          />
          <Button
            text={props.fields.text8}
            className="product781920-button2 product781920-button-default"
          />
        </Container>
      </Container>
    </Container>
  )
}

Product781920.defaultProps = {
  rootClassName: '',
  fields: {},
}

Product781920.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Product781920
