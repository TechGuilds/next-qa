/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from '@kajoo-ai/sitecore-nextjs';



import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import styles from './Page1.module.css'

const Page1 = (props) => {
  return <Container className={styles['page1-container']} />
}

export default Page1

KajooLayoutFactory.registerLayout("Page1", Page1)