/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import ProductRecommendation from '../kajoo-components/ProductRecommendation'
import styles from './ProDcomponenttest.module.css'

const ProDcomponenttest = (props) => {
  return (
    <Container
      className={` ${styles['component']} ${styles[props.rootClassName]} `}
    >
      <ProductRecommendation
        rootClassName="root-class-name"
        className={styles['component1']}
      />
    </Container>
  )
}

ProDcomponenttest.defaultProps = {
  rootClassName: '',
  fields: {},
}

ProDcomponenttest.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ProDcomponenttest
