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

import styles from './Poiuyt.module.css'

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
              text="HEADER"
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Image
              src="/icons/default-imag.svg"
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <RichText
              value="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              className={styles['richtext']}
            />
            <Button
              text="Button"
              link
              className={` ${styles['button']} ${styles['button-default']} `}
            />
          </Container>
          <Container
            className={` ${styles['container3']} ${styles['container-default']} `}
          >
            <Container
              className={` ${styles['container4']} ${styles['container-default']} `}
            >
              <Text
                text="HEADER"
                className={` ${styles['text1']} ${styles['paragraph-default']} `}
              />
              <Image
                src="/icons/default-imag.svg"
                className={` ${styles['image1']} ${styles['image-default']} `}
              />
            </Container>
            <RichText
              value="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              className={styles['richtext1']}
            />
            <Button
              text="Button"
              link
              className={` ${styles['button1']} ${styles['button-default']} `}
            />
          </Container>
          <Container
            className={` ${styles['container5']} ${styles['container-default']} `}
          >
            <Container
              className={` ${styles['container6']} ${styles['container-default']} `}
            >
              <Text
                text="HEADER"
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Image
                src="/icons/default-imag.svg"
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
            </Container>
            <RichText
              value="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              className={styles['richtext2']}
            />
            <Button
              text="Button"
              link
              className={` ${styles['button2']} ${styles['button-default']} `}
            />
          </Container>
        </Container>
        <Container
          className={` ${styles['container7']} ${styles['container-default']} `}
        />
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
