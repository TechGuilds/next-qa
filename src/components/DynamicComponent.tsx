/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import AiSaaSHeroBanner from './AiSaaSHeroBanner'
import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['dynamic-component-container1']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Container className={styles['dynamic-component-container2']}>
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          className={` ${styles['dynamic-component-text']} ${'text-text'} `}
        />
      </Container>
      <AiSaaSHeroBanner rootClassName="ai-saa-s-hero-bannerroot-class-name" />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

DynamicComponent.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default DynamicComponent
