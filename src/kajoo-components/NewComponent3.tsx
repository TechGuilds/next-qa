/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewComponent3.module.css'

const NewComponent3 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        />
        <Image
          src={props.src}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Image
          src={props.src1}
          className={` ${styles['image1']} ${styles['image-default']} `}
        />
      </Container>
      <Image
        src={props.src2}
        className={` ${styles['image2']} ${styles['image-default']} `}
      />
    </Container>
  )
}

NewComponent3.defaultProps = {
  rootClassName: '',
  src: '/icons/default-imag.svg',
  src1: '/icons/default-imag.svg',
  src2: '/icons/default-imag.svg',
}

NewComponent3.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  src1: PropTypes.string,
  src2: PropTypes.string,
}

export default NewComponent3
