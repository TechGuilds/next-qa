// @ts-nocheck
/* eslint-disable */
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './MyCompUpdated.module.css'

const MyCompUpdated = (props) => {
  return (
    <Container
      className={` ${styles['my-comp-updated']} ${
        styles[props.rootClassName]
      } `}
    />
  )
}

MyCompUpdated.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

MyCompUpdated.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(MyCompUpdated)
