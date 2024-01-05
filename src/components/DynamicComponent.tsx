/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text
        text={props.fields.text1}
        tag="h1"
        className={` ${styles['text']} ${styles['header-default']} `}
      />
      <Image
        src={props.fields.src1}
        alt={props.fields.alt1}
        className={` ${styles['image']} ${styles['image-zzz']} `}
      />
      <Image
        src={props.fields.src2}
        alt={props.fields.alt2}
        className={` ${styles['image1']} ${styles['image-zzz']} `}
      />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-imag',
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    text1: 'Heading',
    src1: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt1: 'default-kajoo-imag',
    src2: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt2: 'default-kajoo-imag',
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
