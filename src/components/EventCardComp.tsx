/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './EventCardComp.module.css'

const AppComponent = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text text={props.fields.Header} className={styles['text']} />
            <Text text={props.fields.Desc} className={styles['text1']} />
            <Text
              text={props.fields.time}
              tag="span"
              className={styles['text2']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppComponent
