/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigma.module.css'

const NewFigma = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container bgImage={props.fields.bgImage} className={styles['container']}>
        <Container className={styles['container1']} />
        <Container className={styles['container2']} />
        <Text text={props.fields.text} className={styles['text']} />
        <RichText value={props.fields.value1} className={styles['richtext']} />
        <RichText value={props.fields.value} className={styles['richtext1']} />
      </Container>
    </Container>
  )
}

NewFigma.defaultProps = {
  rootClassName: '',
  fields: {},
}

NewFigma.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default NewFigma
