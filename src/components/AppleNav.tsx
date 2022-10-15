/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleNav.module.css'

const AppleNav = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Image
            src={props.fields.src}
            alt={props.fields.alt}
            className={styles['image']}
          />
          <Container className={styles['container2']}>
            <Text text={props.fields.text} className={styles['text']} />
            <Text text={props.fields.text1} className={styles['text01']} />
            <Text text={props.fields.text2} className={styles['text02']} />
            <Text text={props.fields.text3} className={styles['text03']} />
            <Text text={props.fields.text4} className={styles['text04']} />
            <Text text={props.fields.text5} className={styles['text05']} />
            <Text text={props.fields.text6} className={styles['text06']} />
            <Text text={props.fields.text7} className={styles['text07']} />
            <Text text={props.fields.text8} className={styles['text08']} />
            <Text text={props.fields.text9} className={styles['text09']} />
          </Container>
          <Image
            src={props.fields.src1}
            alt={props.fields.alt1}
            className={styles['image1']}
          />
          <Container className={styles['container3']}>
            <Image
              src={props.fields.src2}
              alt={props.fields.alt2}
              className={styles['image2']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AppleNav.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppleNav.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppleNav
