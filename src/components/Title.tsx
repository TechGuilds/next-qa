/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Title.module.css'

const Title = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.fields.text} tag="h1" className={styles['text']} />
    </Container>
  )
}

Title.defaultProps = {
  rootClassName: '',
  fields: {},
}

Title.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Title
