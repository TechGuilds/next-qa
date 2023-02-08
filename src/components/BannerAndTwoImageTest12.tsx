/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BannerAndTwoImageTest12.module.css'

const BannerAndTwoImageTest12 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.src}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Container />
        </Container>
      </Container>
      <Container className={styles['container3']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container5']}>
              <Text
                text={item.fields.text1}
                tag="h1"
                className={styles['text']}
              />
              <Text
                text={item.fields.text}
                tabIndex="1"
                className={` ${styles['text1']} ${styles['acece83e7e5d4e62c6a60']} `}
              >
                <Image
                  src={item.fields.src2}
                  className={` ${styles['image1']} ${styles['acece83e7e5d4e62c6a6c']} `}
                />
              </Text>
              <Image
                src={item.fields.src3}
                alt={item.fields.alt}
                className={` ${styles['image2']} ${styles['acece83e7e5d4e62c6a6c']} `}
              />
              <Image
                src={item.fields.src1}
                className={` ${styles['image3']} ${styles['acece83e7e5d4e62c6a6c']} `}
              />
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

BannerAndTwoImageTest12.defaultProps = {
  rootClassName: '',
  fields: {},
}

BannerAndTwoImageTest12.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default BannerAndTwoImageTest12
