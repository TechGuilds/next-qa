/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from 'lib/kajoo-layout-factory';
import React from 'react'
import { Container, Text, Image, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Mvctest.module.css'

const Mvctest = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text
              text={props.fields.text}
              tag="span"
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Image
              src={props.fields.src}
              alt={props.fields.alt}
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <Text
              text={props.fields.text1}
              tag="span"
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container className={styles['container3']}>
            <Container className={styles['container4']}>
              <Text
                text={props.fields.text2}
                tag="span"
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.fields.src1}
                alt={props.fields.alt1}
                className={` ${styles['image1']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.fields.text3}
              tag="span"
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container className={styles['container5']}>
            <Container className={styles['container6']}>
              <Text
                text={props.fields.text4}
                tag="span"
                className={` ${styles['text4']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.fields.src2}
                alt={props.fields.alt2}
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.fields.text5}
              tag="span"
              className={` ${styles['text5']} ${styles['paragraph-default']} `}
            />
          </Container>
        </Container>
        <Container className={styles['container7']}>
          <Button
            link={props.fields.link}
            className={` ${styles['button']} ${styles['button-default']} `}
          />
          <Button
            link={props.fields.link1}
            className={` ${styles['button1']} ${styles['button-default']} `}
          />
          <Button
            link={props.fields.link2}
            className={` ${styles['button2']} ${styles['button-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

Mvctest.defaultProps = {
  fields: {
    text: 'HEADER',
    src: '/icons/default-imag.svg',
    alt: 'default-kajoo-imag',
    text1:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
    text2: 'HEADER',
    src1: '/icons/default-imag.svg',
    alt1: 'default-kajoo-imag',
    text3:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
    text4: 'HEADER',
    src2: '/icons/default-imag.svg',
    alt2: 'default-kajoo-imag',
    text5:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
    link: '#',
    text6: 'Button',
    link1: '#',
    text7: 'Button',
    link2: '#',
    text8: 'Button',
  },
  rootClassName: '',
}

Mvctest.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Mvctest
