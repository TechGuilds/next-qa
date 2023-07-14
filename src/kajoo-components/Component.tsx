/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Button, Text, Link } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Image
          src="/icons/default-imag.svg"
          alt="default-kajoo-imag"
          className={styles['image-default']}
        />
        <Button text="Button" link="#" className={styles['button-default']} />
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          tag="span"
          className={` ${styles['paragraph-default']} ${styles['text']} `}
        />
      </Container>
      <Text text="Heading" tag="h1" className={styles['header-default']} />
      <Link
        href="#"
        target="_blank"
        rel="noreferrer noopener"
        text="Link"
        className={styles['link-default']}
      />
    </Container>
  )
}

AppComponent.defaultProps = {
  fields: {},
  rootClassName: '',
}

AppComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default AppComponent
