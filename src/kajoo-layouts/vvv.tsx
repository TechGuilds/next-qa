/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from '@kajoo-ai/sitecore-nextjs';



import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import styles from './vvv.module.css'

const Vvv = (props) => {
  return (
    <Container className={styles['root']}>
      <Helmet>
        <title>vvv</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
    </Container>
  )
}

export default Vvv

KajooLayoutFactory.registerLayout("Vvv", Vvv)