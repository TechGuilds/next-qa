/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText, Link } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component2.module.css'

const Component2 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text
          text={props.fields.text}
          tag="span"
          className={styles['paragraph-default']}
        />
        <RichText value={props.fields.value} />
        <Link href={props.fields.href} className={styles['link-default']} />
      </Container>
    </Container>
  )
}

Component2.defaultProps = {
  rootClassName: '',
  fields: {},
}

Component2.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Component2
