/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Text
        text={props.fields.text}
        tag="h1"
        className={` ${styles['heading']} ${'link-default'} `}
      />
    </Container>
  )
}

AppComponent.defaultProps = {
  fields: {
    text: 'Heading',
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
