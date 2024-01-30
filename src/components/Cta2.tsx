/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Cta2.module.css'

const Cta2 = (props) => {
  return (
    <Container
      aria-label="Find A Residence"
      text="Find A Residence"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    />
  )
}

Cta2.defaultProps = {
  fields: {},
  rootClassName: '',
}

Cta2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Cta2
