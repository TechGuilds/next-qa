/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RepeaterImages.module.css'

const RepeaterImages = (props) => {
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

RepeaterImages.defaultProps = {
  rootClassName: '',
  fields: {},
}

RepeaterImages.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RepeaterImages
