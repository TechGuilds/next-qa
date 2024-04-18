/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText, Link } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './IntroOneColumn1.module.css'

const IntroOneColumn1 = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['container1']}>
        <Container className={styles['container2']}>
          <Container aria-label="Content" className={styles['container3']}>
            <Text
              tag="h1"
              text={props.fields.text}
              className={styles['text']}
            />
            <Container className={styles['container4']}>
              <Text
                tag="p"
                text={props.fields.text1}
                className={styles['text1']}
              />
              <RichText value={props.fields.value} />
              <Container className={styles['container5']}>
                <Link
                  aria-label="Book a Tour"
                  href={props.fields.href}
                  text={props.fields.text2}
                  className={styles['link']}
                />
              </Container>
              <Text
                tag="p"
                text={props.fields.text3}
                className={styles['text2']}
              />
              <Container className={styles['container6']} />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

IntroOneColumn1.defaultProps = {
  fields: {
    text: 'At Amica, every day is yours to spend exactly as you wish',
    text1: '',
    value:
      '<div data-kajoo-element-type="rich-text">Amica offers an exceptional senior living experience unlike any other. Every residence offers elegant and purposeful designs, premium amenities, unparalleled care that evolves as you do and a lifestyle that leaves you in full control. At Amica, you’ll never have to move again. And you’ll never want to.</div>',
    href: 'https://www.amica.ca/book-a-visit',
    text2: 'BOOK A TOUR',
    text3: '',
  },
  rendering: {},
  rootClassName: '',
}

IntroOneColumn1.propTypes = {
  fields: PropTypes.object,
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default IntroOneColumn1
