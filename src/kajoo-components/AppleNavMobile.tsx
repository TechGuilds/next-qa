/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleNavMobile.module.css'

const AppleNavMobile = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Image
          src={props.src1}
          alt={props.alt1}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Image src={props.src2} alt={props.alt2} className={styles['image1']} />
        <Image
          src={props.src}
          alt={props.alt}
          className={` ${styles['image2']} ${styles['image-default']} `}
        />
      </Container>
    </Container>
  )
}

AppleNavMobile.defaultProps = {
  rootClassName: '',
  src1: 'https://kajoo.nyc3.digitaloceanspaces.com/temp/apple-burger.png',
  alt1: '',
  src2: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_small.svg',
  alt2: 'Group3249',
  src: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg',
  alt: '',
}

AppleNavMobile.propTypes = {
  rootClassName: PropTypes.string,
  src1: PropTypes.string,
  alt1: PropTypes.string,
  src2: PropTypes.string,
  alt2: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default AppleNavMobile
