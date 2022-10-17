/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Link, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './YusufTest12.module.css'

const YusufTest12 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.text} tag="span" className={styles['text']} />
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        text={props.text1}
        className={` ${styles['link']} ${styles['link-default']} `}
      />
      <Button
        text={props.text2}
        link={props.link}
        className={styles['button-default']}
      />
    </Container>
  )
}

YusufTest12.defaultProps = {
  rootClassName: '',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  href: '#',
  target: '_blank',
  rel: 'noreferrer noopener',
  text1: 'Link',
  text2: 'Button',
  link: '',
}

YusufTest12.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  link: PropTypes.string,
}

export default YusufTest12
