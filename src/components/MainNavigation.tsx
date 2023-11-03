/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'
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
        <a href="/" className={styles['html-element']}>
          <Image
            tag="img"
            src={props.fields.src}
            alt={props.fields.alt}
            width="417"
            height="210"
            role="img"
            className={styles['image']}
          />
        </a>
        <Container tag="div" className={styles['container1']}>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className={styles['html-element01']}
          >
            <span className={styles['html-element02']}>
              <Text tag="span" className={styles['text']} />
            </span>
          </button>
          <ul id="mainMenu" role="menu" className={styles['html-element03']}>
            <li className={styles['html-element04']}>
              <a
                href="/amica-conversations"
                className={styles['html-element05']}
              >
                <Text tag="span" text={props.fields.text} />
              </a>
            </li>
            <li className={styles['html-element06']}>
              <a href="/amica-difference" className={styles['html-element07']}>
                <Text tag="span" text={props.fields.text1} />
              </a>
            </li>
            <li className={styles['html-element08']}>
              <a href="/find-a-residence" className={styles['html-element09']}>
                <Text tag="span" text={props.fields.text2} />
              </a>
            </li>
            <li className={styles['html-element10']}>
              <a
                href="/tools-and-resources"
                className={styles['html-element11']}
              >
                <Text tag="span" text={props.fields.text3} />
              </a>
            </li>
            <li className={styles['html-element12']}>
              <a href="/book-a-visit" className={styles['html-element13']}>
                <Text tag="span" text={props.fields.text4} />
              </a>
            </li>
            <li className={styles['html-element14']} />
          </ul>
        </Container>
        <Placeholder className={styles['sitecore-placeholder']} />
      </Container>
      <input
        id="IsExperienceEditor"
        type="hidden"
        value="notexpeditor"
        className={styles['html-element15']}
      />
    </Container>
  )
}

MainNavigation.defaultProps = {
  fields: {
    src: 'https://amica.kajoo.ca/-/media/amica/logos/amica_sl_corplogo_pms_rev_boxed.svg?h=210&la=en&w=417&hash=6048F369EE2E2ACF346F4C59C3C226D01550AF9E',
    alt: 'Amica',
    text: 'Amica Conversations',
    text1: 'Amica Difference',
    text2: 'Find a Residence',
    text3: 'Tools & Resources',
    text4: 'Book a Tour',
    name: '/main/mvc.navsearchbox',
  },
  rootClassName: '',
}

MainNavigation.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default MainNavigation
