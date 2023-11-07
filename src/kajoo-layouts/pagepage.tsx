/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from 'lib/kajoo-layout-factory';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import { Helmet } from 'react-helmet'

import styles from './pagepage.module.css'

const Pagepage = (props) => {
  return (
    <Container tag="body" className={styles['root']}>
      <Helmet>
        <title>pagepage</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <Container tag="div" className={styles['container']}>
        <Placeholder
          name="kajoo-main"
          rendering={props.layoutData.sitecore.route}
        />
      </Container>
    </Container>
  )
}

export default Pagepage

KajooLayoutFactory.registerLayout("Pagepage", Pagepage)