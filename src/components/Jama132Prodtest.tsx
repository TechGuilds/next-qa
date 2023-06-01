/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import HeroBanner from '../kajoo-components/HeroBanner'

const Jama132Prodtest = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <HeroBanner rootClassName="root-class-name" />
    </Container>
  )
}

Jama132Prodtest.defaultProps = {
  rootClassName: '',
  fields: {},
}

Jama132Prodtest.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Jama132Prodtest
