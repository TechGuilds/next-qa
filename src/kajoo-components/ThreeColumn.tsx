/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Button, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ThreeColumn.module.css'

const ThreeColumn = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container bgImage className={styles['container']}>
        <Container bgImage className={styles['container1']}>
          <Image
            src="/icons/default-imag.svg"
            alt="default-kajoo-imag"
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Button
            text="Button"
            link="#"
            className={` ${styles['button']} ${styles['paragraph-default']} `}
          />
          <Text
            text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
            tag="span"
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container bgImage className={styles['container2']}>
          <Image
            src="/icons/default-imag.svg"
            alt="default-kajoo-imag"
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Text
            text="HEADER"
            tag="span"
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
          <Text
            text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
            tag="span"
            className={` ${styles['text2']} ${styles['paragraph-default']} `}
          />
          <Text text="Heading" tag="h1" className={styles['header-default']} />
        </Container>
        <Container bgImage className={styles['container3']}>
          <Image
            src="/icons/default-imag.svg"
            alt="default-kajoo-imag"
            className={` ${styles['image2']} ${styles['image-default']} `}
          />
          <Text
            text="HEADER"
            tag="span"
            className={` ${styles['text4']} ${styles['paragraph-default']} `}
          />
          <Text
            text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
            tag="span"
            className={` ${styles['text5']} ${styles['paragraph-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

ThreeColumn.defaultProps = {
  fields: {},
  rootClassName: '',
}

ThreeColumn.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ThreeColumn
