/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Button,
  Image,
  Text,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BannerAndTwoImage.module.css'

const BannerAndTwoImage = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Button
          className={` ${styles['button']} ${styles['button-default']} `}
        />
        <Button
          text="Button"
          className={` ${styles['button1']} ${styles['button-default']} `}
        />
        <Container className={styles['container1']}>
          <Image
            src={props.fields.src}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Container
            className={` ${styles['container2']} ${styles['container-default']} `}
          >
            <Text
              text="HEADER"
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.fields.text2}
              className={` ${styles['button2']} ${styles['button-default']} `}
            />
          </Container>
        </Container>
        <Container className={styles['container3']}>
          <Image
            src={props.fields.src}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Container
            className={` ${styles['container4']} ${styles['container-default']} `}
          >
            <Text
              text={props.fields.text}
              className={` ${styles['text2']} ${styles['paragraph-default']} `}
            />
            <Text
              text={props.fields.text1}
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.fields.text2}
              className={` ${styles['button3']} ${styles['button-default']} `}
            />
          </Container>
        </Container>
        <Container className={styles['container5']}>
          <Image
            src={props.fields.src}
            className={` ${styles['image2']} ${styles['image-default']} `}
          />
          <Container
            className={` ${styles['container6']} ${styles['container-default']} `}
          >
            <Text
              text={props.fields.text}
              className={` ${styles['text4']} ${styles['paragraph-default']} `}
            />
            <Text
              text={props.fields.text1}
              className={` ${styles['text5']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.fields.text2}
              className={` ${styles['button4']} ${styles['button-default']} `}
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
