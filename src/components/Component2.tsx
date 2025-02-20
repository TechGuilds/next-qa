/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component2.module.css'

const Component2 = (props) => {
  return (
    <Container
      className={` ${styles['component2-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

Component2.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

Component2.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(Component2)
