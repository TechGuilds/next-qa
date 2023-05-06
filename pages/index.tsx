/* eslint-disable */
// @ts-nocheck
import kajooApi from '../kajoo-api';

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

const Main = (props) => {
  return <Container />
}

export default Main
 export const getStaticProps = async()=>{
   const data=
	{
     "Component": {
          "hostUrl": "https://engine-staging.conscia.io/api/",
          "customerCode": "techguilds",
          "apiToken": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODA2MzQ2NjAsImh0dHBzOi8vY29uc2NpYS5pby9keGVuZ2luZV9hY2wiOnsidGVjaGd1aWxkcyI6eyJATUFOQUdFIjp0cnVlfX0sImVtYWlsIjoidGVhbUB0ZWNoZ3VpZHMuY29tIn0.rvJktWflJeuYcpO__85Yp4pFD5tBt-Qq-BZN2rYtNM8",
          "environment": "preview",
          "componentCode": "tg-promo-banners-formatted",
          "type": "conscia.ai"
     },
     "Component1": {
          "hostUrl": "https://engine-staging.conscia.io/api/",
          "customerCode": "techguilds",
          "apiToken": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODA2MzQ2NjAsImh0dHBzOi8vY29uc2NpYS5pby9keGVuZ2luZV9hY2wiOnsidGVjaGd1aWxkcyI6eyJATUFOQUdFIjp0cnVlfX0sImVtYWlsIjoidGVhbUB0ZWNoZ3VpZHMuY29tIn0.rvJktWflJeuYcpO__85Yp4pFD5tBt-Qq-BZN2rYtNM8",
          "environment": "preview",
          "componentCode": "test-2",
          "type": "conscia.ai"
     },
     "Component11": {
          "hostUrl": "https://engine-staging.conscia.io/api/",
          "customerCode": "techguilds",
          "apiToken": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODA2MzQ2NjAsImh0dHBzOi8vY29uc2NpYS5pby9keGVuZ2luZV9hY2wiOnsidGVjaGd1aWxkcyI6eyJATUFOQUdFIjp0cnVlfX0sImVtYWlsIjoidGVhbUB0ZWNoZ3VpZHMuY29tIn0.rvJktWflJeuYcpO__85Yp4pFD5tBt-Qq-BZN2rYtNM8",
          "environment": "preview",
          "componentCode": "test-2",
          "type": "conscia.ai"
     },
     "Component2": {
          "hostUrl": "https://engine-staging.conscia.io/api/",
          "customerCode": "techguilds",
          "apiToken": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODA2MzQ2NjAsImh0dHBzOi8vY29uc2NpYS5pby9keGVuZ2luZV9hY2wiOnsidGVjaGd1aWxkcyI6eyJATUFOQUdFIjp0cnVlfX0sImVtYWlsIjoidGVhbUB0ZWNoZ3VpZHMuY29tIn0.rvJktWflJeuYcpO__85Yp4pFD5tBt-Qq-BZN2rYtNM8",
          "environment": "preview",
          "componentCode": "tg-promo-banners-formatted",
          "type": "conscia.ai"
     }
};
   const fields = await kajooApi(data);

    return {
              props:{ fields } 
          } 
}