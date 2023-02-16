/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RepeaterLocalComponenttes.module.css'

const RepeaterLocalComponenttes = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container2']}>
              <Container
                className={` ${styles['container3']} ${styles['a41d4370946d97c938c465']} `}
              >
                <Text
                  text={item.fields.text2}
                  tag="span"
                  className={styles['text']}
                />
              </Container>
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

RepeaterLocalComponenttes.defaultProps = {
  rootClassName: '',
  fields: {},
}

RepeaterLocalComponenttes.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RepeaterLocalComponenttes
