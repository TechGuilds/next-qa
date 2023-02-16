/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Link1.module.css'

const Link1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link
        href={props.fields.href2}
        className={` ${styles['link']} ${styles['link-link-style']} `}
      />
    </Container>
  )
}

Link1.defaultProps = {
  rootClassName: '',
  fields: {},
}

Link1.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Link1
