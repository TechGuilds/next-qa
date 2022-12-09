/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  TypeForm,
  RichText,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TestCol.module.css'

const TestCol = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Image
            src={props.fields.src}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Text
            text={props.fields.text}
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text1}
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container2']} ${styles['container-default']} `}
        >
          <Image
            src={props.fields.src2}
            alt={props.fields.alt}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Text
            text={props.fields.text2}
            className={` ${styles['text2']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text3}
            className={` ${styles['text3']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container3']} ${styles['container-default']} `}
        >
          <TypeForm
            formId={props.fields.formId}
            mode={props.fields.mode}
            buttonText={props.fields.buttonText}
          />
          <Text
            text={props.fields.text4}
            className={` ${styles['text4']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container className={styles['container4']}>
          <Container
            className={` ${styles['container5']} ${styles['container-default']} `}
          >
            <Text
              text={props.fields.text6}
              tag="span"
              className={styles['text5']}
            />
            <RichText
              value={props.fields.value}
              className={styles['richtext']}
            />
          </Container>
          <Container
            className={` ${styles['container6']} ${styles['container-default']} `}
          />
        </Container>
        <Text
          text={props.fields.text5}
          className={` ${styles['text6']} ${styles['paragraph-default']} `}
        />
      </Container>
    </Container>
  )
}

TestCol.defaultProps = {
  rootClassName: '',
  fields: {},
}

TestCol.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default TestCol
