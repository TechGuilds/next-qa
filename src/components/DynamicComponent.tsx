/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Link, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['component']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['container']}>
        <Text
          text={props.fields.text3}
          tag="h1"
          className={styles['header-default']}
        />
      </Container>
      <Container className={styles['container1']}>
        <Link href={props.fields.href1} className={styles['link-default']} />
      </Container>
      <Container className={styles['container2']}>
        <Image
          src={props.fields.src1}
          alt={props.fields.alt1}
          className={styles['image-default']}
        />
        <Text
          text={props.fields.text5}
          tag="span"
          className={styles['header-default']}
        />
      </Container>
      <Link href={props.fields.href} className={styles['link-default']} />
      <Text
        text={props.fields.text6}
        tag="h1"
        className={styles['header-default']}
      />
      <Text
        text={props.fields.text4}
        tag="h1"
        className={styles['header-header-v2']}
      />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    text3: 'Heading',
    text4: 'Heading',
    text5:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    text6: 'Heading',
    href: '#',
    text7: 'Link',
    href1: '#',
    text8: 'Link',
    src1: '/icons/default-imag.svg',
    alt1: 'default-kajoo-imag',
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
