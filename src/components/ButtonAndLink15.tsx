/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ButtonAndLink15.module.css'

const ButtonAndLink15 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Link
          href={props.fields.href}
          className={` ${styles['link']} ${styles['link-default']} `}
        />
        <Button
          text={props.fields.text1}
          className={` ${styles['button']} ${styles['button-default']} `}
        />
      </Container>
    </Container>
  )
}

ButtonAndLink15.defaultProps = {
  rootClassName: '',
  fields: {},
}

ButtonAndLink15.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ButtonAndLink15
