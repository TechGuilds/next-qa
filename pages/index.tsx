/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import Test5Gg from '../src/components/Test5Gg'
import Test4GgWithDatasource from '../src/components/Test4GgWithDatasource'
import styles from './index.module.css'

const Home = (props) => {
  return (
    <Container className={styles['root']}>
      <Helmet>
        <title>home</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <Test5Gg rootClassName="root-class-name" />
      <Test4GgWithDatasource />
    </Container>
  )
}

export default Home
