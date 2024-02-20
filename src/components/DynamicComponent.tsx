/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Button, Link } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import Standard from '../kajoo-components/Standard'
import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['component']} ${styles[props.rootClassName]} `}
    >
      <Button
        text={props.fields.text}
        link={props.fields.link}
        className={` ${styles['submit-button']} ${'button-default'} `}
      />
      <Container
        tag="section"
        className={` ${styles['column-container']} ${'container-default'} `}
      />
      <Link
        href={props.fields.href}
        text={props.fields.text1}
        className={'link-default'}
      />
      <Standard rootClassName="root-class-name1" />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    href: '#',
    text: 'Button',
    link: '#',
    text1: 'Link',
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
