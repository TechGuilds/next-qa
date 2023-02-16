/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Button, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './LinkAndButton13.module.css'

const LinkAndButton13 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Button
          text={props.fields.text}
          className={` ${styles['button']} ${styles['button-default']} `}
        />
        <Link
          href={props.fields.href}
          className={` ${styles['link']} ${styles['link-default']} `}
        />
      </Container>
    </Container>
  )
}

LinkAndButton13.defaultProps = {
  rootClassName: '',
  fields: {},
}

LinkAndButton13.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default LinkAndButton13
