/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import AppComponent from './UatTestComp123'
import styles from './SomethingElse89.module.css'

const SomethingElse89 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <AppComponent
        rootClassName="root-class-name"
        className={styles['component']}
      />
    </Container>
  )
}

SomethingElse89.defaultProps = {
  fields: {},
  rootClassName: '',
}

SomethingElse89.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default SomethingElse89
