/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

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
          <Text tag="h2" text={props.fields.text} className={styles['text']} />
          <Container tag="div" className={styles['container2']}>
            <Container
              tag="div"
              data-kajoo-element-type="richtext"
              className={styles['container3']}
            >
              <Text tag="span" text={props.fields.text1} />
            </Container>
          </Container>
          <Placeholder className={styles['sitecore-placeholder']} />
        </Container>
        <Container tag="div" className={styles['container4']}>
          <Image
            tag="img"
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

ReverseDifferentiatorPanel.defaultProps = {
  fields: {
    text: 'Personalizing your care, prioritizing your wellness',
    text1:
      ' Care that is considerate, respectful and personalized to your wishes and schedule — that’s what you can expect from our highly trained professional wellness teams. We get to know your needs and routines to provide exceptional, experienced support based on your preferences in the privacy of your suite. And if your needs or preferences change, so will our care.',
    name: '/main/phCTA-{11C3536F-EFC0-4B1F-A0F1-116F2E11B4F3}-0',
    src: 'https://amica.kajoo.ca/-/media/amica/differentiator_panel_desktop-amica_dressing_cam2_0143.jpg?h=507&la=en&w=760&hash=16A696C3C375CA7B0D34FFA9439116756A477AD9',
    alt: 'Dressing',
  },
  rootClassName: '',
}

ReverseDifferentiatorPanel.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ReverseDifferentiatorPanel
