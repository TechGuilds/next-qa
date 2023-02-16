/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  Link,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ProductCard.module.css'

const ProductCard = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.src}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Text
            text={props.fields.text1}
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text2}
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
          <Link
            href={props.fields.href}
            className={` ${styles['link']} ${styles['link-default']} `}
          />
          <Button
            text={props.fields.text1}
            className={` ${styles['button']} ${styles['button-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

ProductCard.defaultProps = {
  rootClassName: '',
  fields: {},
}

ProductCard.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ProductCard
