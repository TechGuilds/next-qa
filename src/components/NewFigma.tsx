/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigma.module.css'

const BannerAndTwoImage = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.bgImage}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Image
            src={props.fields.bgImage}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Container>
            <Image
              src={props.fields.bgImage}
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
  rootClassName: '',
  fields: {},
}

BannerAndTwoImage.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default BannerAndTwoImage
