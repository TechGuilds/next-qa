/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component9.module.css'

const Component9 = (props) => {
  return (
    <Container
      className={` ${styles['component9-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

Component9.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

Component9.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(Component9)
