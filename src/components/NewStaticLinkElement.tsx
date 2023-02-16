/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewStaticLinkElement.module.css'

const NewStaticLinkElement = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link
        href="www.staticLink.com"
        text="StaticLinkText"
        className={` ${styles['link']} ${styles['link-link-style-2']} `}
      />
    </Container>
  )
}

NewStaticLinkElement.defaultProps = {
  rootClassName: '',
  fields: {},
}

NewStaticLinkElement.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default NewStaticLinkElement
