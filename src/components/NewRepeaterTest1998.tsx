/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewRepeaterTest1998.module.css'

const NewRepeaterTest1998 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <Container className={styles['container2']}>
              <Text
                text={item.fields.text}
                tag="h1"
                className={` ${styles['header-default']} ${styles['text']} `}
              />
              <Image
                src={item.fields.src}
                alt={item.fields.alt}
                className={` ${styles['image']} ${styles['image-default']} `}
              />
              <Text
                text={item.fields.text1}
                tag="span"
                className={` ${styles['paragraph-default']} ${styles['text1']} `}
              />
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

NewRepeaterTest1998.defaultProps = {
  rootClassName: '',
  fields: {},
}

NewRepeaterTest1998.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default NewRepeaterTest1998
