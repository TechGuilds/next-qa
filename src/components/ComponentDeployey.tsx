/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ComponentDeployey.module.css'

const ComponentDeployey = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Container
            className={` ${styles['container2']} ${styles['container-default']} `}
          >
            <Text
              text={props.fields.text}
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Image
              src={props.fields.src}
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <Text
              text={props.fields.text1}
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container
            className={` ${styles['container3']} ${styles['container-default']} `}
          >
            <Container
              className={` ${styles['container4']} ${styles['container-default']} `}
            >
              <Text
                text={props.fields.text2}
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.fields.src1}
                className={` ${styles['image1']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.fields.text3}
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container
            className={` ${styles['container5']} ${styles['container-default']} `}
          >
            <Container
              className={` ${styles['container6']} ${styles['container-default']} `}
            >
              <Text
                text={props.fields.text4}
                className={` ${styles['text4']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.fields.src2}
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.fields.text5}
              className={` ${styles['text5']} ${styles['paragraph-default']} `}
            />
          </Container>
        </Container>
        <Container
          className={` ${styles['container7']} ${styles['container-default']} `}
        >
          <Button
            text={props.fields.text6}
            className={` ${styles['button']} ${styles['button-default']} `}
          />
          <Button
            text={props.fields.text7}
            className={` ${styles['button1']} ${styles['button-default']} `}
          />
          <Button
            text={props.fields.text8}
            className={` ${styles['button2']} ${styles['button-default']} `}
          />
        </Container>
        <Button
          text={props.fields.text9}
          className={styles['button-default']}
        />
      </Container>
    </Container>
  )
}

ComponentDeployey.defaultProps = {
  rootClassName: '',
  fields: {},
}

ComponentDeployey.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ComponentDeployey
