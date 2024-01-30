/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText, Image } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './DifferentiatorPanel1.module.css'

const DifferentiatorPanel1 = (props) => {
  return (
    <Container
      tag="section"
      id
      role="complementary"
      aria-label="Panel"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Text tag="h2" text={props.fields.text} className={styles['text']} />
          <Container className={styles['container2']}>
            <RichText value={props.fields.value} />
          </Container>
          <Placeholder className={styles['sitecore-placeholder']} />
        </Container>
        <Container className={styles['container3']}>
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

DifferentiatorPanel1.defaultProps = {
  fields: {
    text: 'It’s time for some straight answers.',
    value:
      '<div data-kajoo-element-type="rich-text">\n<p>Will I be in charge of my day? Can I eat what, and when, I want? &nbsp;Will I have to move if I need extra care? Moving to senior living is a big decision. If you’re not asking questions like these, maybe you should be. Ask us. You’ll get the straightforward answers you’re looking for.</p>\n<p>You have questions. Here are others to consider.</p>\n</div>',
    name: '/main/phCTA-{8DA5416A-32F2-40F3-A75A-CE95373CB8F8}-0',
    src: 'https://amica.kajoo.ca/-/media/amica/differentiator_panel_desktop-occ_senwoman760x546.jpg?h=546&la=en&w=760&hash=1EF5C98BC24BB608E6ABAE3D233EF41D10F27F15',
    alt: 'Women',
  },
  rootClassName: '',
}

DifferentiatorPanel1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DifferentiatorPanel1
