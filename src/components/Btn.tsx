/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Btn.module.css'

const Btn = (props) => {
  return (
    <Container className={styles['root']}>
      <Container
        bgImage
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Button
          text={props.fields.text}
          link={props.fields.link}
          className={styles['button-default']}
        />
      </Container>
    </Container>
  )
}

Btn.defaultProps = {
  fields: {},
}

Btn.propTypes = {
  fields: PropTypes.object,
}

export default Btn
