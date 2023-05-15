/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './FigmaCompRealTime.module.css'

const FigmaCompRealTime = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Text text={props.text} className={styles['text']} />
          <Container className={styles['container2']}>
            <Image
              src={props.src}
              alt={props.alt}
              className={styles['image']}
            />
          </Container>
        </Container>
        <Container className={styles['container3']}>
          <Container className={styles['container4']}>
            <Text text={props.text1} className={styles['text01']} />
            <Container className={styles['container5']}>
              <Text text={props.text2} className={styles['text02']} />
              <Text text={props.text3} className={styles['text03']} />
              <Text text={props.text4} className={styles['text04']} />
              <Text text={props.text5} className={styles['text05']} />
              <Text text={props.text6} className={styles['text06']} />
            </Container>
            <Container className={styles['container6']}>
              <Text text={props.text7} className={styles['text07']} />
              <Text text={props.text8} className={styles['text08']} />
              <Text text={props.text9} className={styles['text09']} />
              <Text text={props.text10} className={styles['text10']} />
              <Text text={props.text11} className={styles['text11']} />
            </Container>
          </Container>
        </Container>
        <Image alt={props.alt1} src={props.src1} className={styles['image1']} />
      </Container>
    </Container>
  )
}

FigmaCompRealTime.defaultProps = {
  rootClassName: '',
  text: 'All Articles',
  src: 'https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/1WWD3nGi4iO8zpABbu9hS.svg',
  alt: 'GroupI15766632224587',
  text1: 'All Articles',
  text2: 'Learn More About',
  text3: 'Funerals',
  text4: 'Cremation',
  text5: 'Cemetery',
  text6: 'Planning Ahead',
  text7: 'Helpful Tips',
  text8: 'How To’s & Guides',
  text9: 'Advice & Etiquette',
  text10: 'Celebration of Life',
  text11: 'Grief',
  alt1: 'Line11157666338',
  src1: 'https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/r0JUnHD-6WC_og_dTNn61.svg',
}

FigmaCompRealTime.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  alt1: PropTypes.string,
  src1: PropTypes.string,
}

export default FigmaCompRealTime
