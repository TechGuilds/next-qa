/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TestNurKajoo.module.css'

const TestNurKajoo = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
      </Container>
      <Container
        className={` ${styles['container1']} ${styles['container-default']} `}
      >
        <Text text={props.fields.text} tag="h1" className={styles['text']} />
      </Container>
      <Container
        className={` ${styles['container2']} ${styles['container-default']} `}
      >
        <Text
          text={props.fields.text1}
          tag="span"
          className={styles['text1']}
        />
      </Container>
    </Container>
  )
}

TestNurKajoo.defaultProps = {
  rootClassName: '',
  fields: {},
}

TestNurKajoo.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default TestNurKajoo
