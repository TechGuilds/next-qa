/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './StaticTextTest2023.module.css'

const StaticTextTest2023 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          tag="span"
          className={styles['text']}
        />
      </Container>
      <Container
        className={` ${styles['container1']} ${styles['container-default']} `}
      >
        <Text text="Heading" tag="h1" className={styles['text1']} />
      </Container>
    </Container>
  )
}

StaticTextTest2023.defaultProps = {
  rootClassName: '',
  fields: {},
}

StaticTextTest2023.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default StaticTextTest2023
