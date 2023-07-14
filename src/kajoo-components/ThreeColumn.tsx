/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ThreeColumn.module.css'

const ThreeColumn = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container bgImage className={styles['container']}>
        <Container bgImage className={styles['container1']}>
          <Text
            text="HEADER"
            tag="span"
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container bgImage className={styles['container2']}>
          <Text
            text="HEADER"
            tag="span"
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container bgImage className={styles['container3']}>
          <Text
            text="HEADER"
            tag="span"
            className={` ${styles['text2']} ${styles['paragraph-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

ThreeColumn.defaultProps = {
  fields: {},
  rootClassName: '',
}

ThreeColumn.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ThreeColumn
