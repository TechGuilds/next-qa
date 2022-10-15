/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Linkk.module.css'

const Linkk = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link
        href={props.fields.href}
        className={` ${styles['link']} ${styles['link-link-style']} `}
      />
    </Container>
  )
}

Linkk.defaultProps = {
  rootClassName: '',
  fields: {},
}

Linkk.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Linkk
