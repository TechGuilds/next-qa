/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleIPhoneBlackBg.module.css'

const AppleIPhoneBlackBg = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        bgImage={props.fields.bgImage1}
        className={` ${styles['container']} ${styles['container-default']} `}
      />
    </Container>
  )
}

AppleIPhoneBlackBg.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppleIPhoneBlackBg.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppleIPhoneBlackBg
