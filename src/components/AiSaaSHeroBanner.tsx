/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AiSaaSHeroBanner.module.css'

const AiSaaSHeroBanner = (props) => {
  return (
    <Container
      className={` ${styles['ai-saa-s-hero-banner-main']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Container className={styles['ai-saa-s-hero-banner-container1']}>
        <Container className={styles['ai-saa-s-hero-banner-container2']}>
          <Text
            text="Beautiful Poppies"
            tag="text"
            className={styles['ai-saa-s-hero-banner-text1']}
          />
        </Container>
        <Container className={styles['ai-saa-s-hero-banner-container3']}>
          <Image
            src="https://picsum.photos/800/400"
            alt="Orange poppy flower close-up"
            className={styles['ai-saa-s-hero-banner-image']}
          />
          <Text
            text="Discover the stunning beauty of poppies, nature's vibrant messengers of spring. Their delicate petals and bold colors create an unforgettable display in any garden."
            tag="text"
            className={styles['ai-saa-s-hero-banner-text2']}
          />
          <Container className={styles['ai-saa-s-hero-banner-container4']}>
            <Container
              tag="button"
              className={styles['ai-saa-s-hero-banner-container5']}
            >
              <Text text="Learn More" tag="text" />
            </Container>
            <Container
              tag="button"
              className={styles['ai-saa-s-hero-banner-container6']}
            >
              <Text text="View Gallery" tag="text" />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AiSaaSHeroBanner.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

AiSaaSHeroBanner.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AiSaaSHeroBanner
