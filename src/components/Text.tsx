/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Text.module.css'

const AppText = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <RichText
        value={props.fields.value}
        className={` ${styles['richtext']} ${styles['richtext-default']} `}
      />
    </Container>
  )
}

AppText.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppText.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppText
