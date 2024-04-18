// @ts-nocheck
/* eslint-disable */
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import {
  Container,
  Text,
  RichText,
  Link,
  Image,
} from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './kajoo-first_DifferentorPanel1.module.css'

const DifferentorPanel1 = (props) => {
  return (
    <Container
      tag="section"
      id
      role="complementary"
      aria-label="Panel"
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
                aria-label="Book a Tour"
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
        <Container className={styles['container7']}>
          <Image
            src={props.fields.src}
            alt={props.fields.alt}
            width="760"
            height="546"
            className={styles['image']}
          />
        </Container>
      </Container>
    </Container>
  )
}

DifferentorPanel1.defaultProps = {
  fields: {
    text: 'It’s time for some straight answers.',
    value:
      '<div data-kajoo-element-type="rich-text">\n<p style="margin-right: 0px; margin-bottom: 0.8em; margin-left: 0px; line-height: 1.8;">Will I be in charge of my day? Can I eat what, and when, I want? &nbsp;Will I have to move if I need extra care? Moving to senior living is a big decision. If you’re not asking questions like these, maybe you should be. Ask us. You’ll get the straightforward answers you’re looking for.</p>\n<p style="margin: 0px 0px 0.8em; line-height: 1.8;">You have questions. Here are others to consider.</p>\n</div>',
    href: 'https://www.amica.ca/book-a-visit',
    text1: 'BOOK A TOUR',
    text2: ' ',
    src: 'https://stage-xm-102cm.kajoo.ai/-/media/Amica/Differentiator_panel_desktop-Occ_SenWoman760x546.ashx?h=546&iar=0&w=760&hash=D261DB2400CE3EB79E78982045D6500B',
    alt: '',
  },
  rendering: {},
  rootClassName: '',
}

DifferentorPanel1.propTypes = {
  fields: PropTypes.object,
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default withDatasourceCheck()(DifferentorPanel1)
