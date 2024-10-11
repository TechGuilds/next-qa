/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from '@kajoo-ai/sitecore-nextjs';



import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import { Helmet } from 'react-helmet'

import styles from './Page.module.css'

const Page = (props) => {
  return (
    <Container className={styles['container']}>
      <Helmet>
        <title>Page</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <Placeholder name rendering={props.layoutData.sitecore.route} />
    </Container>
  )
}

export default Page

KajooLayoutFactory.registerLayout("Page", Page)