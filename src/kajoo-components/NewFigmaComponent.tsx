/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Image src={props.src} alt={props.alt} className={styles['image']} />
        </Container>
        <Container className={styles['container2']}>
          <Text text={props.text} className={styles['text']} />
          <Text text={props.text1} className={styles['text1']} />
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  rootClassName: '',
  src: 'https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/-Hp-uRqF-bRDcY8eGmY3-.png',
  alt: 'ScreenShot20210805at12012I875251974233458',
  text: 'Funerals',
  text1:
    'Special Floral Tribute: Arbor Plants Over 20,000 Flowers to Remember Lives Lost to COVID-19',
}

NewFigmaComponent.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NewFigmaComponent
