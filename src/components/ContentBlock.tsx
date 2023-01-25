/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ContentBlock.module.css'

const TestRepeater = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.fields.heading} tag="span" className={styles['text']} />
      <Image
        src={props.fields.src1}
        alt={props.fields.alt1}
        className={` ${styles['image']} ${styles['image-default']} `}
      />
    </Container>
  )
}

TestRepeater.defaultProps = {
  rootClassName: '',
  fields: {},
}

TestRepeater.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default TestRepeater
