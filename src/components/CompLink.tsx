/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './CompLink.module.css'

const CompLink = (props) => {
  return (
    <Container className={styles['root']}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Link
          href={props.fields.href}
          className={` ${styles['link']} ${styles['link-link-style-2']} `}
        />
      </Container>
    </Container>
  )
}

CompLink.defaultProps = {
  fields: {},
}

CompLink.propTypes = {
  fields: PropTypes.object,
}

export default CompLink
