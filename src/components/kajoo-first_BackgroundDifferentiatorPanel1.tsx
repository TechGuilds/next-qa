// @ts-nocheck
/* eslint-disable */
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text, RichText, Link } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './kajoo-first_BackgroundDifferentiatorPanel1.module.css'

const BackgroundDifferentiatorPanel1 = (props) => {
  return (
    <Container
      tag="section"
      id
      role="complementary"
      aria-label="Background Panel"
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['container1']}>
        <Container className={styles['container2']}>
          <Text tag="h2" text={props.fields.text} className={styles['text']} />
          <Container className={styles['container3']}>
            <Container className={styles['container4']}>
              <Container className={styles['container5']}>
                <RichText value={props.fields.value} />
              </Container>
              <Link
                aria-label="Watch Now"
                href={props.fields.href}
                text={props.fields.text1}
                className={styles['link']}
              />
            </Container>
            <Container className={styles['container6']}>
              <Text text={props.fields.text2} />
            </Container>
          </Container>
        </Container>
        <Container className={styles['container7']} />
      </Container>
    </Container>
  )
}

BackgroundDifferentiatorPanel1.defaultProps = {
  fields: {
    text: 'Webinars for seniors',
    value:
      '<div data-kajoo-element-type="rich-text">Get expert&nbsp;tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.</div>',
    href: 'https://www.amica.ca/webinars',
    text1: 'WATCH NOW',
    text2: ' ',
  },
  rendering: {},
  rootClassName: '',
}

BackgroundDifferentiatorPanel1.propTypes = {
  fields: PropTypes.object,
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default withDatasourceCheck()(BackgroundDifferentiatorPanel1)
