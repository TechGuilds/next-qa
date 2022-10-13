/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BgImageTest.module.css'

const BgImageTest = (props) => {
  return (
    <Container className={styles['root']}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text
              text={props.fields.text}
              tag="h1"
              className={` ${styles['text']} ${styles['header-default']} `}
            />
          </Container>
          <Container
            className={` ${styles['container3']} ${styles['container-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

BgImageTest.defaultProps = {
  fields: {},
}

BgImageTest.propTypes = {
  fields: PropTypes.object,
}

export default BgImageTest
