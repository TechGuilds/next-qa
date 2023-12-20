/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Buttonlink333.module.css'

const Buttonlink333 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link
        href={props.fields.href}
        text={props.fields.text}
        className={styles['link-default']}
      />
      <Button
        text={props.fields.text1}
        link={props.fields.link}
        className={styles['button-default']}
      />
    </Container>
  )
}

Buttonlink333.defaultProps = {
  fields: {
    href: '#',
    text: 'Link',
    text1: 'Button',
    link: '#',
  },
  rootClassName: '',
}

Buttonlink333.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Buttonlink333
