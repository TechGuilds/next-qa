/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, List, Button, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ProductRecommendation.module.css'

const ProductRecommendation = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Text
            text={props.text3}
            tag="span"
            className={styles['paragraph-default']}
          />
          <Text
            text={props.text4}
            tag="span"
            className={styles['paragraph-default']}
          />
          <Text
            text={props.text5}
            tag="span"
            className={styles['paragraph-default']}
          />
          <Text
            text={props.text10}
            tag="span"
            className={styles['paragraph-default']}
          />
          <form className={styles['']} />
          <List text={props.text11} className={styles['list-default']} />
        </Container>
        <Container className={styles['container2']}>
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
      </Container>
      <Image
        src={props.src2}
        alt={props.alt1}
        className={styles['image-default']}
      />
      <Image
        src={props.src3}
        alt={props.alt2}
        className={styles['image-default']}
      />
      <Image
        src={props.src4}
        alt={props.alt3}
        className={styles['image-default']}
      />
    </Container>
  )
}

ProductRecommendation.defaultProps = {
  DPuduHN_pvFbwPGjis4Nx: 'HEADER',
  cgb38fv8XGXyNlF0UeFcA: '/icons/default-imag.svg',
  'pxiaxx5q7NpJ-p8Tl8UHm':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  xZ5RNtGlVpBFL2QvsiYPY:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  '8QNjguTI2npQ_-CbmupbL': 'https://qa-app.kajoo.ca/icons/default-imag.svg',
  iccb1VnfNy8cnd5YYpK9D: '',
  '9KGGKHQTFFxilVqOhp8o1': 'Heading',
  rootClassName: '',
  text3:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  text4:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  text5:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  text10:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  text11: 'List Item',
  text6: 'Button',
  text7: 'c',
  text8: 'Button',
  src2: 'https://qa-app.kajoo.ca/icons/default-imag.svg',
  alt1: '',
  src3: 'https://qa-app.kajoo.ca/icons/default-imag.svg',
  alt2: '',
  src4: 'https://qa-app.kajoo.ca/icons/default-imag.svg',
  alt3: '',
}

ProductRecommendation.propTypes = {
  DPuduHN_pvFbwPGjis4Nx: PropTypes.string,
  cgb38fv8XGXyNlF0UeFcA: PropTypes.string,
  'pxiaxx5q7NpJ-p8Tl8UHm': PropTypes.string,
  xZ5RNtGlVpBFL2QvsiYPY: PropTypes.string,
  '8QNjguTI2npQ_-CbmupbL': PropTypes.string,
  iccb1VnfNy8cnd5YYpK9D: PropTypes.string,
  '9KGGKHQTFFxilVqOhp8o1': PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  src2: PropTypes.string,
  alt1: PropTypes.string,
  src3: PropTypes.string,
  alt2: PropTypes.string,
  src4: PropTypes.string,
  alt3: PropTypes.string,
}

export default ProductRecommendation
