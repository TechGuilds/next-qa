/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AiSaaSHeroBanner.module.css'

const AiSaaSHeroBanner = (props) => {
  return (
    <Container
      className={` ${styles['ai-saa-s-hero-banner-main']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Container className={styles['ai-saa-s-hero-banner-container1']}>
        <Text
          text="Revolutionize Your Workflow with AI"
          tag="text"
          className={styles['ai-saa-s-hero-banner-text1']}
        />
        <Text
          text="Our AI tools automate and optimize your business processes."
          tag="text"
          className={styles['ai-saa-s-hero-banner-text2']}
        />
        <Container
          tag="button"
          className={styles['ai-saa-s-hero-banner-container2']}
        >
          <Text text="Get Started" tag="text" />
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

export default withDatasourceCheck()(AiSaaSHeroBanner)
