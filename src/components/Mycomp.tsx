// @ts-nocheck
/* eslint-disable */
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Mycomp.module.css'

const Mycomp = (props) => {
  return (
    <Container
      className={` ${styles['mycomp']} ${styles[props.rootClassName]} `}
    />
  )
}

Mycomp.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

Mycomp.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(Mycomp)
