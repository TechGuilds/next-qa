/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BannerAndTwoImage.module.css'

const BannerAndTwoImage = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.src}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Container className={styles['container1']}>
          <Image
            src={props.fields.src1}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Container>
            <Image
              src={props.fields.src2}
              className={` ${styles['image2']} ${styles['image-default']} `}
            />
            <Text
              text={props.fields.text}
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

BannerAndTwoImage.defaultProps = {
  fields: {
    src: '/icons/default-imag.svg',
    src1: '/icons/default-imag.svg',
    src2: '/icons/default-imag.svg',
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  },
  rootClassName: '',
}

BannerAndTwoImage.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default BannerAndTwoImage
