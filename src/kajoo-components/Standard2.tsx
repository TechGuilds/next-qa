/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Standard2.module.css'

const Standard2 = (props) => {
  return (
    <Container
      className={` ${styles['standard-2']} ${styles[props.rootClassName]} `}
    >
      <Text text={props.fields.text} className={'paragraph-default'} />
    </Container>
  )
}

Standard2.defaultProps = {
  fields: {
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  },
  rootClassName: '',
}

Standard2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Standard2
