/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './MyComp1Updated.module.css'

const MyComp1Updated = (props) => {
  return (
    <Container
      className={` ${styles['my-comp-1-updated']} ${
        styles[props.rootClassName]
      } `}
    />
  )
}

MyComp1Updated.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

MyComp1Updated.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default MyComp1Updated
