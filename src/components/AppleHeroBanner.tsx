/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleHeroBanner.module.css'

const AppleHeroBanner = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Text text={props.fields.text} className={styles['text']} />
            <Text text={props.fields.text1} className={styles['text1']} />
          </Container>
          <Text text={props.fields.text2} className={styles['text2']} />
          <Container className={styles['container03']}>
            <Container className={styles['container04']}>
              <Text text={props.fields.text3} className={styles['text3']} />
              <Container className={styles['container05']}>
                <Container className={styles['container06']}>
                  <Image
                    src={props.fields.src}
                    alt={props.fields.alt}
                    className={styles['image']}
                  />
                </Container>
              </Container>
            </Container>
            <Container className={styles['container07']}>
              <Text text={props.fields.text4} className={styles['text4']} />
              <Container className={styles['container08']}>
                <Container className={styles['container09']}>
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
      </Container>
    </Container>
  )
}

AppleHeroBanner.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppleHeroBanner.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppleHeroBanner
