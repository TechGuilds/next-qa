/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import DynamicComponent from '../components/DynamicComponent'
import styles from './DynamicComponent1.module.css'

const DynamicComponent1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <DynamicComponent rootClassName="root-class-name" />
    </Container>
  )
}

DynamicComponent1.defaultProps = {
  fields: {},
  rootClassName: '',
}

DynamicComponent1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent1
