/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ReverseDifferentiatorPanel.module.css'

const ReverseDifferentiatorPanel = (props) => {
  return (
    <Container
      tag="section"
      id
      role="complementary"
      aria-label="Reverse Panel"
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
            aria-label="Lend A Helping Hand"
            href="https://www.amica.ca/helping-hands-charity"
            onclick="location.href='/Amica/CTA/CTAClick/CallToActionClick?itemId=BD6DEED5CE164E73A3F2ED14D179F8F5'"
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

ReverseDifferentiatorPanel.defaultProps = {
  fields: {
    text: 'Giving back to the community',
    value:
      '<div data-kajoo-element-type="rich-text">\n<span>Through Amica Helping Hands, our registered Canadian charity, residents have the opportunity to volunteer with us in support of seniors in need.</span>\n</div>',
    text1: 'Lend A Helping Hand',
    src: 'https://amica.kajoo.ca/-/media/amica/differentiator_panel_desktop-760x546_helphands_new.jpg?h=546&la=en&w=760&hash=A35A07140ACE7DD6339C32015308EF32390C19E0',
    alt: 'hands',
  },
  rootClassName: '',
}

ReverseDifferentiatorPanel.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ReverseDifferentiatorPanel
