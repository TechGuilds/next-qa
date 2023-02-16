/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Link, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './YusufTest12.module.css'

const YusufTest12 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.fields.text} tag="span" className={styles['text']} />
      <Link
        href={props.fields.href}
        className={` ${styles['link']} ${styles['link-default']} `}
      />
      <Button text={props.fields.text2} className={styles['button-default']} />
    </Container>
  )
}

YusufTest12.defaultProps = {
  rootClassName: '',
  fields: {},
}

YusufTest12.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default YusufTest12
