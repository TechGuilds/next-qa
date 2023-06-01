/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.text} className={styles['text']} />
      <Text text={props.text1} className={styles['text1']} />
    </Container>
  )
}

Component1.defaultProps = {
  rootClassName: '',
  text: 'Featured content heading ',
  text1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Component1
