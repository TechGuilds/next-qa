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
          <Text text={props.text} className={styles['text']} />
        </Container>
        <Container className={styles['container2']}>
          <Text text={props.text1} className={styles['text1']} />
        </Container>
        <Button className={styles['button']}>
          <Text text={props.text2} className={styles['text2']} />
        </Button>
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  text: 'Thank you!',
  text1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  text2: 'Call to action',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default AppComponent
