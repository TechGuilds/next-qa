/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ComponentLink.module.css'

const ComponentLink = (props) => {
  return (
    <Container className={styles['root']}>
      <Link
        href={props.fields.href}
        text={props.fields.text}
        className={` ${styles['link']} ${styles['link-default']} `}
      />
    </Container>
  )
}

ComponentLink.defaultProps = {
  fields: {},
}

ComponentLink.propTypes = {
  fields: PropTypes.object,
}

export default ComponentLink
