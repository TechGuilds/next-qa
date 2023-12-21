/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Cta1.module.css'

const Cta1 = (props) => {
  return (
    <Container
      tag="a"
      aria-label="Find A Residence"
      text="Find A Residence"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    />
  )
}

Cta1.defaultProps = {
  fields: {},
  rootClassName: '',
}

Cta1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Cta1
