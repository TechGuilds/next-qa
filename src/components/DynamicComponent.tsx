/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Button, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link href={props.fields.href} className={styles['link-default']} />
      <Button link={props.fields.link} className={styles['button-default']} />
      <Text
        text={props.fields.text2}
        tag="span"
        className={styles['paragraph-default']}
      />
      <Button link={props.fields.link1} className={styles['button-default']} />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    href: '#',
    text: 'Link',
    text1: 'Button',
    link: '#',
    text2:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    text3: 'Button',
    link1: '#',
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
