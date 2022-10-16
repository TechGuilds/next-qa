/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './MohTest.module.css'

const MohTest = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link
        href="#Mohammed"
        text={props.fields.text}
        className={` ${styles['link']} ${styles['link-link-style-2']} `}
      />
    </Container>
  )
}

MohTest.defaultProps = {
  rootClassName: '',
  fields: {},
}

MohTest.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default MohTest
