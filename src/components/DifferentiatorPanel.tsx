/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DifferentiatorPanel.module.css'

const DifferentiatorPanel = (props) => {
  return (
    <Container
      tag="section"
      id
      role="complementary"
      aria-label="Panel"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    >
      <Container tag="div" className={styles['container']}>
        <Container tag="div" className={styles['container1']}>
          <h2 className={styles['html-element']}>
            <Text tag="span" text={props.fields.text} />
          </h2>
          <Container tag="div" className={styles['container2']}>
            <RichText value={props.fields.value} />
          </Container>
          <a
            aria-label="Book a Tour"
            href="https://www.amica.ca/book-a-visit"
            onclick="location.href='/Amica/CTA/CTAClick/CallToActionClick?itemId=7AB32354036F424AA85F0639F002BF61'"
            className={styles['html-element1']}
          >
            <Text tag="span" text={props.fields.text1} />
          </a>
        </Container>
        <Container tag="div" className={styles['container3']}>
          <Image
            tag="img"
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

DifferentiatorPanel.defaultProps = {
  fields: {
    text: 'It’s time for some straight answers.',
    value:
      '<div data-kajoo-element-type="rich-text">\n<p>Will I be in charge of my day? Can I eat what, and when, I want? &nbsp;Will I have to move if I need extra care? Moving to senior living is a big decision. If you’re not asking questions like these, maybe you should be. Ask us. You’ll get the straightforward answers you’re looking for.</p>\n<p>You have questions. Here are others to consider.</p>\n</div>',
    text1: 'Book a Tour',
    src: 'https://amica.kajoo.ca/-/media/amica/differentiator_panel_desktop-occ_senwoman760x546.jpg?h=546&la=en&w=760&hash=1EF5C98BC24BB608E6ABAE3D233EF41D10F27F15',
    alt: 'Women',
  },
  rootClassName: '',
}

DifferentiatorPanel.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DifferentiatorPanel
