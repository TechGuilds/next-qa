/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './MyComp2.module.css'

const MyComp2 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text
        text={props.fields.text}
        tag="h1"
        className={styles['header-default']}
      />
    </Container>
  )
}

MyComp2.defaultProps = {
  fields: {
    text: 'Heading',
  },
  rootClassName: '',
}

MyComp2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default MyComp2
