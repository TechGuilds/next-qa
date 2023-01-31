/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewsItems.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container2']}>
              <Container
                className={` ${styles['container3']} ${styles['a41d4370946d97c938c465']} `}
              >
                <Text
                  text={item.fields.title}
                  tag="h1"
                  className={styles['text']}
                />
                <Container
                  className={` ${styles['container4']} ${styles['a41d4370946d97c938c465']} `}
                >
                  <Image
                    src={item.fields.image}
                    alt={item.fields.subtitle}
                    className={` ${styles['image']} ${styles['a41d4370946d97c938c466']} `}
                  />
                  <Text
                    text={item.fields.description}
                    tag="span"
                    className={styles['text1']}
                  />
                </Container>
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
