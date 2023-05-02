/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Link,
  RichText,
  Button,
} from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AbaNews.module.css'

const AbaNews = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text text={props.fields.text} tag="span" className={styles['text']} />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Text
            text={props.fields.text1}
            tag="span"
            className={styles['text1']}
          />
          <Text
            text={props.fields.text3}
            tag="span"
            className={styles['text2']}
          />
          <Link href={props.fields.href} className={styles['link']} />
          <RichText
            value={props.fields.value}
            className={` ${styles['richtext']} ${styles['richtext-default']} `}
          />
        </Container>
      </Container>
      <Button link={props.fields.link} className={styles['button']} />
    </Container>
  )
}

AbaNews.defaultProps = {
  rootClassName: '',
  fields: {},
}

AbaNews.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AbaNews
