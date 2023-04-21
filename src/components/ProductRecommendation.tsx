/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ProductRecommendation.module.css'

const ProductRecommendation = (props) => {
  return (
    <Container
      className={` ${styles['root-new-style']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text
              text={props.fields.text}
              className={` ${styles['text']} ${styles['paragraph-new-style']} `}
            />
            <Image
              src={props.fields.src}
              className={styles['image-a-new-style']}
            />
            <Text
              text={props.fields.text1}
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container className={styles['container3']}>
            <Container className={styles['container4']}>
              <Text
                text={props.fields.text2}
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.fields.src1}
                className={styles['image-hello-hi']}
              />
            </Container>
            <Text
              text={props.fields.text3}
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container className={styles['container5']}>
            <Container className={styles['container6']}>
              <Text
                text={props.fields.text4}
                className={` ${styles['text4']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.fields.src2}
                className={styles['image-hello-hi']}
              />
            </Container>
            <Text
              text={props.fields.text5}
              className={` ${styles['text5']} ${styles['paragraph-default']} `}
            />
          </Container>
        </Container>
        <Container className={styles['container7']}>
          <Button
            text={props.fields.text6}
            className={styles['button-button406']}
          />
          <Button
            text={props.fields.text7}
            className={` ${styles['button1']} ${styles['button-default']} `}
          />
          <Button
            text={props.fields.text8}
            className={` ${styles['button2']} ${styles['button-sdasdad']} `}
          />
        </Container>
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
