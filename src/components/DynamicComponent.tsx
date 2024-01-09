/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
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

DynamicComponent.defaultProps = {
  fields: {
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
