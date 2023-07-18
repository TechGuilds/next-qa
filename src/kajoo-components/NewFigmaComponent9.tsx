/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent9.module.css'

const NewFigmaComponent9 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Image
        src="https://zenith-dev-101-single.azurewebsites.net/-/media/project/zenith-tenant/zenith-site/assets/interactive/2022/4-3_careers-hero-09-2022.png?h=1200&amp;iar=0&amp;w=1600&amp;hash=F77015E533B792545FADCDD30C5BAC8F"
        alt
        className={styles['image']}
      />
    </Container>
  )
}

NewFigmaComponent9.defaultProps = {
  fields: {},
  rootClassName: '',
}

NewFigmaComponent9.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent9
