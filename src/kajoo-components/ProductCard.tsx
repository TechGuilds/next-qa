/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ProductCard.module.css'

const ProductCard = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Image
          src={props.src}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Text
            text={props.text}
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.text1}
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
          <Button
            text={props.text2}
            className={` ${styles['button']} ${styles['button-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

ProductCard.defaultProps = {
  rootClassName: '',
  src: '/icons/default-imag.svg',
  text: 'HEADER',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text2: 'Button',
}

ProductCard.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default ProductCard
