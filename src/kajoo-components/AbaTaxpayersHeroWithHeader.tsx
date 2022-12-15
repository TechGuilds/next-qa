/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import AbaHeader from '../components/AbaHeader'
import AbaHeroTaxpayers from '../components/AbaHeroTaxpayers'
import styles from './AbaTaxpayersHeroWithHeader.module.css'

const AbaTaxpayersHeroWithHeader = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <AbaHeader rootClassName="root-class-name2" />
        <AbaHeroTaxpayers rootClassName="root-class-name" />
      </Container>
    </Container>
  )
}

AbaTaxpayersHeroWithHeader.defaultProps = {
  rootClassName: '',
}

AbaTaxpayersHeroWithHeader.propTypes = {
  rootClassName: PropTypes.string,
}

export default AbaTaxpayersHeroWithHeader
