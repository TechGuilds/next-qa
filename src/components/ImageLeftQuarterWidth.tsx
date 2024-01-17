/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, RichText } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ImageLeftQuarterWidth.module.css'

const ImageLeftQuarterWidth = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        tag="section"
        bgImage={props.fields.bgImage}
        className={styles['container']}
      >
        <Container tag="div" className={styles['container1']}>
          <Container tag="div" className={styles['container2']}>
            <Image
              tag="img"
              src={props.fields.src}
              alt={props.fields.alt}
              className={styles['image']}
            />
          </Container>
          <Container tag="div" className={styles['container3']}>
            <RichText
              value={props.fields.Title}
              className={styles['richtext']}
            />
            <RichText
              value={props.fields.Description}
              className={styles['richtext1']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

ImageLeftQuarterWidth.defaultProps = {
  fields: {
    src: 'https://www.biolage.ca/dist/img/about_us_logo.jpg',
    alt: 'About Biolage',
    text: 'about ',
    text1: 'us',
    text2: 'BIOLAGE',
    text3:
      ' is recognized worldwide as a leader in the professional haircare field. This is because ',
    text4: 'BIOLAGE',
    text5:
      ' is constantly improving — taking haircare to new levels by offering high-performance, professional-quality products powered by botanicals.',
    bgImage: 'https://www.biolage.ca/dist/img/about_us_bg.jpg',
    Title: '<h2>about <span style="color: green;">us</span></h2>',
    Description:
      '<p><span style="color: green;">BIOLAGE</span> is recognized worldwide as a leader in the professional haircare field. This is because <span style="color: green;">BIOLAGE</span> is constantly improving — taking haircare to new levels by offering high-performance, professional-quality products powered by botanicals.</p>',
  },
  rootClassName: '',
}

ImageLeftQuarterWidth.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ImageLeftQuarterWidth
