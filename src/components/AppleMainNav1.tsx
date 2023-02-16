/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import AppleNavMobile from '../kajoo-components/AppleNavMobile'
import AppleNav from '../kajoo-components/AppleNav'
import styles from './AppleMainNav1.module.css'

const AppleMainNav1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <AppleNavMobile rootClassName="root-class-name" />
        <AppleNav rootClassName="root-class-name" />
      </Container>
    </Container>
  )
}

AppleMainNav1.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppleMainNav1.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppleMainNav1
