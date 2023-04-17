/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ComponentRepeat.module.css'

const ComponentRepeat = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <RichText
              value={item.fields.value}
              className={styles['richtext']}
            />
            <Image
              src={item.fields.src}
              alt={item.fields.alt}
              className={styles['image-default']}
            />
          </Container>
        ))}
      </Container>
    </Container>
  )
}

ComponentRepeat.defaultProps = {
  rootClassName: '',
  fields: {},
}

ComponentRepeat.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ComponentRepeat
