/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from '@kajoo-ai/sitecore-nextjs';



import React from 'react'
import { Container, Image } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import styles from './Page.module.css'

const Page = (props) => {
  return (
    <Container
      bgImage="https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/0sE-dFuYNlRPkgpTlwe2m.png"
      className={styles['page-container']}
    >
      <Helmet>
        <title>Page</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <Image
        src="https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/312IyLIHutgZF_OE850gK.svg"
        alt="image-asset"
        className={'image-default'}
      />
    </Container>
  )
}

export default Page

KajooLayoutFactory.registerLayout("Page", Page)