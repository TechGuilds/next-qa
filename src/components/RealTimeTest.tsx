/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RealTimeTest.module.css'

const RealTimeTest = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Image
            src={props.fields.src}
            alt={props.fields.alt}
            className={styles['image-default']}
          />
          <Text
            text={props.fields.text}
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text1}
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container className={styles['container2']}>
          <Image
            src={props.fields.src1}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Text
            text={props.fields.text2}
            className={` ${styles['text2']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text3}
            className={` ${styles['text3']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container className={styles['container3']}>
          <Image
            src={props.fields.src2}
            className={` ${styles['image2']} ${styles['image-default']} `}
          />
          <Text
            text={props.fields.text4}
            className={` ${styles['text4']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text5}
            className={` ${styles['text5']} ${styles['paragraph-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

RealTimeTest.defaultProps = {
  rootClassName: '',
  fields: {},
}

RealTimeTest.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RealTimeTest
