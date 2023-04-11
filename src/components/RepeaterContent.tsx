/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RepeaterContent.module.css'

const RepeaterContent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index} className={styles['container1']}>
            <Text
              text={item.fields.text}
              tag="span"
              className={styles['paragraph-default']}
            />
          </Container>
        ))}
      </Container>
    </Container>
  )
}

RepeaterContent.defaultProps = {
  rootClassName: '',
  fields: {},
}

RepeaterContent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RepeaterContent
