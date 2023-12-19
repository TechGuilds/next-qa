/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Button, Link } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Button link={props.fields.link} className={styles['button-default']} />
      <Link href={props.fields.href} className={styles['link-default']} />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    text: 'Button',
    link: '#',
    href: '#',
    text1: 'Link',
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
