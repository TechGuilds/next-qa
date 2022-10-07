/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AmicaBackToLife.module.css'

const AmicaBackToLife = (props) => {
  return (
    <Container className={styles[props.className]}>
      <Container bgImage className={styles['container']}>
        <Container bgImage={props.bgImage} className={styles['container1']}>
          <Text text={props.text} className={styles['text']} />
          <Container bgImage={props.bgImage1} className={styles['container2']}>
            <RichText value={props.value} className={styles['richtext']} />
          </Container>
          <Container bgImage={props.bgImage2} className={styles['container3']}>
            <Container
              bgImage={props.bgImage3}
              className={styles['container4']}
            >
              <Text text={props.text1} className={styles['text1']} />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AmicaBackToLife.defaultProps = {
  className: '',
  bgImage: '',
  text: 'WELCOME BACK, LIFE.',
  bgImage1: '',
  value:
    '<span style="color: rgba(101, 101, 103, 1); \nwidth: 800px; \nheight: auto; \nfont-weight: 400; \nfont-family: Open Sans; \ntext-align: center; \nline-height: 28.799999237060547px; \nfont-size: 16px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span style="color: rgba(101, 101, 103, 1); \nwidth: 800px; \nheight: auto; \nfont-weight: 400; \ntext-align: center; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">Thanks to the conscientious dedication of our residents and team members, the return to normalcy has happened at a faster pace inside our residences than outside. Life at Amica is once again its wonderful, normal self. Want to see for yourself? </span><span style="color: rgba(88, 122, 141, 1); \nwidth: 800px; \nheight: auto; \nfont-weight: 700; \ntext-align: center; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">Find a residence near you</span><span style="color: rgba(101, 101, 103, 1); \nwidth: 800px; \nheight: auto; \nfont-weight: 400; \ntext-align: center; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"> to give us a call, or schedule private tour.</span></span>',
  bgImage2: '',
  bgImage3: '',
  text1: 'BOOK A TOUR',
}

AmicaBackToLife.propTypes = {
  className: PropTypes.string,
  bgImage: PropTypes.string,
  text: PropTypes.string,
  bgImage1: PropTypes.string,
  value: PropTypes.string,
  bgImage2: PropTypes.string,
  bgImage3: PropTypes.string,
  text1: PropTypes.string,
}

export default AmicaBackToLife
