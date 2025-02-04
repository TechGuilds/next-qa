/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './Repeater.module.css'

const AppRepeater = (props) => {
  return (
    <Container
      className={` ${styles['repeater-repeater']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
        <Placeholder name="Placeholder" rendering="Placeholder" key={index} />
      ))}
    </Container>
  )
}

AppRepeater.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

AppRepeater.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppRepeater
