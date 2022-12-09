/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Text text={props.fields.text} className={styles['text']} />
          <Text text={props.fields.text1} className={styles['text1']} />
          <Container className={styles['container2']}>
            <Image
              alt={props.fields.alt}
              src={props.fields.src}
              className={styles['image']}
            />
            <Image
              src={props.fields.src1}
              alt={props.fields.alt1}
              className={styles['image1']}
            />
          </Container>
        </Container>
        <Container className={styles['container3']}>
          <Image
            src={props.fields.src2}
            alt={props.fields.alt2}
            className={styles['image2']}
          />
        </Container>
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppComponent
