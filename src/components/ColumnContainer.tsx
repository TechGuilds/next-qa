/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ColumnContainer.module.css'

const ColumnContainer = (props) => {
  return (
    <Container
      className={` ${
        styles['column-container-column-container']
      } ${'container-default'} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    />
  )
}

ColumnContainer.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

ColumnContainer.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(ColumnContainer)
