/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Standard.module.css'

const Standard = (props) => {
  return (
    <Container
      className={` ${styles['standard']} ${styles[props.rootClassName]} `}
    >
      <Image
        src="bltc943ddd2447420d5"
        alt="default-kajoo-image"
        className={'image-default'}
      />
    </Container>
  )
}

Standard.defaultProps = {
  fields: {},
  rootClassName: '',
}

Standard.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Standard
