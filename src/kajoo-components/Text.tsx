/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Text.module.css'

const AppText = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text
        text={props.text1}
        className={` ${styles['text']} ${styles['paragraph-default']} `}
      />
    </Container>
  )
}

AppText.defaultProps = {
  rootClassName: '',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
}

AppText.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default AppText
