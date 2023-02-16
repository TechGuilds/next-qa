/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import HandDrawn1 from '../kajoo-components/HandDrawn1'

const ProductRecommendation = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <HandDrawn1 rootClassName="root-class-name" />
    </Container>
  )
}

ProductRecommendation.defaultProps = {
  rootClassName: '',
  fields: {},
}

ProductRecommendation.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ProductRecommendation
