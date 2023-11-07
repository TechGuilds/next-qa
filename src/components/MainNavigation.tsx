/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Image, Text } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './MainNavigation.module.css'

const MainNavigation = (props) => {
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
            <span className={styles['html-element01']}>
              <Text
                tag="span"
                text={props.fields.text1}
                className={styles['text']}
              />
            </span>
          </button>
          <ul id="mainMenu" role="menu" className={styles['html-element02']}>
            <li className={styles['html-element03']}>
              <Link
                tag="a"
                href={props.fields.href1}
                className={styles['link1']}
              />
            </li>
            <li className={styles['html-element04']}>
              <Link
                tag="a"
                href={props.fields.href2}
                className={styles['link2']}
              />
            </li>
            <li className={styles['html-element05']}>
              <Link
                tag="a"
                href={props.fields.href3}
                className={styles['link3']}
              />
            </li>
            <li className={styles['html-element06']}>
              <Link
                tag="a"
                href={props.fields.href4}
                className={styles['link4']}
              />
            </li>
            <li className={styles['html-element07']}>
              <Link
                tag="a"
                href={props.fields.href5}
                className={styles['link5']}
              />
            </li>
            <li className={styles['html-element08']} />
          </ul>
        </Container>
        <Placeholder className={styles['sitecore-placeholder']} />
      </Container>
      <input
        id="IsExperienceEditor"
        type="hidden"
        value="notexpeditor"
        className={styles['html-element09']}
      />
    </Container>
  )
}

MainNavigation.defaultProps = {
  fields: {
    href: '/',
    text: '',
    src: 'https://amica.kajoo.ca/-/media/amica/logos/amica_sl_corplogo_pms_rev_boxed.svg?h=210&la=en&w=417&hash=6048F369EE2E2ACF346F4C59C3C226D01550AF9E',
    alt: 'Amica',
    text1: '',
    href1: '/amica-conversations',
    text2: 'Amica Conversations',
    href2: '/amica-difference',
    text3: 'Amica Difference',
    href3: '/find-a-residence',
    text4: 'Find a Residence',
    href4: '/tools-and-resources',
    text5: 'Tools & Resources',
    href5: '/book-a-visit',
    text6: 'Book a Tour',
    name: '/main/mvc.navsearchbox',
  },
  rootClassName: '',
}

MainNavigation.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default MainNavigation
