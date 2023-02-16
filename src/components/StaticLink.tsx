/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './StaticLink.module.css'

const StaticLink = (props) => {
  return (
    <Container className={styles['root']}>
      <Link
        href="staticLink"
        text="LinkStatic"
        className={` ${styles['link']} ${styles['link-link-style-2']} `}
      />
    </Container>
  )
}

StaticLink.defaultProps = {
  fields: {},
}

StaticLink.propTypes = {
  fields: PropTypes.object,
}

export default StaticLink
