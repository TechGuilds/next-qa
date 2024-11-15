/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component5.module.css'

const Component5 = (props) => {
  return (
    <Container
      className={` ${styles['component5-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

Component5.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

Component5.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(Component5)
