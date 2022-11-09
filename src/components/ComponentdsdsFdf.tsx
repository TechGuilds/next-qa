/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ComponentdsdsFdf.module.css'

const ComponentdsdsFdf = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <RichText value={props.fields.value} className={styles['richtext']} />
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      />
    </Container>
  )
}

ComponentdsdsFdf.defaultProps = {
  rootClassName: '',
  fields: {},
}

ComponentdsdsFdf.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ComponentdsdsFdf
