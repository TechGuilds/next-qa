/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  RichText,
  Link,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DemoComp.module.css'

const DemoComp = (props) => {
  return (
    <Container className={styles['root']}>
      <Text
        text={props.fields.text}
        tag="span"
        className={` ${styles['text']} ${styles['demo-comp-header-header-677']} `}
      />
      <Image
        src={props.fields.src}
        alt={props.fields.alt}
        className={` ${styles['image']} ${styles['demo-comp-image-default']} `}
      />
      <RichText value={props.fields.value} className={styles['richtext']} />
      <Link
        href={props.fields.href}
        className={` ${styles['link']} ${styles['demo-comp-link-default']} `}
      />
    </Container>
  )
}

DemoComp.defaultProps = {
  fields: {},
}

DemoComp.propTypes = {
  fields: PropTypes.object,
}

export default DemoComp
