/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Linksdd.module.css'

const Linksdd = (props) => {
  return (
    <Container className={styles['root']}>
      <Container
        bgImage
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Link
          href={props.fields.href}
          className={` ${styles['link']} ${styles['link-default']} `}
        />
      </Container>
    </Container>
  )
}

Linksdd.defaultProps = {
  fields: {},
}

Linksdd.propTypes = {
  fields: PropTypes.object,
}

export default Linksdd
