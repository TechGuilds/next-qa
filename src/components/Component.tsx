/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Button text={props.fields.text} className={'button-button'} />
    </Container>
  )
}

AppComponent.defaultProps = {
  fields: {
    text: 'Button',
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
