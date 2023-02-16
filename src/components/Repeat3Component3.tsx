/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Video, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Repeat3Component3.module.css'

const Repeat3Component3 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Image
        src={props.fields.src}
        alt={props.fields.alt}
        className={` ${styles['image']} ${styles['image-default']} `}
      />
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container2']}>
              <Video
                src={item.src1}
                muted={item.muted}
                poster={item.poster}
                className={` ${styles['video']} ${styles['acece83e7e5d4e62c6a72']} `}
              />
              <Text text={item.text1} tag="span" className={styles['text']} />
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

Repeat3Component3.defaultProps = {
  rootClassName: '',
  fields: {},
}

Repeat3Component3.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Repeat3Component3
