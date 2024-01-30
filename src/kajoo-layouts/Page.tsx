/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from 'lib/kajoo-layout-factory';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import styles from './Page.module.css'

const Page = (props) => {
  return <Container className={styles['root']} />
}

export default Page

KajooLayoutFactory.registerLayout("Page", Page)