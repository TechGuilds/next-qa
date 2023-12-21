/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Image, Text } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './MainNavigation1.module.css'

const MainNavigation1 = (props) => {
  return (
    <Container
      tag="nav"
      aria-label="Main Navigation"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    >
      <Container tag="div" className={styles['container']}>
        <Link tag="a" href={props.fields.href} className={styles['link']}>
          <Image
            tag="img"
            src={props.fields.src}
            alt={props.fields.alt}
            width="417"
            height="210"
            role="img"
            className={styles['image']}
          />
        </Link>
        <Container tag="div" className={styles['container1']}>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className={styles['html-element']}
          >
            <span className={styles['html-element1']}>
              <Text
                tag="span"
                text={props.fields.text1}
                className={styles['text']}
              />
            </span>
          </button>
          <ul id="mainMenu" role="menu" className={styles['html-element2']}>
            <li className={styles['html-element3']} />
          </ul>
        </Container>
        <Placeholder className={styles['sitecore-placeholder']} />
      </Container>
      <input
        id="IsExperienceEditor"
        type="hidden"
        value="notexpeditor"
        className={styles['html-element4']}
      />
    </Container>
  )
}

MainNavigation1.defaultProps = {
  fields: {
    href: '/',
    text: '',
    src: 'https://amica.kajoo.ca/-/media/amica/logos/amica_sl_corplogo_pms_rev_boxed.svg?h=210&la=en&w=417&hash=6048F369EE2E2ACF346F4C59C3C226D01550AF9E',
    alt: 'Amica',
    text1: '',
    name: '/main/mvc.navsearchbox',
  },
  rootClassName: '',
}

MainNavigation1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default MainNavigation1
