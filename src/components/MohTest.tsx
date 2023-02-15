/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './MohTest.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.fields.text} tag="span" className={styles['text']} />
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
