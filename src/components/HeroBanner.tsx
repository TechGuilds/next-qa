/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text, RichText } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './HeroBanner.module.css'

const HeroBanner = (props) => {
  return (
    <Container
      tag="header"
      id="hero-banner"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    >
      <picture id="picture-aux" className={styles['html-element']}>
        <source
          media="(max-width: 575.98px)"
          srcset="https://amica.kajoo.ca/-/media/5980ce8a38934b0fb03bd863311025b4.ashx?db=web&amp;la=en&amp;vs=1&amp;ts=20230913t1600563576"
          className={styles['html-element1']}
        />
        <source
          media="(min-width: 1200)"
          srcset="https://amica.kajoo.ca/-/media/5980ce8a38934b0fb03bd863311025b4.ashx?db=web&amp;la=en&amp;vs=1&amp;ts=20230913t1600563576"
          className={styles['html-element2']}
        />
        <source
          media="(min-width: 576px) and (max-width: 1199.98px)"
          srcset="https://amica.kajoo.ca/-/media/5980ce8a38934b0fb03bd863311025b4.ashx?db=web&amp;la=en&amp;vs=1&amp;ts=20230913t1600563576"
          className={styles['html-element3']}
        />
        <Image
          tag="img"
          src={props.fields.src}
          aria-hidden="true"
          className={styles['image']}
        />
      </picture>
      <Container tag="div" className={styles['container']} />
      <Container tag="div" className={styles['container1']}>
        <a
          aria-label="Find A Residence"
          href="/find-a-residence"
          onclick="location.href='/Amica/CTA/CTAClick/CallToActionClick?itemId=751A1BFE3776428585B675F8C0C4D291'"
          className={styles['html-element4']}
        >
          <Text tag="span" text={props.fields.text} />
        </a>
      </Container>
      <a
        href="#"
        aria-hidden="true"
        aria-label="Scroll down"
        className={styles['html-element5']}
      >
        <RichText value={props.fields.value} />
      </a>
    </Container>
  )
}

HeroBanner.defaultProps = {
  fields: {
    src: 'https://amica.kajoo.ca/-/media/5980ce8a38934b0fb03bd863311025b4.ashx?db=web&la=en&vs=1&ts=20230913t1600563576',
    text: 'Find A Residence',
    value:
      '<svg width="41" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M40.094 0L20.5 19.222.906 0 0 .889 20.5 21 41 .889z"></path></svg>',
  },
  rootClassName: '',
}

HeroBanner.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default HeroBanner
