/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './YusufTestBuildPipeline.module.css'

const YusufTestBuildPipeline = (props) => {
  return (
    <Container
      className={` ${styles['yusuf-test-build-pipeline']} ${
        styles[props.rootClassName]
      } `}
    >
      <Text text={props.fields.text} className={'paragraph-default'} />
    </Container>
  )
}

YusufTestBuildPipeline.defaultProps = {
  fields: {
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  },
  rootClassName: '',
  rendering: {},
}

YusufTestBuildPipeline.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default YusufTestBuildPipeline
