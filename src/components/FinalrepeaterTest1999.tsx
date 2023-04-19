/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './FinalrepeaterTest1999.module.css'

const FinalrepeaterTest1999 = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <Container className={styles['container2']}>
              <Container className={styles['container3']}>
                <Text
                  text={item.fields.text}
                  tag="span"
                  className={` ${styles['text']} ${styles['paragraph-default']} `}
                />
                <Text
                  text={item.fields.text2}
                  tag="h1"
                  className={styles['header-default']}
                />
              </Container>
              <Image
                src={item.fields.src}
                alt={item.fields.alt}
                className={` ${styles['image']} ${styles['image-default']} `}
              />
            </Container>
            <Container className={styles['container4']}>
              <Text
                text={item.fields.text1}
                tag="span"
                className={styles['paragraph-default']}
              />
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

FinalrepeaterTest1999.defaultProps = {
  rootClassName: '',
  fields: {},
}

FinalrepeaterTest1999.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default FinalrepeaterTest1999
