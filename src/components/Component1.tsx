/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text
        text={
          props.fields.components['tg-promo-banners'].response[1].images[0]
            ._metadata.uid
        }
        tag="span"
        className={` ${styles['text']} ${styles['paragraph-default']} `}
      />
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
