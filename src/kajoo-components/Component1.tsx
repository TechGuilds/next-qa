/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container show={3} className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <Container className={styles['container2']} />
            <Text
              text={props.text1}
              tag="span"
              className={styles['paragraph-default']}
            />
          </Container>
        ))}
      </Container>
      <Container show={3} className={styles['container3']}>
        {props.fields.items1.map((item, index) => (
          <Container key={index} className={styles['container4']}>
            <Text
              text={props.text}
              tag="strong"
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
            <Image
              src={props.src}
              alt={props.alt}
              className={` ${styles['image']} ${styles['image-default']} `}
            />
          </Container>
        ))}
      </Container>
    </Container>
  )
}

Component1.defaultProps = {
  rootClassName: '',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  fields: {
    items: [1, 1, 1],
    items1: [1, 1, 1],
  },
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  src: 'https://qa-app.kajoo.ca/icons/default-imag.svg',
  alt: '',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  fields: PropTypes.array,
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default Component1
