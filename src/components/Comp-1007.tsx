/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Comp-1007.module.css'

const ComponentCms = (props) => {
  return (
    <Container className={styles['root']}>
      <Text text={props.text} tag="span" className={styles['text']} />
    </Container>
  )
}

ComponentCms.defaultProps = {
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
}

ComponentCms.propTypes = {
  text: PropTypes.string,
}

export default ComponentCms
