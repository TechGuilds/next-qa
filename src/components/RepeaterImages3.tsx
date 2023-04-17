/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RepeaterImages3.module.css'

const RepeaterImages3 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <Image
              src={item.fields.src}
              alt={item.fields.alt}
              className={` ${styles['image']} ${styles['image-default']} `}
            />
          </Container>
        ))}
      </Container>
    </Container>
  )
}

RepeaterImages3.defaultProps = {
  rootClassName: '',
  fields: {},
}

RepeaterImages3.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RepeaterImages3
