/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import AppComponent from '../kajoo-components/Component'
import styles from './BoundComponent.module.css'

const BoundComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={'image-default'}
        />
        <AppComponent rootClassName="root-class-name1" />
      </Container>
      <Button
        text={props.fields.text}
        link={props.fields.link}
        className={'button-default'}
      />
    </Container>
  )
}

BoundComponent.defaultProps = {
  fields: {
    text: 'Button',
    link: '#',
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-image',
  },
  rootClassName: '',
}

BoundComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default BoundComponent
