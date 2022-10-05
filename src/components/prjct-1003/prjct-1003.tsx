/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './prjct-1003.module.css'

const Prjct1003 = (props) => {
  return (
    <Container>
      <Container className={styles['course-module2581']}>
        <Container className={styles['text-i258121717']}>
          <Text
            tag="span"
            text={props.fields.text_3_text}
            className={styles['text']}
          ></Text>
          <Text
            tag="span"
            text={props.fields.text_4_text}
            className={styles['text1']}
          ></Text>
          <Container className={styles['loadmore-i258121722']}></Container>
        </Container>
      </Container>
    </Container>
  )
}

Prjct1003.defaultProps = {
  fields: {},
}

Prjct1003.propTypes = {
  fields: PropTypes.object,
}

export default Prjct1003
