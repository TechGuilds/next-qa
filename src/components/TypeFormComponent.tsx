/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, TypeForm } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TypeFormComponent.module.css'

const TypeFormComponent = (props) => {
  return (
    <Container className={styles['root']}>
      <TypeForm
        formId="Jgy4zwGT"
        mode={props.fields.mode}
        buttonText={props.fields.buttonText}
        className={styles['type-form']}
      />
    </Container>
  )
}

TypeFormComponent.defaultProps = {
  fields: {},
}

TypeFormComponent.propTypes = {
  fields: PropTypes.object,
}

export default TypeFormComponent
