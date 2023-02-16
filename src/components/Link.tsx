/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Link.module.css'

const AppLink = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text
        text={props.fields.text}
        tag="span"
        className={` ${styles['text-apple-blue-link']} ${styles['text']} `}
      />
    </Container>
  )
}

AppLink.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppLink.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppLink
