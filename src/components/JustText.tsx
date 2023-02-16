/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './JustText.module.css'

const JustText = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.fields.text} tag="span" className={styles['text']} />
    </Container>
  )
}

JustText.defaultProps = {
  rootClassName: '',
  fields: {},
}

JustText.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default JustText
