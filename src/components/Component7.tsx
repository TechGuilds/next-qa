/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component7.module.css'

const Component7 = (props) => {
  return (
    <Container
      className={` ${styles['component7-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

Component7.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

Component7.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(Component7)
