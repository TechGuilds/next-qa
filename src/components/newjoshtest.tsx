/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  RichText,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './newjoshtest.module.css'

const ProductCardRepeater = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container2']}>
              <Text
                text={item.fields.Title}
                tag="h1"
                className={styles['text']}
              />
              <Container className={styles['container3']}>
                <Image
                  src={item.fields.Image}
                  alt
                  className={` ${styles['image']} ${styles['acece83e7e5d4e62c6a6c']} `}
                />
                <Text text="asdsasa" tag="span" className={styles['text1']} />
                <Text
                  text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
                  tag="span"
                  className={styles['text2']}
                />
                <RichText
                  value={item.fields.Description}
                  className={styles['richtext']}
                />
                <RichText
                  value="&lt;p&gt;Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.&lt;/p&gt;"
                  className={styles['richtext1']}
                />
              </Container>
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

ProductCardRepeater.defaultProps = {
  rootClassName: '',
  fields: {},
}

ProductCardRepeater.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ProductCardRepeater
