/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ComponentTest.module.css'

const ComponentTest = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <RichText value={props.fields.value} className={styles['richtext']} />
      </Container>
    </Container>
  )
}

ComponentTest.defaultProps = {
  rootClassName: '',
  fields: {},
}

ComponentTest.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ComponentTest
