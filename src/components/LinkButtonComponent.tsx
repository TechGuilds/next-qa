/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './LinkButtonComponent.module.css'

const LinkButtonComponent = (props) => {
  return (
    <Container className={styles['root']}>
      <Container className={styles['container']}>
        <Link
          href={props.fields.href}
          className={` ${styles['link']} ${styles['link-default']} `}
        />
        <Button
          text={props.fields.text}
          link={props.fields.link}
          className={` ${styles['button']} ${styles['button-default']} `}
        />
      </Container>
    </Container>
  )
}

LinkButtonComponent.defaultProps = {
  fields: {},
}

LinkButtonComponent.propTypes = {
  fields: PropTypes.object,
}

export default LinkButtonComponent
