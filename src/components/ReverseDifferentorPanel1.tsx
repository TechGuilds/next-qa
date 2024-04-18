/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Link, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ReverseDifferentorPanel1.module.css'

const ReverseDifferentorPanel1 = (props) => {
  return (
    <Container
      tag="section"
      role="complementary"
      aria-label="Reverse Panel"
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['container1']}>
        <Container className={styles['container2']}>
          <Text tag="h2" text={props.fields.text} className={styles['text']} />
          <Container className={styles['container3']}>
            <Container className={styles['container4']}>
              <Container className={styles['container5']}>
                <Container
                  data-kajoo-element-type="richtext"
                  className={styles['container6']}
                >
                  <Text text={props.fields.text1} />
                </Container>
              </Container>
              <Link
                aria-label="DISCOVER PERSONALIZED CARE"
                href={props.fields.href}
                text={props.fields.text2}
                className={styles['link']}
              />
            </Container>
            <Container className={styles['container7']}>
              <Text text={props.fields.text3} />
            </Container>
          </Container>
        </Container>
        <Container className={styles['container8']}>
          <Image
            src={props.fields.src}
            alt={props.fields.alt}
            width="760"
            height="507"
            className={styles['image']}
          />
        </Container>
      </Container>
    </Container>
  )
}

ReverseDifferentorPanel1.defaultProps = {
  fields: {
    text: 'Personalizing your care, prioritizing your wellness',
    text1:
      'Care that is considerate, respectful and personalized to your wishes and schedule — that’s what you can expect from our highly trained professional wellness teams. We get to know your needs and routines to provide exceptional, experienced support based on your preferences in the privacy of your suite. And if your needs or preferences change, so will our care.',
    href: 'https://www.amica.ca/amica-difference/best-in-class',
    text2: 'DISCOVER PERSONALIZED CARE',
    text3: ' ',
    src: 'https://stage-xm-102cm.kajoo.ai/-/media/Amica/Amica-Difference/Differentiator_panel_desktop-Amica_ButtonsDressing_0249.ashx?h=507&iar=0&w=760&hash=A938613B1420A13B6561B3BE101DBB42',
    alt: '',
  },
  rendering: {},
  rootClassName: '',
}

ReverseDifferentorPanel1.propTypes = {
  fields: PropTypes.object,
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ReverseDifferentorPanel1
