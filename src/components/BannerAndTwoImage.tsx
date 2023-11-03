/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BannerAndTwoImage.module.css'

const BannerAndTwoImage = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Container className={styles['container1']}>
          <Container className={` ${styles['container2']} ${styles['']} `}>
            <Text
              text={props.fields.text}
              tag="span"
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Image
            src={props.fields.src1}
            alt={props.fields.alt1}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

BannerAndTwoImage.defaultProps = {
  fields: {
    src: '/icons/default-imag.svg',
    alt: 'default-kajoo-imag',
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
    src1: '/icons/default-imag.svg',
    alt1: 'default-kajoo-imag',
  },
  rootClassName: '',
}

BannerAndTwoImage.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default BannerAndTwoImage
