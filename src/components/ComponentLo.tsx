/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ComponentLo.module.css'

const ComponentLo = (props) => {
  return (
    <Container className={styles['root']}>
      <Link
        href={props.fields.href}
        className={` ${styles['link']} ${styles['link-link-350']} `}
      />
    </Container>
  )
}

ComponentLo.defaultProps = {
  fields: {},
}

ComponentLo.propTypes = {
  fields: PropTypes.object,
}

export default ComponentLo
