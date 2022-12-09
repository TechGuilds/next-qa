/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewComponent2.module.css'

const NewComponent2 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Image
          src={props.src}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Image
          src={props.src1}
          className={` ${styles['image1']} ${styles['image-default']} `}
        />
      </Container>
    </Container>
  )
}

NewComponent2.defaultProps = {
  rootClassName: '',
  src: '/icons/default-imag.svg',
  src1: '/icons/default-imag.svg',
}

NewComponent2.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  src1: PropTypes.string,
}

export default NewComponent2
