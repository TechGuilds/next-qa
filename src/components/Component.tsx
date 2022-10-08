/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={styles['root']}>
      <Text text={props.fields.text} tag="span" className={styles['text']} />
    </Container>
  )
}

AppComponent.defaultProps = {
  fields: {},
}

AppComponent.propTypes = {
  fields: PropTypes.object,
}

export default AppComponent
