/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BannerAndTwoImage.module.css'

const BannerAndTwoImage = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.src}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Container className={styles['container1']}>
          <Container
            className={` ${styles['container2']} ${styles['container-default']} `}
          >
            <Image
              src={props.fields.src2}
              className={` ${styles['image1']} ${styles['image-default']} `}
            />
            <Container>
              <Image
                src={props.fields.src1}
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
            </Container>
          </Container>
          <Text
            text={props.fields.text}
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
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
