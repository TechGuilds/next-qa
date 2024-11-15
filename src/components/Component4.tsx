/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component4.module.css'

const Component4 = (props) => {
  return (
    <Container
      className={` ${styles['component4-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

Component4.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

Component4.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(Component4)
