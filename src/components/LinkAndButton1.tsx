/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './LinkAndButton1.module.css'

const LinkAndButton1 = (props) => {
  return (
    <Container className={styles['root']}>
      <Link
        href={props.fields.href}
        className={` ${styles['link']} ${styles['link-default']} `}
      />
      <Button
        text={props.fields.text1}
        link={props.fields.link}
        className={` ${styles['button']} ${styles['button-default']} `}
      />
    </Container>
  )
}

LinkAndButton1.defaultProps = {
  fields: {},
}

LinkAndButton1.propTypes = {
  fields: PropTypes.object,
}

export default LinkAndButton1
