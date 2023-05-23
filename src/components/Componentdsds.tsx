/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Componentdsds.module.css'

const Componentdsds = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      />
    </Container>
  )
}

Componentdsds.defaultProps = {
  rootClassName: '',
  fields: {},
}

Componentdsds.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Componentdsds
