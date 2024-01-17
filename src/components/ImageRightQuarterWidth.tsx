/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ImageRightQuarterWidth.module.css'

const ImageRightQuarterWidth = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container bgImage={props.fields.bgImage} className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <RichText
              value={props.fields.Title}
              className={styles['richtext']}
            />
            <RichText
              value={props.fields.Description}
              className={styles['richtext1']}
            />
          </Container>
          <Container className={styles['container3']}>
            <Image
              src={props.fields.src}
              alt={props.fields.alt}
              className={styles['image']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

ImageRightQuarterWidth.defaultProps = {
  fields: {
    tag: 'section',
    tag1: 'div',
    tag2: 'div',
    tag3: 'img',
    src: 'https://www.biolage.ca/dist/img/about_us_logo.jpg',
    alt: 'About Biolage',
    tag4: 'div',
    tag5: 'h2',
    tag6: 'span',
    text: 'about ',
    tag7: 'span',
    text1: 'us',
    tag8: 'p',
    tag9: 'span',
    text2: 'BIOLAGE',
    tag10: 'span',
    text3:
      ' is recognized worldwide as a leader in the professional haircare field. This is because ',
    tag11: 'span',
    text4: 'BIOLAGE',
    tag12: 'span',
    text5:
      ' is constantly improving — taking haircare to new levels by offering high-performance, professional-quality products powered by botanicals.',
    bgImage: 'https://www.biolage.ca/dist/img/about_us_bg.jpg',
    Title: '<h2>about <span style="color: green;">us</span></h2>',
    Description:
      '<p><span style="color: green;">BIOLAGE</span> is recognized worldwide as a leader in the professional haircare field. This is because <span style="color: green;">BIOLAGE</span> is constantly improving — taking haircare to new levels by offering high-performance, professional-quality products powered by botanicals.</p>',
  },
  rootClassName: '',
}

ImageRightQuarterWidth.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ImageRightQuarterWidth
