/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleIPhoneComponent2.module.css'

const AppleIPhoneComponent2 = (props) => {
  return (
    <Container>
      <Container bgImage className={styles['container']}>
        <Container bgImage className={styles['container01']}>
          <Container bgImage className={styles['container02']}>
            <Text
              text={props.fields.text}
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Text text={props.fields.text1} className={styles['text1']} />
          </Container>
          <Text text={props.fields.text2} className={styles['text2']} />
          <Container bgImage className={styles['container03']}>
            <Container bgImage className={styles['container04']}>
              <Text text={props.fields.text4} className={styles['text3']} />
              <Container bgImage className={styles['container05']}>
                <Container bgImage className={styles['container06']}>
                  <Image
                    src={props.fields.src}
                    alt={props.fields.alt}
                    className={styles['image']}
                  />
                </Container>
              </Container>
            </Container>
            <Container bgImage className={styles['container07']}>
              <Text text={props.fields.text5} className={styles['text4']} />
              <Container bgImage className={styles['container08']}>
                <Container bgImage className={styles['container09']}>
                  <Image
                    src={props.fields.src1}
                    alt={props.fields.alt1}
                    className={styles['image1']}
                  />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Image
          src={props.fields.src2}
          alt={props.fields.alt2}
          className={styles['image2']}
        />
        <Container bgImage className={styles['container10']} />
      </Container>
    </Container>
  )
}

AppleIPhoneComponent2.defaultProps = {
  fields: {},
}

AppleIPhoneComponent2.propTypes = {
  fields: PropTypes.object,
}

export default AppleIPhoneComponent2
