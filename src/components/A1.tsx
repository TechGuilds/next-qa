/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './A1.module.css'

const A1 = (props) => {
  return (
    <Container className={` ${styles['a-1']} ${styles[props.rootClassName]} ${props.params?.styles} `}>
      <Text text={props.fields.text} tag="h1" className={'text-text'} />
    </Container>
  )
}

A1.defaultProps = {
  fields: {
    text: 'Heading',
  },
  rootClassName: '',
  rendering: {},
}

A1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(A1)
