/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import DynamicComponent from '../kajoo-components/DynamicComponent'
import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <DynamicComponent rootClassName="root-class-name" />
    </Container>
  )
}

Component1.defaultProps = {
  fields: {},
  rootClassName: '',
}

Component1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Component1
