/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BannerGreen215.module.css'

const BannerGreen215 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Text text={props.fields.text} className={styles['text']} />
          <Text text={props.fields.text1} className={styles['text1']} />
          <Container className={styles['container2']}>
            <Container className={styles['container3']}>
              <Image
                src={props.fields.src}
                alt={props.fields.alt}
                className={styles['image']}
              />
            </Container>
            <Container className={styles['container4']}>
              <Image
                src={props.fields.src1}
                alt={props.fields.alt1}
                className={styles['image1']}
              />
            </Container>
          </Container>
        </Container>
        <Container className={styles['container5']}>
          <Container className={styles['container6']}>
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

BannerGreen215.defaultProps = {
  rootClassName: '',
  fields: {},
}

BannerGreen215.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default BannerGreen215
