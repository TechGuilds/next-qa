/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} ${props.params?.Styles} `}
    >
      <Container
        className={` ${styles['row-container']} ${'container-default'} `}
      >
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          className={'text-default'}
        />
      </Container>
      <Container
        className={` ${styles['row-container1']} ${'container-default'} `}
      >
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          className={'text-default'}
        />
      </Container>
      <Container
        className={` ${styles['row-container2']} ${'container-default'} `}
      >
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          className={'text-default'}
        />
      </Container>
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(DynamicComponent)
