/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './EventCardComp.module.css'

const AppComponent = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Text text={props.Header} className={styles['text']} />
        </Container>
        <Container className={styles['container2']}>
          <Text text={props.Desc} className={styles['text1']} />
        </Container>
        <Button className={styles['button']}>
          <Text text={props.time} className={styles['text2']} />
        </Button>
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  Header: 'Thank you!',
  Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  time: 'Call to action',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  Header: PropTypes.string,
  Desc: PropTypes.string,
  time: PropTypes.string,
}

export default AppComponent
