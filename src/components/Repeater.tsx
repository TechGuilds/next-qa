/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Repeater.module.css'

const AppRepeater = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <repeaterCollection className={styles['repeater-collection']}>
              <Image
                src={item.fields.src}
                alt={item.fields.alt}
                className={styles['acece83e7e5d4e62c6a6c']}
              />
            </repeaterCollection>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

AppRepeater.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppRepeater.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppRepeater
