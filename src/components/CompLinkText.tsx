/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  RichText,
  Text,
  Image,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './CompLinkText.module.css'

const CompLinkText = (props) => {
  return (
    <Container className={styles['root']}>
      <Container
        className={` ${styles['container']} ${styles['container-container-241']} `}
      >
        <RichText value={props.fields.value} className={styles['richtext']} />
        <Text text={props.fields.text2} tag="h1" className={styles['text']} />
        <Text
          text={props.fields.text3}
          tag="span"
          className={styles['text1']}
        />
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
      </Container>
    </Container>
  )
}

CompLinkText.defaultProps = {
  fields: {},
}

CompLinkText.propTypes = {
  fields: PropTypes.object,
}

export default CompLinkText
