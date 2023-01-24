/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Repeat3Component.module.css'

const Repeat3Component = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container2']}>
              <Text text={item.text} tag="span" className={styles['text']} />
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

Repeat3Component.defaultProps = {
  rootClassName: '',
  fields: {},
}

Repeat3Component.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Repeat3Component
