/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TestComp.module.css'

const TestComp = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.className]} `}>
      <Container
        bgImage={props.text}
        className={` ${styles['container']} ${styles['test-comp-container-default']} `}
      />
    </Container>
  )
}

TestComp.defaultProps = {
  className: '',
  text: '',
}

TestComp.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
}

export default TestComp
