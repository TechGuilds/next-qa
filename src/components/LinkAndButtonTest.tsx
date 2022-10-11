/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Button, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './LinkAndButtonTest.module.css'

const LinkAndButtonTest = (props) => {
  return (
    <Container className={styles['root']}>
      <Button
        text={props.fields.text}
        link={props.fields.link}
        className={` ${styles['button']} ${styles['button-default']} `}
      />
      <Link
        href={props.fields.href}
        className={` ${styles['link']} ${styles['link-default']} `}
      />
    </Container>
  )
}

LinkAndButtonTest.defaultProps = {
  fields: {},
}

LinkAndButtonTest.propTypes = {
  fields: PropTypes.object,
}

export default LinkAndButtonTest
