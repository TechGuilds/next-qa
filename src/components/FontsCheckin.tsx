/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './FontsCheckin.module.css'

const FontsCheckin = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text
        text={props.fields.text}
        tag="span"
        className={styles['paragraph-default']}
      />
    </Container>
  )
}

FontsCheckin.defaultProps = {
  fields: {
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  },
  rootClassName: '',
}

FontsCheckin.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default FontsCheckin
