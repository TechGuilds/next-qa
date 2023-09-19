/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import DynamicTesting from '../src/components/DynamicTesting'
import styles from './page.module.css'

const PageTest = (props) => {
  return (
    <Container className={styles['root']}>
      <Helmet>
        <title>Page test</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <DynamicTesting rootClassName="root-class-name" />
    </Container>
  )
}

export default PageTest
