/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ComponentYusuf.module.css'

const ComponentYusuf = (props) => {
  return (
    <Container
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    />
  )
}

ComponentYusuf.defaultProps = {
  rootClassName: '',
  fields: {},
}

ComponentYusuf.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ComponentYusuf
