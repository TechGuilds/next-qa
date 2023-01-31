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

import Component2 from './Component2'
import styles from './NewComponent2.module.css'

const NewComponent2 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Text
          text={props.text}
          className={` ${styles['text']} ${styles['paragraph-default']} `}
        />
        <Container className={styles['container1']}>
          <Container
            className={` ${styles['container2']} ${styles['container-default']} `}
          >
            <Component2 rootClassName="root-class-name" />
            <Container
              className={` ${styles['container3']} ${styles['container-default']} `}
            />
            <Container
              className={` ${styles['container4']} ${styles['container-default']} `}
            >
              <Image
                src={props.src1}
                className={` ${styles['image']} ${styles['image-default']} `}
              />
              <Text
                text={props.text3}
                className={` ${styles['text1']} ${styles['paragraph-default']} `}
              />
              <Button
                text={props.text4}
                className={` ${styles['button']} ${styles['button-default']} `}
              />
            </Container>
            <Container
              className={` ${styles['container5']} ${styles['container-default']} `}
            >
              <Image
                src={props.src2}
                className={` ${styles['image1']} ${styles['image-default']} `}
              />
              <Text
                text={props.text5}
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Button
                text={props.text6}
                className={` ${styles['button1']} ${styles['button-default']} `}
              />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewComponent2.defaultProps = {
  rootClassName: '',
  text: 'HEADER',
  src1: '/icons/default-imag.svg',
  text3:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text4: 'Button',
  src2: '/icons/default-imag.svg',
  text5:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text6: 'Button',
}

NewComponent2.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  src1: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  src2: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
}

export default NewComponent2
