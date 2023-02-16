/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BackgroundTestKajooNur.module.css'

const BackgroundTestKajooNur = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      />
      <Container
        className={` ${styles['container1']} ${styles['container-default']} `}
      >
        <Text text={props.fields.text1} tag="span" className={styles['text']} />
      </Container>
    </Container>
  )
}

BackgroundTestKajooNur.defaultProps = {
  rootClassName: '',
  fields: {},
}

BackgroundTestKajooNur.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default BackgroundTestKajooNur
