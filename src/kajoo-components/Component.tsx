/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container
      className={` ${styles['component']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['container']}>
        <Image src="/icons/default-imag.svg" alt="default-kajoo-imag" />
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  fields: {},
  rootClassName: '',
}

AppComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default AppComponent
