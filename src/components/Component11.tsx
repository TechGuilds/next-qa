/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component11.module.css'

const Component11 = (props) => {
  return (
    <Container
      className={` ${styles['component11-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

Component11.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

Component11.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(Component11)
