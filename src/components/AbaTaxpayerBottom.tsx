/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AbaTaxpayerBottom.module.css'

const AbaTaxpayerBottom = (props) => {
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
            className={styles['text']}
          />
          <Link
            href={props.fields.href}
            className={` ${styles['link']} ${styles['link-cta-link']} `}
          />
        </Container>
        <Container
          className={` ${styles['container2']} ${styles['container-default']} `}
        >
          <Text
            text={props.fields.text2}
            tag="span"
            className={styles['text1']}
          />
          <Link
            href={props.fields.href1}
            className={` ${styles['link1']} ${styles['link-cta-link']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

AbaTaxpayerBottom.defaultProps = {
  rootClassName: '',
  fields: {},
}

AbaTaxpayerBottom.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AbaTaxpayerBottom
