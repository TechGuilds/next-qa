/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './new-test-link.module.css'

const Repeat3Component3 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Image
        src={props.fields.src}
        alt={props.fields.alt}
        className={` ${styles['image']} ${styles['image-default']} `}
      />
    </Container>
  )
}

Repeat3Component3.defaultProps = {
  rootClassName: '',
  fields: {},
}

Repeat3Component3.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Repeat3Component3
