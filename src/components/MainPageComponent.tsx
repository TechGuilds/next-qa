/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import Header from '../kajoo-components/Header'
import styles from './MainPageComponent.module.css'

const MainPageComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Header rootClassName="root-class-name" />
    </Container>
  )
}

MainPageComponent.defaultProps = {
  rootClassName: '',
  fields: {},
}

MainPageComponent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default MainPageComponent
