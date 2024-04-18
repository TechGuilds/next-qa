// @ts-nocheck
/* eslint-disable */
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './kajoo-first_HeroBanner1.module.css'

const HeroBanner1 = (props) => {
  return (
    <Container
      tag="header"
      id="hero-banner"
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <picture id="picture-aux" className={styles['html-element']}>
        <source
          media="(min-width: 1200)"
          srcSet="https://stage-xm-102cm.kajoo.ai/-/media/Amica/Differentiator_panel_with_background_desktop-ASL-NEW-HomepageHeroBanner-OptionB-Desktop-230413.ashx"
          className={styles['html-element1']}
        />
        <Image
          src={props.fields.src}
          aria-hidden="true"
          alt={props.fields.alt}
          className={styles['image']}
        />
      </picture>
      <Container className={styles['container1']}>
        <Text tag="p" text={props.fields.text} className={styles['text']} />
        <Text tag="h1" text={props.fields.text1} className={styles['text1']} />
        <Text tag="h2" text={props.fields.text2} className={styles['text2']} />
      </Container>
    </Container>
  )
}

HeroBanner1.defaultProps = {
  fields: {
    src: 'https://stage-xm-102cm.kajoo.ai/-/media/Amica/Differentiator_panel_with_background_desktop-ASL-NEW-HomepageHeroBanner-OptionB-Desktop-230413.ashx',
    alt: 'Hero Banner',
    text: 'Hat Title',
    text1: 'Headline',
    text2: 'Subtitle',
  },
  rendering: {},
  rootClassName: '',
}

HeroBanner1.propTypes = {
  fields: PropTypes.object,
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default withDatasourceCheck()(HeroBanner1)
