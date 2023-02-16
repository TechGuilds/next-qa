/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent1011.module.css'

const NewFigmaComponent1011 = (props) => {
  return (
    <Container>
      <Container bgImage className={styles['container']}>
        <Container bgImage className={styles['container1']}>
          <Text text={props.fields.text} className={styles['text']} />
          <Text text={props.fields.text1} className={styles['text1']} />
          <Container bgImage className={styles['container2']}>
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
        <Container bgImage className={styles['container3']}>
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

NewFigmaComponent1011.defaultProps = {
  fields: {},
}

NewFigmaComponent1011.propTypes = {
  fields: PropTypes.object,
}

export default NewFigmaComponent1011
