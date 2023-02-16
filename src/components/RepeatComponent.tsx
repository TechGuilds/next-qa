/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RepeatComponent.module.css'

const RepeatComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container2']}>
              <Image
                src={item.heading}
                alt={item.alt}
                className={` ${styles['image']} ${styles['acece83e7e5d4e62c6a6c']} `}
              />
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

RepeatComponent.defaultProps = {
  rootClassName: '',
  fields: {},
}

RepeatComponent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RepeatComponent
