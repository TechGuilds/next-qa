/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Button, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.fields.text} className={styles['header-default']} />
      <Text text={props.fields.text1} className={styles['paragraph-default']} />
      <Button link={props.fields.link} className={styles['button-default']} />
      <Image
        src={props.fields.src}
        alt={props.fields.alt}
        className={styles['image-default']}
      />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    text: 'Heading',
    tag: 'h1',
    text1:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    tag1: 'span',
    text2: 'Button',
    link: '#',
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-imag',
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
