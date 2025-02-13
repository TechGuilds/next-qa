/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component10.module.css'

const Component10 = (props) => {
  return (
    <Container
      className={` ${styles['component10-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

Component10.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

Component10.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(Component10)
