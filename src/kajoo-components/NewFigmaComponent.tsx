/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Link,
  RichText,
  Image,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text text={props.text} className={styles['text']} />
            <Container className={styles['container3']}>
              <Text text={props.text1} className={styles['text1']} />
            </Container>
            <Link
              url="https://www.amica.ca/covid-19-responsive-measures"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link']}
            >
              <RichText value={props.value} className={styles['richtext']} />
            </Link>
          </Container>
          <Image src={props.src} alt={props.alt} className={styles['image']} />
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  rootClassName: '',
  text: 'Mandatory vaccinations for all team members',
  text1:
    'Learn how Amica is protecting its residents and team members from COVID-19',
  value:
    '<span style="background-color: rgb(255, 255, 255); \nborder-bottom-color: rgb(88, 122, 141); \nborder-bottom-style: solid; \nborder-bottom-width: 1px; \nborder-left-color: rgb(88, 122, 141); \nborder-left-style: solid; \nborder-left-width: 1px; \nborder-right-color: rgb(88, 122, 141); \nborder-right-style: solid; \nborder-right-width: 1px; \nborder-top-color: rgb(88, 122, 141); \nborder-top-style: solid; \nborder-top-width: 1px; \nborder-width: 1px; \nbox-sizing: border-box; \ncolor: rgb(88, 122, 141); \ndisplay: inline-block; \nfont-family: "Open Sans", sans-serif; \nfont-size: 14px; \nheight: 47px; \nline-height: 21px; \npadding-bottom: 12px; \npadding-left: 12px; \npadding-right: 12px; \npadding-top: 12px; \ntext-align: center; \ntext-decoration-color: transparent; \ntext-decoration-line: none; \ntext-transform: uppercase; \nvertical-align: middle; \nwidth: 250px; \n"><span /><span >Learn More</span><span /></span>',
  src: 'https://cdn.amica.ca/dfsmedia/fb6694c4ab20435db8f4da541e25991f/7128-50072/amica-mandatory-vaccine-policy-panel',
  alt: "Close-up shot of proud Asian woman with protective face mask giving a thumbs up after receiving a COVID-19 vaccine at medical clinic. She's smiling behind her mask after a successful vaccination",
}

NewFigmaComponent.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  value: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default NewFigmaComponent
