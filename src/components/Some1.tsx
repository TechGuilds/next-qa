/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import NewComponent from '../kajoo-components/NewComponent'
import styles from './Some1.module.css'

const Some1 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container bgImage={props.fields.bgImage} className={styles['container']}>
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={styles['image']}
        />
        <NewComponent rootClassName="root-class-name1" />
      </Container>
    </Container>
  )
}

Some1.defaultProps = {
  rootClassName: '',
  fields: {},
}

Some1.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Some1
