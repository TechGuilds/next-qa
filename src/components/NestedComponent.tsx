/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import TestingANotherComponent from './TestingANotherComponent'
import styles from './NestedComponent.module.css'

const NestedComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <TestingANotherComponent rootClassName="root-class-name1" />
    </Container>
  )
}

NestedComponent.defaultProps = {
  fields: {},
  rootClassName: '',
}

NestedComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default NestedComponent
