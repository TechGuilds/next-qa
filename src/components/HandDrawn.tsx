/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './HandDrawn.module.css'

const HandDrawn = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Image
            src={props.fields.src}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Image
            src={props.fields.src1}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Image
            src={props.fields.src2}
            className={` ${styles['image2']} ${styles['image-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container2']} ${styles['container-default']} `}
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
          className={` ${styles['container3']} ${styles['container-default']} `}
        >
          <Button
            text={props.fields.text2}
            className={` ${styles['button']} ${styles['button-default']} `}
          />
          <Button
            text={props.fields.text3}
            className={` ${styles['button1']} ${styles['button-default']} `}
          />
          <Button
            text={props.fields.text4}
            className={` ${styles['button2']} ${styles['button-default']} `}
          />
        </Container>
        <Text
          text={props.fields.text5}
          className={` ${styles['text2']} ${styles['paragraph-default']} `}
        />
      </Container>
    </Container>
  )
}

HandDrawn.defaultProps = {
  rootClassName: '',
  fields: {},
}

HandDrawn.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default HandDrawn
