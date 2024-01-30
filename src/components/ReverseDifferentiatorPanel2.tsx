/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText, Image } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './ReverseDifferentiatorPanel2.module.css'

const ReverseDifferentiatorPanel2 = (props) => {
  return (
    <Container
      tag="section"
      id
      role="complementary"
      aria-label="Reverse Panel"
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

ReverseDifferentiatorPanel2.defaultProps = {
  fields: {
    text: 'Giving back to the community',
    value:
      '<div data-kajoo-element-type="rich-text">\n<span>Through Amica Helping Hands, our registered Canadian charity, residents have the opportunity to volunteer with us in support of seniors in need.</span>\n</div>',
    name: '/main/phCTA-{FE3BFA30-90A8-4083-B03E-A0997AC461F5}-0',
    src: 'https://amica.kajoo.ca/-/media/amica/differentiator_panel_desktop-760x546_helphands_new.jpg?h=546&la=en&w=760&hash=A35A07140ACE7DD6339C32015308EF32390C19E0',
    alt: '',
  },
  rootClassName: '',
}

ReverseDifferentiatorPanel2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ReverseDifferentiatorPanel2
