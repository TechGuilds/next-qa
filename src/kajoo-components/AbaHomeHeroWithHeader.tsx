/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import AbaHeader from '../components/AbaHeader'
import AbaHero from '../components/AbaHero'
import styles from './AbaHomeHeroWithHeader.module.css'

const AbaHomeHeroWithHeader = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <AbaHeader rootClassName="root-class-name1" />
        <AbaHero rootClassName="root-class-name1" />
      </Container>
    </Container>
  )
}

AbaHomeHeroWithHeader.defaultProps = {
  rootClassName: '',
}

AbaHomeHeroWithHeader.propTypes = {
  rootClassName: PropTypes.string,
}

export default AbaHomeHeroWithHeader
