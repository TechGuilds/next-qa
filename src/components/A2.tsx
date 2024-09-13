/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './A2.module.css'

const A2 = (props) => {
  return (
    <Container className={` ${styles['a-2']} ${styles[props.rootClassName]} ${props.params?.styles} `}>
      <Image
        src={props.fields.src}
        alt={props.fields.alt}
        className={'image-image'}
      />
    </Container>
  )
}

A2.defaultProps = {
  fields: {
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-image',
  },
  rootClassName: '',
  rendering: {},
}

A2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(A2)
