/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Link.module.css'

const Link = (props) => {
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

Link.defaultProps = {
  fields: {},
}

Link.propTypes = {
  fields: PropTypes.object,
}

export default Link
