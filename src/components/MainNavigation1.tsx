/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './MainNavigation1.module.css'

const MainNavigation1 = (props) => {
  return (
    <Container
      tag="nav"
      aria-label="Main Navigation"
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['container1']}>
        <Link
          href={props.fields.href}
          text={props.fields.text}
          className={styles['link']}
        >
          <Image
            src={props.fields.src}
            alt={props.fields.alt}
            width="800"
            height="402"
            role="img"
            className={styles['image']}
          />
        </Link>
        <Container className={styles['container2']}>
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
              <Text text={props.fields.text1} className={styles['text']} />
            </span>
          </button>
          <ul id="mainMenu" role="menu" className={styles['html-element2']}>
            <li className={styles['html-element3']} />
          </ul>
        </Container>
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
    href: '/en/',
    text: '',
    src: 'https://stage-xm-102cm.kajoo.ai/-/media/Amica/Logos/webimage-9B1B98BC-10CA-4E19-B459EED98FAAE3FA.ashx?h=402&iar=0&w=800&hash=5B3678B2EF15F2345ED7327019ACB4BB',
    alt: '',
    text1: '',
  },
  rendering: {},
  rootClassName: '',
}

MainNavigation1.propTypes = {
  fields: PropTypes.object,
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default MainNavigation1
