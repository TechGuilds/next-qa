/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Text.module.css'

const AppText = (props) => {
  return (
    <Text text="naturally beautiful." className={styles[props.rootClassName]} />
  )
}

AppText.defaultProps = {
  fields: {},
  rootClassName: '',
}

AppText.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default AppText
