/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './CccNewCodeGen.module.css'

const CccNewCodeGen = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Image
        src={props.fields.src}
        alt={props.fields.alt}
        className={` ${'image-default'} ${styles['image']} `}
      />
    </Container>
  )
}

CccNewCodeGen.defaultProps = {
  fields: {
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-imag',
  },
  rootClassName: '',
}

CccNewCodeGen.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default CccNewCodeGen
