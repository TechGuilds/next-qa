/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Title.module.css'

const Title = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.text} tag="h1" className={styles['text']} />
    </Container>
  )
}

Title.defaultProps = {
  rootClassName: '',
  text: 'About this Campaign',
}

Title.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Title
