/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Test5Gg.module.css'

const Test5Gg = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.fields.text} className={styles['header-default']} />
    </Container>
  )
}

Test5Gg.defaultProps = {
  fields: {
    text: 'Heading',
    tag: 'h1',
  },
  rootClassName: '',
}

Test5Gg.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Test5Gg
