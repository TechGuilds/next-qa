/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container
      className={` ${styles['component']} ${styles[props.rootClassName]} `}
    >
      <Text
        text={props.fields.text}
        tag="h1"
        className={styles['header-default']}
      />
      <Text
        text={props.fields.text1}
        tag="span"
        className={styles['paragraph-default']}
      />
      <Image
        src={props.fields.src}
        alt={props.fields.alt}
        className={` ${styles['image']} ${styles['image-default']} `}
      />
    </Container>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppComponent
