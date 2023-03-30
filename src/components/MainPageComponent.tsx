/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import Header from '../kajoo-components/Header'
import BannerErrors from '../kajoo-components/BannerErrors'
import ProductErrorComponent from '../kajoo-components/ProductErrorComponent'
import styles from './MainPageComponent.module.css'

const MainPageComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Header rootClassName="root-class-name" />
      <BannerErrors rootClassName="root-class-name" />
      <ProductErrorComponent rootClassName="root-class-name" />
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
