/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ProductRecommendation2.module.css'

const ProductRecommendation2 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Container className={styles['container3']}>
              <Text
                text="HEADER"
                tag="span"
                className={` ${styles['text']} ${styles['paragraph-default']} `}
              />
              <Image
                src="/icons/default-imag.svg"
                alt="default-kajoo-imag"
                className={` ${styles['image']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container className={styles['container4']}>
            <Container className={styles['container5']}>
              <Text
                text="HEADER"
                tag="span"
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Image
                src="/icons/default-imag.svg"
                alt="default-kajoo-imag"
                className={` ${styles['image1']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
          </Container>
        </Container>
        <Container className={styles['container6']}>
          <Button
            link="#"
            text="Button"
            className={` ${styles['button']} ${styles['button-default']} `}
          />
          <Button
            link="#"
            text="Button"
            className={` ${styles['button1']} ${styles['button-default']} `}
          />
          <Button
            link="#"
            text="Button"
            className={` ${styles['button2']} ${styles['button-default']} `}
          />
        </Container>
      </Container>
      <Container className={styles['container7']}>
        <Text
          text="HEADER"
          tag="span"
          className={` ${styles['text4']} ${styles['paragraph-default']} `}
        />
        <Image
          src="/icons/default-imag.svg"
          alt="default-kajoo-imag"
          className={` ${styles['image2']} ${styles['image-default']} `}
        />
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
          tag="span"
          className={` ${styles['text5']} ${styles['paragraph-default']} `}
        />
      </Container>
    </Container>
  )
}

ProductRecommendation2.defaultProps = {
  fields: {},
  rootClassName: '',
}

ProductRecommendation2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ProductRecommendation2
