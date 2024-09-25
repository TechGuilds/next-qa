/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container
        className={` ${styles['container1']} ${'container-default'} `}
      />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {},
  rendering: {},
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default withDatasourceCheck()(DynamicComponent)
