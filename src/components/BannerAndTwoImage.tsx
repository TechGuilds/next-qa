/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text, Checkbox } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BannerAndTwoImage.module.css'

const BannerAndTwoImage = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Image src={props.fields.src} className={styles['image-hello-hi']} />
        <Container className={styles['container1']}>
          <Image
            src={props.fields.src2}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Container>
            <Image
              src={props.fields.src1}
              className={` ${styles['image2']} ${styles['image-default']} `}
            />
            <Text
              text={props.fields.text}
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Checkbox className={styles['checkbox-default']} />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

BannerAndTwoImage.defaultProps = {
  rootClassName: '',
  fields: {},
}

BannerAndTwoImage.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default BannerAndTwoImage
