/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponentAlex1.module.css'

const DynamicComponentAlex1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <RichText
          value={props.fields.value2}
          className={styles['richtext-default']}
        />
      </Container>
    </Container>
  )
}

DynamicComponentAlex1.defaultProps = {
  fields: {
    value:
      '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
    value1:
      '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
    value2:
      '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Alex Content</p>',
  },
  rootClassName: '',
}

DynamicComponentAlex1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponentAlex1
