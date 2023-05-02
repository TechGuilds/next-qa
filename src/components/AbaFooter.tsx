/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, RichText } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AbaFooter.module.css'

const AbaFooter = (props) => {
  return (
    <Container className={` ${styles[props.rootClassName]} ${styles['main']} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Image
          src={props.fields.src}
          alt={props.fields.alt3}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <RichText
          value={props.fields.value}
          className={` ${styles['richtext']} ${styles['richtext-default']} `}
        />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Image
            src={props.fields.src1}
            alt={props.fields.alt1}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Image
            src={props.fields.src2}
            alt={props.fields.alt2}
            className={` ${styles['image2']} ${styles['image-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

AbaFooter.defaultProps = {
  rootClassName: '',
  fields: {},
}

AbaFooter.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AbaFooter
