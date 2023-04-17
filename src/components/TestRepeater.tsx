/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TestRepeater.module.css'

const TestRepeater = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <Text
              text={item.fields.text}
              tag="span"
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Text
              text={item.fields.text1}
              tag="h1"
              className={` ${styles['text1']} ${styles['header-default']} `}
            />
          </Container>
        ))}
      </Container>
    </Container>
  )
}

TestRepeater.defaultProps = {
  rootClassName: '',
  fields: {},
}

TestRepeater.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default TestRepeater
