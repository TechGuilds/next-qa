/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BannerAndTwoImage1.module.css'

const BannerAndTwoImage1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Image
            src="/icons/default-imag.svg"
            alt="default-kajoo-imag"
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Image
            src="/icons/default-imag.svg"
            alt="default-kajoo-imag"
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
        </Container>
        <Container className={styles['container2']}>
          <Container className={styles['container3']}>
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

BannerAndTwoImage1.defaultProps = {
  fields: {},
  rootClassName: '',
}

BannerAndTwoImage1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default BannerAndTwoImage1
