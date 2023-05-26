/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container show={3} className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <Text
              text={props.text}
              tag="h1"
              className={styles['paragraph-default']}
            />
            <Text
              text={props.text1}
              tag="span"
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
  text: 'Heading',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  src: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/VdAYw0jkz48UOmsln-0p9.png',
  alt: 'default-kajoo-imag',
  fields: {
    items: [1, 1, 1],
  },
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fields: PropTypes.array,
}

export default Component1
