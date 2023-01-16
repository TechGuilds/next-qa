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

import Component1 from '../kajoo-components/Component1'
import styles from './ThreeBoxesNewComponentTest.module.css'

const ThreeBoxesNewComponentTest = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Text
          text={props.fields.text}
          className={` ${styles['text']} ${styles['paragraph-default']} `}
        />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Container
            className={` ${styles['container2']} ${styles['container-default']} `}
          >
            <Image
              src={props.fields.src}
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <Text
              text={props.fields.text1}
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.fields.text2}
              className={` ${styles['button']} ${styles['button-default']} `}
            />
          </Container>
          <Container
            className={` ${styles['container3']} ${styles['container-default']} `}
          >
            <Component1 rootClassName="root-class-name" />
            <Image
              src={props.fields.src1}
              className={` ${styles['image1']} ${styles['image-default']} `}
            />
            <Text
              text={props.fields.text3}
              className={` ${styles['text2']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.fields.text4}
              className={` ${styles['button1']} ${styles['button-default']} `}
            />
          </Container>
          <Container
            className={` ${styles['container4']} ${styles['container-default']} `}
          >
            <Image
              src={props.fields.src2}
              className={` ${styles['image2']} ${styles['image-default']} `}
            />
            <Text
              text={props.fields.text5}
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.fields.text6}
              className={` ${styles['button2']} ${styles['button-default']} `}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

ThreeBoxesNewComponentTest.defaultProps = {
  rootClassName: '',
  fields: {},
}

ThreeBoxesNewComponentTest.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ThreeBoxesNewComponentTest
