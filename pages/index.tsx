/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import Test2 from '../src/components/Test2'
import Test1WithDatasource from '../src/components/Test1WithDatasource'
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
      <Test2 rootClassName="root-class-name" />
      <Test1WithDatasource />
    </Container>
  )
}

export default Home
