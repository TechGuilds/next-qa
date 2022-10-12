/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TestComponentLinkBtn.module.css'

const TestComponentLinkBtn = (props) => {
  return (
    <Container className={styles['root']}>
      <Link
        href={props.fields.href}
        className={` ${styles['link']} ${styles['link-default']} `}
      />
      <Button
        text={props.fields.text1}
        link={props.fields.link}
        className={styles['button-default']}
      />
    </Container>
  )
}

TestComponentLinkBtn.defaultProps = {
  fields: {},
}

TestComponentLinkBtn.propTypes = {
  fields: PropTypes.object,
}

export default TestComponentLinkBtn
