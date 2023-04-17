/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <RichText value={props.fields.value} />
      </Container>
      <Container
        className={` ${styles['container1']} ${styles['container-default']} `}
      >
        <Text
          text={props.fields.text}
          tag="span"
          className={styles['paragraph-default']}
        />
      </Container>
    </Container>
  )
}

Component1.defaultProps = {
  rootClassName: '',
  fields: {},
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Component1
