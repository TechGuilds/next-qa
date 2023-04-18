/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container
      className={` ${styles['main']} ${styles[props.rootClassName]} `}
    />
  )
}

NewFigmaComponent.defaultProps = {
  rootClassName: '',
}

NewFigmaComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent
