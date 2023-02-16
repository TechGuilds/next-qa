/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewStaticLinkElementText.module.css'

const NewStaticLinkElementText = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link
        text={props.fields.text1}
        href="www.example.com"
        className={` ${styles['link']} ${styles['link-link-style-2']} `}
      />
    </Container>
  )
}

NewStaticLinkElementText.defaultProps = {
  rootClassName: '',
  fields: {},
}

NewStaticLinkElementText.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default NewStaticLinkElementText
