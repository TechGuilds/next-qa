/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './LinkTest.module.css'

const LinkTest = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Link
          href={props.href}
          target={props.target}
          rel={props.rel}
          text={props.text1}
          className={` ${styles['link']} ${styles['link-default']} `}
        />
        <Button
          text={props.text}
          link={props.link}
          className={styles['button-default']}
        />
      </Container>
    </Container>
  )
}

LinkTest.defaultProps = {
  rootClassName: '',
  href: '#',
  target: '_blank',
  rel: 'noreferrer noopener',
  text1: 'Link',
  text: 'Button',
  link: '',
}

LinkTest.propTypes = {
  rootClassName: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
}

export default LinkTest
