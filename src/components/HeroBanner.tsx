/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './HeroBanner.module.css'

const HeroBanner = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        tag="section"
        bgImage={props.fields.DesktopBgImage}
        className={styles['container']}
      >
        <Container tag="div" className={styles['container1']} />
      </Container>
    </Container>
  )
}

HeroBanner.defaultProps = {
  fields: {
    DesktopBgImage:
      'https://www.biolage.ca/dist/img/biolage_header_desktop_en.jpg',
  },
  rootClassName: '',
}

HeroBanner.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default HeroBanner
