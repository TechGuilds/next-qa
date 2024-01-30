/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Link, RichText } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './HeroBanner2.module.css'

const HeroBanner2 = (props) => {
  return (
    <Container
      tag="header"
      id="hero-banner"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    >
      <picture id="picture-aux" className={styles['html-element']}>
        <source
          media="(max-width: 575.98px)"
          srcSet="https://amica.kajoo.ca/-/media/5980ce8a38934b0fb03bd863311025b4.ashx?db=web&amp;la=en&amp;vs=1&amp;ts=20230913t1600563576"
          className={styles['html-element1']}
        />
        <source
          media="(min-width: 1200)"
          srcSet="https://amica.kajoo.ca/-/media/5980ce8a38934b0fb03bd863311025b4.ashx?db=web&amp;la=en&amp;vs=1&amp;ts=20230913t1600563576"
          className={styles['html-element2']}
        />
        <source
          media="(min-width: 576px) and (max-width: 1199.98px)"
          srcSet="https://amica.kajoo.ca/-/media/5980ce8a38934b0fb03bd863311025b4.ashx?db=web&amp;la=en&amp;vs=1&amp;ts=20230913t1600563576"
          className={styles['html-element3']}
        />
        <Image
          src={props.fields.src}
          aria-hidden="true"
          className={styles['image']}
        />
      </picture>
      <Container className={styles['container']} />
      <Container className={styles['container1']}>
        <Placeholder className={styles['sitecore-placeholder']} />
      </Container>
      <Link
        href={props.fields.href}
        aria-hidden="true"
        aria-label="Scroll down"
        text={props.fields.text}
        className={styles['link']}
      >
        <RichText value={props.fields.value} />
      </Link>
    </Container>
  )
}

HeroBanner2.defaultProps = {
  fields: {
    src: 'https://amica.kajoo.ca/-/media/5980ce8a38934b0fb03bd863311025b4.ashx?db=web&la=en&vs=1&ts=20230913t1600563576',
    name: '/main/herobanner-cta',
    href: '#',
    text: '',
    value:
      '<svg width="41" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M40.094 0L20.5 19.222.906 0 0 .889 20.5 21 41 .889z"></path></svg>',
  },
  rootClassName: '',
}

HeroBanner2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default HeroBanner2
