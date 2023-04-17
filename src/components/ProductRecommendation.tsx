/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, List } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ProductRecommendation.module.css'

const ProductRecommendation = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <Image
              src={item.fields.src}
              alt={item.fields.alt}
              className={styles['image-default']}
            />
            <List className={styles['list-default']} />
          </Container>
        ))}
      </Container>
    </Container>
  )
}

ProductRecommendation.defaultProps = {
  rootClassName: '',
  fields: {},
}

ProductRecommendation.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ProductRecommendation
