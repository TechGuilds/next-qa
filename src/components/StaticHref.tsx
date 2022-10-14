/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './StaticHref.module.css'

const StaticHref = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Button link={props.fields.link} className={styles['button-default']} />
    </Container>
  )
}

StaticHref.defaultProps = {
  rootClassName: '',
  fields: {},
}

StaticHref.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default StaticHref
