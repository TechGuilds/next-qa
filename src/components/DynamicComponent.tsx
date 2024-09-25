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
      className={` ${styles['container']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container className={styles['container1']}>
        {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
          <Text
            text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
            key={index}
          />
        ))}
      </Container>
      <Text text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late." />
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
