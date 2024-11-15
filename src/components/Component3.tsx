/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component3.module.css'

const Component3 = (props) => {
  return (
    <Container
      className={` ${styles['component3-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

Component3.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

Component3.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(Component3)
