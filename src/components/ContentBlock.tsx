/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ContentBlock.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container2']}>
              <Container className={styles['container3']}>
                <Text
                  text={item.fields.heading}
                  tag="h1"
                  className={styles['text']}
                />
                <Container
                  className={` ${styles['container4']} ${styles['a41d4370946d97c938c465']} `}
                >
                  <Container className={styles['container5']}>
                    <Image
                      src={item.fields.Image}
                      alt={item.fields.alt}
                      className={` ${styles['image']} ${styles['a41d4370946d97c938c466']} `}
                    />
                    <Text
                      text={item.fields.Text}
                      tag="span"
                      className={styles['text1']}
                    />
                  </Container>
                </Container>
              </Container>
              <Container
                className={` ${styles['container6']} ${styles['a41d4370946d97c938c465']} `}
              />
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
