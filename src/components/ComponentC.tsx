/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ComponentC.module.css'

const ComponentC = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <RichText value={props.fields.value} className={styles['richtext']} />
    </Container>
  )
}

ComponentC.defaultProps = {
  rootClassName: '',
  fields: {},
}

ComponentC.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ComponentC
