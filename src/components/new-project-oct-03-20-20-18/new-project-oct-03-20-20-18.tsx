/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  RichText,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './new-project-oct-03-20-20-18.module.css'

const NewProjectOct03202018 = (props) => {
  return (
    <Container className={styles['main']}>
      <Container
        className={` ${styles['row-container']} ${styles['default-theme-container-default']} `}
      >
        <Image
          src={props.fields.image_2_src}
          alt={props.fields.image_2_alt}
          className={` ${styles['image']} ${styles['default-theme-image-default']} `}
        ></Image>
        <Text
          text={props.fields.text_5_text}
          tag="span"
          className={styles['text']}
        ></Text>
      </Container>
      <RichText
        value={props.fields.richText_4_value}
        className={styles['rich-text']}
      ></RichText>
    </Container>
  )
}

NewProjectOct03202018.defaultProps = {
  fields: {},
}

NewProjectOct03202018.propTypes = {
  fields: PropTypes.object,
}

export default NewProjectOct03202018
