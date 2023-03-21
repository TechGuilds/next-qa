/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BannerAndTwoImage65656.module.css'

const BannerAndTwoImage65656 = (props) => {
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
          <Image
            src={props.src2}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Container>
            <Image
              src={props.src1}
              className={` ${styles['image2']} ${styles['image-default']} `}
            />
            <Text
              text={props.text}
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

BannerAndTwoImage65656.defaultProps = {
  rootClassName: '',
  src: '/icons/default-imag.svg',
  src2: '/icons/default-imag.svg',
  src1: '/icons/default-imag.svg',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
}

BannerAndTwoImage65656.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  src2: PropTypes.string,
  src1: PropTypes.string,
  text: PropTypes.string,
}

export default BannerAndTwoImage65656
