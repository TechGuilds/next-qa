/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './YusufTestLink.module.css'

const YusufTestLink = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link
        href={props.fields.href}
        className={` ${styles['link']} ${styles['link-default']} `}
      />
    </Container>
  )
}

YusufTestLink.defaultProps = {
  rootClassName: '',
  fields: {},
}

YusufTestLink.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default YusufTestLink
