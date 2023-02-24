/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  RichText,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RepeaterTest.module.css'

const RepeaterTest = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Image
            src={props.fields.src}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Container
            className={` ${styles['container2']} ${styles['container-default']} `}
          >
            <Image
              src={props.fields.src2}
              className={` ${styles['image1']} ${styles['image-default']} `}
            />
            <Container>
              <Image
                src={props.fields.src1}
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
              <Text
                text={props.fields.text}
                className={` ${styles['text']} ${styles['paragraph-default']} `}
              />
            </Container>
          </Container>
        </Container>
      </Container>
      <Container className={styles['container4']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container6']}>
              <Container className={styles['container7']}>
                <Image
                  src={item.fields.src3}
                  alt={item.fields.alt}
                  className={` ${styles['image3']} ${styles['acece83e7e5d4e62c6a6c']} `}
                />
                <RichText
                  value={item.fields.value}
                  className={styles['richtext']}
                />
                <Text
                  text={item.fields.text1}
                  tag="span"
                  className={styles['text1']}
                />
              </Container>
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

RepeaterTest.defaultProps = {
  rootClassName: '',
  fields: {},
}

RepeaterTest.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RepeaterTest
