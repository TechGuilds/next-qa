/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Test5G.module.css'

const Test5G = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.fields.text} className={styles['header-default']} />
    </Container>
  )
}

Test5G.defaultProps = {
  fields: {
    text: 'Heading',
    tag: 'h1',
  },
  rootClassName: '',
}

Test5G.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Test5G
