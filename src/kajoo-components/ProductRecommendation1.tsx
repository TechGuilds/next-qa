/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  Button,
  RichText,
} from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ProductRecommendation1.module.css'

const ProductRecommendation1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
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
              alt="default-kajoo-imag"
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container bgImage className={styles['container3']}>
            <Container bgImage className={styles['container4']}>
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
          <Container bgImage className={styles['container5']}>
            <Container bgImage className={styles['container6']}>
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
            </Container>
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className={` ${styles['text5']} ${styles['paragraph-default']} `}
            />
          </Container>
        </Container>
        <Container bgImage className={styles['container7']}>
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
      <RichText
        value="&lt;p&gt;Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.&lt;/p&gt;"
        className={` ${styles['richtext-default']} ${styles['richtext']} `}
      />
    </Container>
  )
}

ProductRecommendation1.defaultProps = {
  fields: {},
  rootClassName: '',
}

ProductRecommendation1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ProductRecommendation1
