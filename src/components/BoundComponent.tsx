// @ts-nocheck
/* eslint-disable */
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BoundComponent.module.css'

const BoundComponent = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <Text
        text={props.fields.text}
        tag="h1"
        className={'header-defaultnfngf'}
      />
    </Container>
  )
}

BoundComponent.defaultProps = {
  fields: {
    text: 'Heading',
  },
  rootClassName: '',
  rendering: {},
}

BoundComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(BoundComponent)
