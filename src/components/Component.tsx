/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <Image
              src={item.fields.src}
              alt={item.fields.alt}
              className={styles['image-default']}
            />
            <Text
              text={item.fields.text}
              tag="h1"
              className={styles['header-default']}
            />
          </Container>
        ))}
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppComponent
