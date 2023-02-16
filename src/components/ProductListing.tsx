/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  RichText,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ProductListing.module.css'

const ProductRecommendation = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Container
            className={` ${styles['container2']} ${styles['container-default']} `}
          >
            <Text
              text={props.fields.Title}
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Image
              src={props.fields.Image}
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <RichText
              value={props.fields.Description}
              className={styles['richtext']}
            />
          </Container>
          <Container
            className={` ${styles['container3']} ${styles['container-default']} `}
          >
            <Container
              className={` ${styles['container4']} ${styles['container-default']} `}
            >
              <Text
                text={props.fields.Title}
                className={` ${styles['text1']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.fields.Image}
                className={` ${styles['image1']} ${styles['image-default']} `}
              />
            </Container>
            <RichText
              value={props.fields.Description}
              className={styles['richtext1']}
            />
          </Container>
          <Container
            className={` ${styles['container5']} ${styles['container-default']} `}
          >
            <Container
              className={` ${styles['container6']} ${styles['container-default']} `}
            >
              <Text
                text={props.fields.Title}
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.fields.Image}
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
            </Container>
            <RichText
              value={props.fields.Description}
              className={styles['richtext2']}
            />
          </Container>
        </Container>
        <Container
          className={` ${styles['container7']} ${styles['container-default']} `}
        >
          <Button
            text="Button"
            className={` ${styles['button']} ${styles['button-default']} `}
          />
          <Button text="Button" link className={styles['button-default']} />
          <Button text="Button" link className={styles['button-default']} />
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
