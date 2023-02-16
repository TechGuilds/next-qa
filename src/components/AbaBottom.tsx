/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AbaBottom.module.css'

const AbaBottom = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text text={props.fields.text6} className={styles['text']} />
          </Container>
        </Container>
        <Container
          className={` ${styles['container3']} ${styles['container-default']} `}
        >
          <Link href={props.fields.href} className={styles['link-cta-link']} />
        </Container>
      </Container>
    </Container>
  )
}

AbaBottom.defaultProps = {
  rootClassName: '',
  fields: {},
}

AbaBottom.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AbaBottom
