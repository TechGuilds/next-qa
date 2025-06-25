/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['dynamic-component-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Container
        className={` ${
          styles['dynamic-component-row-container']
        } ${'container-container'} `}
      >
        <Image
          src="https://images.unsplash.com/photo-1746822132410-0aa489a964f2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w1NjQwMjl8MHwxfGFsbHwzfHx8fHx8fHwxNzQ3MDY4NzgzfA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400"
          alt="image-asset"
          className={'image-image'}
        />
      </Container>
    </Container>
  )
}

DynamicComponent.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

DynamicComponent.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(DynamicComponent)
