/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from '@kajoo-ai/sitecore-nextjs';



import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import styles from './Page.module.css'

const Page = (props) => {
  return <Container className={styles['container']} />
}

export default Page

KajooLayoutFactory.registerLayout("Page", Page)