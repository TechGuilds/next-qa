/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Ddd.module.css'

const Ddd = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.fields.text} tag="h1" className={'header-default'} />
    </Container>
  )
}

Ddd.defaultProps = {
  fields: {
    text: 'Heading',
  },
  rootClassName: '',
}

Ddd.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Ddd
