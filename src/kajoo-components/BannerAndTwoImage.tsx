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
          src="/icons/default-imag.svg"
          alt="default-kajoo-imag"
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Container className={styles['container1']}>
          <Container className={` ${styles['container2']} ${styles['']} `}>
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Image
            src="/icons/default-imag.svg"
            alt="default-kajoo-imag"
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

BannerAndTwoImage.defaultProps = {
  fields: {},
  rootClassName: '',
}

BannerAndTwoImage.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default BannerAndTwoImage
