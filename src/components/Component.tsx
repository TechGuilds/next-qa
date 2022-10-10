/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={styles['root']}>
      <RichText value={props.fields.value} className={styles['richtext']} />
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
