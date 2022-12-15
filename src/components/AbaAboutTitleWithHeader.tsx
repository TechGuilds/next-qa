/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import AbaHeader from './AbaHeader'
import Title from '../kajoo-components/Title'
import styles from './AbaAboutTitleWithHeader.module.css'

const AbaAboutTitleWithHeader = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <AbaHeader rootClassName="root-class-name3" />
        <Title rootClassName="root-class-name" />
      </Container>
    </Container>
  )
}

AbaAboutTitleWithHeader.defaultProps = {
  rootClassName: '',
  fields: {},
}

AbaAboutTitleWithHeader.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AbaAboutTitleWithHeader
