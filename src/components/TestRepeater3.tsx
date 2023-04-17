/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TestRepeater3.module.css'

const TestRepeater3 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <Text
              text={item.fields.text}
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Text
              text={item.fields.text}
              className={` ${styles['text1']} ${styles['header-default']} `}
            />
            <Image
              src={item.fields.src}
              alt={item.fields.alt}
              className={styles['image-default']}
            />
          </Container>
        ))}
      </Container>
    </Container>
  )
}

TestRepeater3.defaultProps = {
  rootClassName: '',
  fields: {},
}

TestRepeater3.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default TestRepeater3
