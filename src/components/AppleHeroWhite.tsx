/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleHeroWhite.module.css'

const AppleHeroWhite = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Text text={props.fields.text} className={styles['text']} />
            <Text text={props.fields.text1} className={styles['text1']} />
          </Container>
          <Container className={styles['container03']}>
            <Text text={props.fields.text2} className={styles['text2']} />
            <Text text={props.fields.text3} className={styles['text3']} />
          </Container>
          <Container className={styles['container04']}>
            <Container className={styles['container05']}>
              <Text text={props.fields.text4} className={styles['text4']} />
              <Container className={styles['container06']}>
                <Container className={styles['container07']}>
                  <Image
                    src={props.fields.src}
                    alt={props.fields.alt}
                    className={styles['image']}
                  />
                </Container>
              </Container>
            </Container>
            <Container className={styles['container08']}>
              <Text text={props.fields.text5} className={styles['text5']} />
              <Container className={styles['container09']}>
                <Container className={styles['container10']}>
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

AppleHeroWhite.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppleHeroWhite.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppleHeroWhite
