/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import ProductErrorComponent from './ProductErrorComponent'
import styles from './ProductRecommendation.module.css'

const ProductRecommendation = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text
              text={props.text}
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Image
              src={props.src}
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <Text
              text={props.text1}
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container className={styles['container3']}>
            <Container className={styles['container4']}>
              <Text
                text={props.text2}
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.src1}
                className={` ${styles['image1']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.text3}
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container className={styles['container5']}>
            <Container className={styles['container6']}>
              <Text
                text={props.text4}
                className={` ${styles['text4']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.src2}
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.text5}
              className={` ${styles['text5']} ${styles['paragraph-default']} `}
            />
          </Container>
        </Container>
        <Container className={styles['container7']}>
          <Button
            text={props.text6}
            className={` ${styles['button']} ${styles['button-default']} `}
          />
          <Button
            text={props.text7}
            className={` ${styles['button1']} ${styles['button-default']} `}
          />
          <Button
            text={props.text8}
            className={` ${styles['button2']} ${styles['button-default']} `}
          />
        </Container>
        <ProductErrorComponent rootClassName="root-class-name" />
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
