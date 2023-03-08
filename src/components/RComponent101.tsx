/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Video, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RComponent101.module.css'

const RComponent101 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container2']}>
              <Container className={styles['container3']}>
                <Text
                  text={item.fields.text}
                  tag="span"
                  className={` ${styles['text']} ${styles['acece83e7e5d4e62c6a60']} `}
                />
                <Video
                  src={item.fields.src1}
                  className={` ${styles['video']} ${styles['acece83e7e5d4e62c6a72']} `}
                />
                <Image
                  src={item.fields.src}
                  alt={item.fields.alt}
                  className={` ${styles['image']} ${styles['acece83e7e5d4e62c6a6c']} `}
                />
              </Container>
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

RComponent101.defaultProps = {
  rootClassName: '',
  fields: {},
}

RComponent101.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RComponent101
