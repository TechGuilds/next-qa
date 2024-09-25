/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Test1Q23.module.css'

const Test1Q23 = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container className={` ${styles['container1']} ${'container-default'} `}>
        <Text text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late." />
      </Container>
    </Container>
  )
}

Test1Q23.defaultProps = {
  fields: {},
  rendering: {},
  rootClassName: '',
}

Test1Q23.propTypes = {
  fields: PropTypes.object,
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default withDatasourceCheck()(Test1Q23)
