/* eslint-disable */
// @ts-nocheck 
import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  VisitorIdentification,
  ImageField,
  LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface LayoutProps {
  layoutData: LayoutServiceData;
}

const KajooLayout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;

  const favicon = route?.fields?.Favicon as ImageField
  const metaDescription = route.fields['Meta Description']?.value
  const ogDescription = route.fields['Description']?.value
  const ogTitle = route?.fields?.Title?.value
  const ogImage = route?.fields?.Image as ImageField
  const canonicalUrl = route?.fields['Canonical Url']?.value
  const noFollow = route?.databaseName === 'web' ? route?.fields['No Follow']?.value : true
  const noIndex = route?.databaseName === 'web' ? route?.fields['No Index']?.value : true

  const title =
    route?.fields['Browser Title']?.value || ogTitle || route?.name;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href={favicon?.value?.src} />
        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={ogDescription} />
        <link
          rel="canonical"
          href={
            canonicalUrl?.endsWith('/')
              ? canonicalUrl?.slice(0, -1)
              : canonicalUrl
          }
        />
        <meta
          name="robots"
          content={
            (noIndex ? 'NOINDEX' : '') +
            (noFollow && noIndex ? ', ' : '') +
            (noFollow ? 'NOFOLLOW' : '')
          }
        />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:image" content={ogImage?.value?.src} />
      </Head>

      {/*
        VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
        If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
        For XM (CMS-only) apps, this should be removed.

        VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
      */}
      <VisitorIdentification />

      {/* root placeholder for the app, which we add components to using route data */}
       <Placeholder name="kajoo-main" rendering={route} />
    </>
  );
};

export default KajooLayout;