/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Video } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AbaVideo.module.css'

const AbaVideo = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text text={props.fields.text} tag="span" className={styles['text']} />
        <Video
          src={props.fields.src1}
          className={` ${styles['video']} ${styles['video-default']} `}
        />
      </Container>
    </Container>
  )
}

AbaVideo.defaultProps = {
  rootClassName: '',
  fields: {},
}

AbaVideo.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AbaVideo
