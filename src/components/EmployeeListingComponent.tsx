/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './EmployeeListingComponent.module.css'

const QaTesting = (props) => {
  return (
    <Container
      className={` ${styles['qa-testing']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container
        className={` ${styles['row-container']} ${'container-default'} `}
      >
        <Container
          className={` ${styles['row-container1']} ${'container-default'} `}
        >
          <Text
            text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
            className={` ${'paragraph-default'} ${styles['text']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

QaTesting.defaultProps = {
  fields: {
    Heading:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    Employees: [
      {
        fields: {
          'Product Name':
            'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
          Description:
            '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
        },
      },
      {
        fields: {
          'Product Name':
            'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
          Description:
            '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
        },
      },
      {
        fields: {
          'Product Name':
            'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
          Description:
            '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
        },
      },
    ],
  },
  rootClassName: '',
  rendering: {},
}

QaTesting.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(QaTesting)
