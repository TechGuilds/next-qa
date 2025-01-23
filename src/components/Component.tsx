/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  RichText,
  Text,
  Link,
  Image,
} from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container
      className={` ${styles['component-container1']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <RichText value="&lt;p&gt;gnffgnfgnfgnfgnfgvn&lt;/p&gt;" />
      <RichText
        value={props.fields['Rich Text']}
        className={'richtext-default'}
      />
      <Text className={'text-default'} />
      <Container className={styles['component-repeater1']}>
        {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
          <Container key={index} className={styles['component-container2']}>
            <Link
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              text="Link"
              className={'link-default'}
            />
            <Image
              src="https://app.kajoo.ai/icons/default-imag.svg"
              alt="default-kajoo-image"
              className={` ${'image-test'} ${styles['component-image']} `}
            />
          </Container>
        ))}
      </Container>
      <Link
        href="#"
        target="_blank"
        rel="noreferrer noopener"
        text="Link"
        className={'link-default'}
      />
      <Container
        className={` ${
          styles['component-column-container']
        } ${'container-default'} `}
      />
      <Container className={styles['component-repeater2']}>
        {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
          <RichText
            value="&lt;p&gt;Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.&lt;/p&gt;"
            key={index}
            className={'richtext-default'}
          />
        ))}
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {
    'Rich Text': '<p>Lorem Ipsum</p>',
  },
}

AppComponent.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppComponent
