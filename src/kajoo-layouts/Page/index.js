/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from '@kajoo-ai/sitecore-react';


import React from 'react'
import { Container } from '@kajoo-ai/sitecore-react'
import { Placeholder } from '@sitecore-jss/sitecore-jss-react'

import { Helmet } from 'react-helmet'

import './style.css'

const Page = (props) => {
  return (
    <Container className="page-container">
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