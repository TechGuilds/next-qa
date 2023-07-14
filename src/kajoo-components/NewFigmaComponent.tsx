/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text
              tag="span"
              text="How we can help"
              className={styles['text']}
            />
            <Container className={styles['container3']}>
              <Text
                tag="span"
                text="Planning Ahead"
                className={styles['text1']}
              />
              <Text
                tag="span"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                className={styles['text2']}
              />
            </Container>
          </Container>
          <Container className={styles['container4']}>
            <Container className={styles['container5']}>
              <Text tag="span" text="Learn More" className={styles['text3']} />
            </Container>
            <Container className={styles['container6']}>
              <Text
                tag="span"
                text="Start Planning"
                className={styles['text4']}
              />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  fields: {},
  rootClassName: '',
}

NewFigmaComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent
