/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Link, RichText } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

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
        <Placeholder className={styles['sitecore-placeholder']} />
      </Container>
      <Link
        tag="a"
        href={props.fields.href}
        aria-hidden="true"
        aria-label="Scroll down"
        className={styles['link']}
      >
        <RichText
          tag="svg"
          width="41"
          height="21"
          xmlns="http://www.w3.org/2000/svg"
          className={styles['richtext']}
        />
      </Link>
    </Container>
  )
}

HeroBanner.defaultProps = {
  fields: {
    src: 'https://amica.kajoo.ca/-/media/5980ce8a38934b0fb03bd863311025b4.ashx?db=web&la=en&vs=1&ts=20230913t1600563576',
    name: '/main/herobanner-cta',
    href: '#',
    text: '',
  },
  rootClassName: '',
}

HeroBanner.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default HeroBanner
