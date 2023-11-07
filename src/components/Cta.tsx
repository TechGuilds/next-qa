/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Cta.module.css'

const Cta = (props) => {
  return (
    <Container
      tag="a"
      aria-label="Find A Residence"
      href="/find-a-residence"
      onclick="location.href='/Amica/CTA/CTAClick/CallToActionClick?itemId=751A1BFE3776428585B675F8C0C4D291'"
      text="Find A Residence"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    />
  )
}

Cta.defaultProps = {
  fields: {},
  rootClassName: '',
}

Cta.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Cta
