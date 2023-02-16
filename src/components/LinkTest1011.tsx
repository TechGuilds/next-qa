/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './LinkTest1011.module.css'

const LinkTest1011 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Link
          href={props.fields.href}
          className={` ${styles['link']} ${styles['link-default']} `}
        />
        <Button text={props.fields.text} className={styles['button-default']} />
      </Container>
    </Container>
  )
}

LinkTest1011.defaultProps = {
  rootClassName: '',
  fields: {},
}

LinkTest1011.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default LinkTest1011
