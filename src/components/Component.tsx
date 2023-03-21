/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Text
          text={props.fields.text}
          tag="span"
          className={` ${styles['text']} ${styles['paragraph-default']} `}
        />
      </Container>
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
