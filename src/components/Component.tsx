/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container
      className={` ${styles['component-container']} ${'container-test'} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Text text={props.fields.Text} />
      <RichText value={props.fields['Rich Text']} />
    </Container>
  )
}

AppComponent.defaultProps = {
  fields: {
    Text: 'Lorem Ipsum',
    Image: {
      src: 'https://app.kajoo.ai/icons/default-imag.svg',
      alt: '',
    },
    Link: {
      href: '#',
      text: 'Link',
    },
    'Rich Text': '<p>Lorem Ipsum</p>',
  },
  rendering: {},
  rootClassName: '',
}

AppComponent.propTypes = {
  fields: PropTypes.object,
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default AppComponent
