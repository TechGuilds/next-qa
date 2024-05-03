// @ts-nocheck
/* eslint-disable */
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component1Updated.module.css'

const Component1Updated = (props) => {
  return (
    <Container
      className={` ${styles['component-1-updated']} ${
        styles[props.rootClassName]
      } `}
    />
  )
}

Component1Updated.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

Component1Updated.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(Component1Updated)
