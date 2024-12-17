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
      className={` ${styles['dynamic-component-container']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Text text={props.fields.Text} className={'text-default'} />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {
    Text: 'Lorem Ipsumuyt',
  },
}

DynamicComponent.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(DynamicComponent)
