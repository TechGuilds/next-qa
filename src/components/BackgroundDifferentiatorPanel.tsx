/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BackgroundDifferentiatorPanel.module.css'

const BackgroundDifferentiatorPanel = (props) => {
  return (
    <Container
      tag="section"
      id
      role="complementary"
      aria-label="Background Panel"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    >
      <Container tag="div" className={styles['container']}>
        <Container tag="div" className={styles['container1']}>
          <h2 className={styles['html-element']}>
            <Text tag="span" text={props.fields.text} />
          </h2>
          <Container tag="div" className={styles['container2']}>
            <RichText value={props.fields.value} />
          </Container>
          <a
            aria-label="Watch Now"
            href="https://www.amica.ca/webinars"
            onclick="location.href='/Amica/CTA/CTAClick/CallToActionClick?itemId=158084143B994ED6A92B184B0E829637'"
            className={styles['html-element1']}
          >
            <Text tag="span" text={props.fields.text1} />
          </a>
        </Container>
        <Container tag="div" className={styles['container3']} />
        <Image
          tag="img"
          src={props.fields.src}
          alt={props.fields.alt}
          className={styles['image']}
        />
      </Container>
    </Container>
  )
}

BackgroundDifferentiatorPanel.defaultProps = {
  fields: {
    text: 'Webinars for seniors',
    value:
      '<div data-kajoo-element-type="rich-text">\nGet expert&nbsp;tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.\n</div>',
    text1: 'Watch Now',
    src: 'https://amica.kajoo.ca/-/media/310bbf8c62b247f49ee51e2d1f068582.ashx?db=master&la=en&vs=1&ts=20230913t1633522702',
    alt: 'Webinars for seniors',
  },
  rootClassName: '',
}

BackgroundDifferentiatorPanel.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default BackgroundDifferentiatorPanel
