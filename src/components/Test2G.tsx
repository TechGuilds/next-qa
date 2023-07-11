/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Test2G.module.css'

const Test2G = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.fields.text} className={styles['header-default']} />
    </Container>
  )
}

Test2G.defaultProps = {
  fields: {
    text: 'Heading',
    tag: 'h1',
  },
  rootClassName: '',
}

Test2G.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Test2G
