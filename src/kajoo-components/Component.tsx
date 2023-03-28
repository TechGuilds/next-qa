/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <form className={` ${styles['form']} ${styles['container-default']} `} />
    </Container>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
