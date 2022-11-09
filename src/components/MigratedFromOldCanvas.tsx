/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './MigratedFromOldCanvas.module.css'

const MigratedFromOldCanvas = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Image src={props.fields.src} className={styles['image']} />
          <Text text={props.fields.text} className={styles['text']} />
          <Text text={props.fields.text1} className={styles['text1']} />
        </Container>
        <Container className={styles['container2']}>
          <Image src={props.fields.src1} className={styles['image1']} />
          <Text text={props.fields.text2} className={styles['text2']} />
          <Text text={props.fields.text3} className={styles['text3']} />
        </Container>
        <Container className={styles['container3']}>
          <Image src={props.fields.src2} className={styles['image2']} />
          <Text text={props.fields.text4} className={styles['text4']} />
          <Text text={props.fields.text5} className={styles['text5']} />
        </Container>
      </Container>
    </Container>
  )
}

MigratedFromOldCanvas.defaultProps = {
  rootClassName: '',
  fields: {},
}

MigratedFromOldCanvas.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default MigratedFromOldCanvas
