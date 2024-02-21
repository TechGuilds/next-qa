/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <Link
        href={props.fields.href}
        text={props.fields.text}
        className={` ${'link-default'} ${styles['link']} `}
      />
      <Text
        text={props.fields.text1}
        className={` ${'paragraph-default'} ${styles['text']} `}
      />
      <Link
        href={props.fields.href1}
        text={props.fields.text2}
        className={` ${'link-default'} ${styles['link1']} `}
      />
    </Container>
  )
}

AppComponent.defaultProps = {
  fields: {
    text1: 'fffffdf',
    href1: '#',
    text2: 'sfdfdfdkfhdsg',
    href: '#',
    text: 'ddd',
  },
  rootClassName: '',
  rendering: {},
}

AppComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default AppComponent
