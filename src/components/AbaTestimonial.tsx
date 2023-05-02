/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Link } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AbaTestimonial.module.css'

const AbaTestimonial = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text text={props.fields.text} tag="span" className={styles['text']} />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Text
            text={props.fields.text1}
            tag="h2"
            className={styles['text1']}
          />
          <Text
            text={props.fields.text2}
            tag="span"
            className={styles['text2']}
          />
          <Link href={props.fields.href} className={styles['link']} />
        </Container>
      </Container>
    </Container>
  )
}

AbaTestimonial.defaultProps = {
  rootClassName: '',
  fields: {},
}

AbaTestimonial.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AbaTestimonial
