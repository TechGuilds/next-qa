/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component8.module.css'

const Component8 = (props) => {
  return (
    <Container
      className={` ${styles['component8-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

Component8.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

Component8.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(Component8)
