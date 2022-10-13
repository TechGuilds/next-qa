/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './StaticText.module.css'

const StaticText = (props) => {
  console.log("props",props)
  return (
    <Container className={styles['root']}>
      <Link
        href={props.fields.href}
        className={` ${styles['link']} ${styles['link-link-style-2']} `}
      />
    </Container>
  )
}

StaticText.defaultProps = {
  fields: {},
}

StaticText.propTypes = {
  fields: PropTypes.object,
}

export default StaticText
