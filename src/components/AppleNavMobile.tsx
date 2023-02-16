/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleNavMobile.module.css'

const AppleNavMobile = (props) => {
  return (
    <Container>
      <Container className={styles['container']}>
        <Image
          src={props.fields.src1}
          alt={props.fields.alt1}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Image
          src={props.fields.src2}
          alt={props.fields.alt2}
          className={styles['image1']}
        />
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={` ${styles['image2']} ${styles['image-default']} `}
        />
      </Container>
    </Container>
  )
}

AppleNavMobile.defaultProps = {
  fields: {},
}

AppleNavMobile.propTypes = {
  fields: PropTypes.object,
}

export default AppleNavMobile
