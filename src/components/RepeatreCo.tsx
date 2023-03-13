/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RepeatreCo.module.css'

const RepeatreCo = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Text
            text={props.fields.text}
            tag="span"
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Link
            href={props.fields.href}
            className={` ${styles['link']} ${styles['link-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

RepeatreCo.defaultProps = {
  rootClassName: '',
  fields: {},
}

RepeatreCo.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RepeatreCo
