/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ProductRecommendation.module.css'

const ProductRecommendation = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container bgImage className={styles['container']}>
        <Container bgImage className={styles['container1']}>
          <Container bgImage className={styles['container2']}>
            <Text
              text="HEADER"
              tag="span"
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Image
              src="/icons/default-imag.svg"
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
            <Button
              text="Button"
              className={` ${styles['button']} ${styles['button-default']} `}
            />
            <Text
              text="Heading"
              tag="h1"
              className={styles['header-default']}
            />
          </Container>
          <Container bgImage className={styles['container3']}>
            <Container bgImage className={styles['container4']}>
              <Text
                text="HEADER"
                tag="span"
                className={` ${styles['text3']} ${styles['paragraph-default']} `}
              />
              <Image
                src="/icons/default-imag.svg"
                className={` ${styles['image1']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className={` ${styles['text4']} ${styles['paragraph-default']} `}
            />
            <Button
              text="Button"
              className={` ${styles['button1']} ${styles['button-default']} `}
            />
            <Text
              text="Heading"
              tag="h1"
              className={styles['header-default']}
            />
          </Container>
          <Container bgImage className={styles['container5']}>
            <Container bgImage className={styles['container6']}>
              <Text
                text="HEADER"
                tag="span"
                className={` ${styles['text6']} ${styles['paragraph-default']} `}
              />
              <Image
                src="/icons/default-imag.svg"
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
            </Container>
            <Container className={styles['container7']}>
              <Text
                text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
                tag="span"
                className={` ${styles['text7']} ${styles['paragraph-default']} `}
              />
            </Container>
            <Button
              text="Button"
              className={` ${styles['button2']} ${styles['button-default']} `}
            />
            <Text
              text="Heading"
              tag="h1"
              className={styles['header-default']}
            />
          </Container>
        </Container>
        <Container bgImage className={styles['container8']} />
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
