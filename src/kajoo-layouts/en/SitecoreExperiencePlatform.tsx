/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from '@kajoo-ai/sitecore-nextjs';



import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import { Helmet } from 'react-helmet'

import styles from './SitecoreExperiencePlatform.module.css'

const SitecoreExperiencePlatform = (props) => {
  return (
    <Container tag="body" className={styles['container']}>
      <Helmet>
        <title>Sitecore Experience Platform</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <Container className={styles['container1']}>
        <Placeholder
          name="kajoo-main"
          rendering={props.layoutData.sitecore.route}
        />
      </Container>
    </Container>
  )
}

export default SitecoreExperiencePlatform

KajooLayoutFactory.registerLayout("SitecoreExperiencePlatform", SitecoreExperiencePlatform)