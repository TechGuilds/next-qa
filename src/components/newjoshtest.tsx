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
              <Text text="Heading" tag="h1" className={styles['text']} />
              <Container className={styles['container3']}>
                <Image
                  src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/tEnV-LhahldOA5kmM2FZG.png"
                  className={` ${styles['image']} ${styles['acece83e7e5d4e62c6a6c']} `}
                />
                <Text text="wrewrwerw" tag="span" className={styles['text1']} />
                <RichText
                  value="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
                  className={styles['richtext']}
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
