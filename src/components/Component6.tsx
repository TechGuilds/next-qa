/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component6.module.css'

const Component6 = (props) => {
  return (
    <Container
      className={` ${styles['component6-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

Component6.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

Component6.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(Component6)
