/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Link,
  RichText,
  Text,
  Video,
  Image,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './StaticTexts.module.css'

const StaticTexts = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link
        href="#wwjlk"
        text={props.fields.text8}
        className={` ${styles['link']} ${styles['link-default']} `}
      />
      <RichText value={props.fields.value} className={styles['richtext']} />
      <Text text={props.fields.text6} tag="h1" className={styles['text']} />
      <Video
        src={props.fields.src}
        className={` ${styles['video']} ${styles['video-default']} `}
      />
      <Image
        src={props.fields.src1}
        alt={props.fields.alt}
        className={` ${styles['image']} ${styles['image-default']} `}
      />
    </Container>
  )
}

StaticTexts.defaultProps = {
  rootClassName: '',
  fields: {},
}

StaticTexts.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default StaticTexts
