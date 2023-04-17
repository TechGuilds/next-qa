/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <RichText
        value={props.fields.value}
        className={` ${styles['richtext']} ${styles['header-nurtest2']} `}
      />
      <Text
        text={props.fields.text}
        className={` ${styles['text']} ${styles['paragraph-nurtest2']} `}
      />
      <Text
        text={props.fields.text}
        className={` ${styles['text1']} ${styles['header-nurtest2']} `}
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
