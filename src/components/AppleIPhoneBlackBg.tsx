/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleIPhoneBlackBg.module.css'

const AppleIPhoneBlackBg = (props) => {
  return (
    <Container className={styles['root']}>
      <Container
        bgImage={props.fields.bgImage1}
        className={` ${styles['container']} ${styles['container-default']} `}
      />
    </Container>
  )
}

AppleIPhoneBlackBg.defaultProps = {
  fields: {},
}

AppleIPhoneBlackBg.propTypes = {
  fields: PropTypes.object,
}

export default AppleIPhoneBlackBg
