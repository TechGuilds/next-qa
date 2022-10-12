/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './LinkComponent.module.css'

const LinkComponent = (props) => {
  return (
    <Container className={styles['root']}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Link
          href={props.fields.href}
          text={props.fields.text}
          className={` ${styles['link']} ${styles['link-default']} `}
        />
      </Container>
    </Container>
  )
}

LinkComponent.defaultProps = {
  fields: {},
}

LinkComponent.propTypes = {
  fields: PropTypes.object,
}

export default LinkComponent
