/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './GreenBanner215.module.css'

const GreenBanner215 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Image
              src={props.fields.src}
              alt={props.fields.alt}
              className={styles['image']}
            />
          </Container>
        </Container>
        <Container className={styles['container3']}>
          <Text text={props.fields.text} className={styles['text']} />
          <Text text={props.fields.text1} className={styles['text1']} />
          <Text text={props.fields.text2} className={styles['text2']} />
          <Container>
            <Button className={styles['button']} />
            <Text text={props.fields.text3} className={styles['text3']} />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

GreenBanner215.defaultProps = {
  rootClassName: '',
  fields: {},
}

GreenBanner215.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default GreenBanner215
