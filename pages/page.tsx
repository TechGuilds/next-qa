/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import styles from './page.module.css'

const Page = (props) => {
  return (
    <Container className={styles['root']}>
      <Helmet>
        <title>Page</title>
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

export default Page
