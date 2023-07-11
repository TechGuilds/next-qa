/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import AppComponent from '../src/components/Component'
import DynamicComponentWithDatasource from '../src/components/DynamicComponentWithDatasource'
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
      <AppComponent rootClassName="root-class-name" />
      <DynamicComponentWithDatasource />
    </Container>
  )
}

export default Home
