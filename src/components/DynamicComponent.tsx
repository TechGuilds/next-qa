/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text, Link } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Text
        text={props.fields['Text new']}
        tag="h1"
        className={'text-default'}
      />
      <Link
        href="#"
        target="_blank"
        rel="noreferrer noopener"
        text={props.fields['Link new'].text}
        className={'link-default'}
      />
      <Text
        text={props.fields['Text-hello']}
        tag="h1"
        className={'text-default'}
      />
      <Text
        text={props.fields.Text_hello}
        tag="h1"
        className={'text-default'}
      />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    'Text new': 'Lorem Ipsum',
    Image: {
      src: 'https://app.kajoo.ai/icons/default-imag.svg',
      alt: '',
    },
    'List item': [
      {
        fields: {
          'Text title': 'Lorem Ipsum',
        },
      },
      {
        fields: {
          'Text title': 'Lorem Ipsum',
        },
      },
      {
        fields: {
          'Text title': 'Lorem Ipsum',
        },
      },
    ],
    'Link new': {
      href: '#',
      text: 'Link',
    },
    'Text-hello': 'Lorem Ipsum',
    Text_hello: 'Lorem Ipsum',
  },
  rendering: {},
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default withDatasourceCheck()(DynamicComponent)
