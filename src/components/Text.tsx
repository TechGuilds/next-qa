/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

const AppText = (props) => {
  return (
    <Text
      text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
      className={` ${'text-default'} ${styles[props.rootClassName]} ${props.params?.Styles} `}
    />
  )
}

AppText.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

AppText.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default AppText
