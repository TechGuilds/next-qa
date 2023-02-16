/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TestBgImag2.module.css'

const TestBgImag2 = (props) => {
  return (
    <Container className={styles['root']}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text text={props.fields.text} tag="span" className={styles['text']} />
      </Container>
      <Container
        bgImage={props.fields.bgImage}
        className={` ${styles['container1']} ${styles['container-default']} `}
      />
      <Container
        bgImage
        className={` ${styles['container2']} ${styles['container-default']} `}
      >
        <Text
          text={props.fields.text1}
          tag="span"
          className={styles['text1']}
        />
      </Container>
      <Container
        bgImage={props.fields.bgImage2}
        className={` ${styles['container3']} ${styles['container-default']} `}
      />
    </Container>
  )
}

TestBgImag2.defaultProps = {
  fields: {},
}

TestBgImag2.propTypes = {
  fields: PropTypes.object,
}

export default TestBgImag2
