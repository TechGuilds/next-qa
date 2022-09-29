/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './new-project-sep-29-14-46-2.module.css'

const NewProjectSep2914462 = (props) => {
  return (
    <Container className={styles['main']}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.image_1_src}
          alt={props.fields.image_1_alt}
          className={` ${styles['image']} ${styles['default-theme-image-default']} `}
        ></Image>
        <Text
          text={props.fields.text_2_text}
          tag="span"
          className={styles['text']}
        ></Text>
      </Container>
    </Container>
  )
}

NewProjectSep2914462.defaultProps = {
  fields: {},
}

NewProjectSep2914462.propTypes = {
  fields: PropTypes.object,
}

export default NewProjectSep2914462
