/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './StaticTexts.module.css'

const StaticTexts = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link
        href="www.example.com"
        text="fdfdf"
        className={` ${styles['link']} ${styles['link-link-style-2']} `}
      />
      <Link
        href={props.fields.href4}
        className={` ${styles['link1']} ${styles['link-default']} `}
      />
    </Container>
  )
}

StaticTexts.defaultProps = {
  rootClassName: '',
  fields: {},
}

StaticTexts.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default StaticTexts
