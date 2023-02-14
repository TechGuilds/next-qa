/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigma12.module.css'

const NewFigma12 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']} />
    </Container>
  )
}

NewFigma12.defaultProps = {
  rootClassName: '',
}

NewFigma12.propTypes = {
  rootClassName: PropTypes.string,
}

export default NewFigma12
