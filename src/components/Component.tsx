/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container2']}>
              <Container
                className={` ${styles['container3']} ${styles['acece83e7e5d4e62c6a6b']} `}
              >
                <Text
                  text={item.fields.title}
                  tag="span"
                  className={styles['text']}
                />
                <Image
                  src={item.fields.image}
                  alt={item.fields.title}
                  className={` ${styles['image']} ${styles['acece83e7e5d4e62c6a6c']} `}
                />
              </Container>
            </Container>
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
