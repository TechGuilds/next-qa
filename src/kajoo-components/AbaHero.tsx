/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  RichText,
  Dropdown,
  Link,
} from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AbaHero.module.css'

const AbaHero = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text text={props.text2} tag="span" className={styles['text']} />
        <Text text={props.text} tag="span" className={styles['text1']} />
        <RichText
          value={props.value}
          className={` ${styles['richtext']} ${styles['richtext-default']} `}
        />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Dropdown
            className={` ${styles['dropdown']} ${styles['dropdown-default']} `}
          />
          <Link
            href={props.href}
            target={props.target}
            rel={props.rel}
            text={props.text1}
            className={` ${styles['link']} ${styles['link-cta-link']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

AbaHero.defaultProps = {
  rootClassName: '',
  text2:
    'Credit union federal income tax exemption will cost the US over $24 billion by 2031. \nAmerican taxpayers are stuck with the bill.',
  text: 'See the impact in your state.\t\t\t\t\t\t',
  value:
    '<iframe src="https://www.google.com/maps/d/embed?mid=1kK4mp4jsia3Wv_D0J5gG-z3fSmU&hl=en_US&ehbc=2E312F" width="100%" height="600px" ></iframe>',
  href: '#',
  target: '_blank',
  rel: 'noreferrer noopener',
  text1: 'SEE NATIONAL DATA',
}

AbaHero.propTypes = {
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  text1: PropTypes.string,
}

export default AbaHero
