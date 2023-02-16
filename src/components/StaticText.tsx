/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './StaticText.module.css'

const StaticText = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link
        href="www.example.com"
        text="fdfdf"
        className={` ${styles['link']} ${styles['link-link-style-2']} `}
      />
    </Container>
  )
}

StaticText.defaultProps = {
  rootClassName: '',
  fields: {},
}

StaticText.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default StaticText
