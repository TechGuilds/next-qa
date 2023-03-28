/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ThreeColumnTest.module.css'

const ThreeColumnTest = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Text
            text={props.fields.text}
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text1}
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container2']} ${styles['container-default']} `}
        >
          <Image
            src={props.fields.src1}
            className={` ${styles['image']} ${styles['image-default']} `}
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
        <Container
          className={` ${styles['container3']} ${styles['container-default']} `}
        >
          <Container className={styles['container4']}>
            <Image
              src={props.fields.src2}
              className={` ${styles['image1']} ${styles['image-default']} `}
            />
            <Image
              src={props.fields.src}
              className={` ${styles['image2']} ${styles['image-default']} `}
            />
          </Container>
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

ThreeColumnTest.defaultProps = {
  rootClassName: '',
  fields: {},
}

ThreeColumnTest.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ThreeColumnTest
