/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RepeatComp.module.css'

const RepeatComp = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <Container
              className={` ${styles['container2']} ${styles['container-default']} `}
            >
              <Text
                text={item.fields.text}
                tag="h1"
                className={styles['header-default']}
              />
              <Image
                src={item.fields.src}
                alt={item.fields.alt}
                className={` ${styles['image']} ${styles['image-default']} `}
              />
              <Text
                text={item.fields.text1}
                tag="span"
                className={` ${styles['text1']} ${styles['paragraph-default']} `}
              />
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

RepeatComp.defaultProps = {
  rootClassName: '',
  fields: {},
}

RepeatComp.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RepeatComp
