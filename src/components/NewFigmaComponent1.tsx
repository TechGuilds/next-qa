/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent1.module.css'

const NewFigmaComponent1 = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <Container className={styles['container2']} />
            <Container className={styles['container3']} />
            <Text
              text={item.fields.text}
              tag="span"
              className={styles['paragraph-default']}
            />
            <Text
              text={item.fields.text1}
              tag="h1"
              className={styles['header-default']}
            />
            <Image
              src={item.fields.src}
              alt={item.fields.alt}
              className={styles['image-default']}
            />
          </Container>
        ))}
      </Container>
    </Container>
  )
}

NewFigmaComponent1.defaultProps = {
  rootClassName: '',
  fields: {},
}

NewFigmaComponent1.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default NewFigmaComponent1
