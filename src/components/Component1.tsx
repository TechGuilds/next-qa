/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container
      className={` ${styles['component1-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

Component1.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

Component1.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(Component1)
