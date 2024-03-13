/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Img.module.css'

const Img = (props) => {
  return (
    <Image
      src="https://www.biolage.ca/dist/img/logo_elle_magazine.png"
      alt="Elle Canada"
      className={` ${styles['image']} ${styles[props.rootClassName]} `}
    />
  )
}

Img.defaultProps = {
  fields: {},
  rootClassName: '',
}

Img.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Img
