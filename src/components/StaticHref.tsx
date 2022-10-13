/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './StaticHref.module.css'

const StaticHref = (props) => {
  return (
    <Container className={styles['root']}>
      <Button link={props.fields.link} className={styles['button-default']} />
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
