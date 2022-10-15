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
        bgImage={props.bgImage1}
        className={` ${styles['container']} ${styles['container-default']} `}
      />
    </Container>
  )
}

AppleIPhoneBlackBg.defaultProps = {
  xtU_gtnKZ86L7YomXkY_D:
    'https://www.apple.com/v/home/as/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_largetall.jpg',
  rootClassName: '',
  bgImage1:
    'https://www.apple.com/v/home/as/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_largetall.jpg',
}

AppleIPhoneBlackBg.propTypes = {
  xtU_gtnKZ86L7YomXkY_D: PropTypes.string,
  rootClassName: PropTypes.string,
  bgImage1: PropTypes.string,
}

export default AppleIPhoneBlackBg
