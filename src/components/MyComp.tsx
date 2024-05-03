// @ts-nocheck
/* eslint-disable */
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './MyComp.module.css'

const MyComp = (props) => {
  return (
    <Container
      className={` ${styles['my-comp']} ${styles[props.rootClassName]} `}
    />
  )
}

MyComp.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

MyComp.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(MyComp)
