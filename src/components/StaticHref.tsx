/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './StaticHref.module.css'

const StaticHref = (props) => {
  return (
    <Container className={styles['root']}>
      <Link
        href
        text={props.fields.text}
        className={` ${styles['link']} ${styles['link-link-style']} `}
      />
    </Container>
  )
}

StaticHref.defaultProps = {
  fields: {},
}

StaticHref.propTypes = {
  fields: PropTypes.object,
}

export default StaticHref
