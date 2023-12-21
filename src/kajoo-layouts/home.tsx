/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from 'lib/kajoo-layout-factory';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

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
      <Placeholder name rendering={props.layoutData.sitecore.route} />
    </Container>
  )
}

export default Home

KajooLayoutFactory.registerLayout("Home", Home)