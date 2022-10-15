/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './StaticTextsss.module.css'

const StaticTextsss = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link
        href="#wwjlk"
        text={props.fields.text8}
        className={` ${styles['link']} ${styles['link-default']} `}
      />
    </Container>
  )
}

StaticTextsss.defaultProps = {
  rootClassName: '',
  fields: {},
}

StaticTextsss.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default StaticTextsss
