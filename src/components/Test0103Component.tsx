/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  RichText,
  Image,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Test0103Component.module.css'

const Test0103Component = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Text text={props.fields.text} className={styles['text']} />
          <RichText value={props.fields.value} className={styles['richtext']} />
          <Container className={styles['container02']}>
            <Container className={styles['container03']}>
              <Image
                src={props.fields.src}
                alt={props.fields.alt}
                className={styles['image']}
              />
            </Container>
            <Container className={styles['container04']}>
              <Text text={props.fields.text1} className={styles['text1']} />
              <Container className={styles['container05']}>
                <Text text={props.fields.text2} className={styles['text2']} />
                <Text text={props.fields.text3} className={styles['text3']} />
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={styles['container06']}>
          <Container className={styles['container07']}>
            <Container className={styles['container08']}>
              <Container className={styles['container09']}>
                <Image
                  alt={props.fields.alt1}
                  src={props.fields.xvc}
                  className={styles['image1']}
                />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Test0103Component.defaultProps = {
  rootClassName: '',
  fields: {},
}

Test0103Component.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Test0103Component
