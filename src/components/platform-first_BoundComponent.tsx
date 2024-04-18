// @ts-nocheck
/* eslint-disable */
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './platform-first_BoundComponent.module.css'

const BoundComponent = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <Text text="Heading" tag="h1" className={'header-default'} />
    </Container>
  )
}

BoundComponent.defaultProps = {
  fields: {
    _version: 3,
    locale: 'en-us',
    uid: 'blt7ffce9ab1233bff0',
    ACL: {},
    _in_progress: false,
    created_at: '2023-06-20T20:16:11.964Z',
    created_by: 'bltc943ddd2447420d5',
    description:
      'Suspendisse purus enim, aliquam vitae nunc in, efficitur vehicula nisi. Fusce pulvinar elementum blandit. Donec pulvinar, diam id pulvinar euismod, massa velit porttitor lorem, et lacinia augue lacus eget nibh. Pellentesque enim dui, auctor eu pretium a, blandit sit amet mi. Vivamus vitae malesuada sem.',
    dismiss_button: [
      {
        uid: 'blta6ad64ff11855fb5',
        _content_type_uid: 'cta',
      },
    ],
    features: [
      {
        uid: 'blta49c618c7a8d6465',
        _content_type_uid: 'feature',
      },
      {
        uid: 'blte7d0abfc043d7e4e',
        _content_type_uid: 'feature',
      },
    ],
    release_date: '2023-06-19T04:00:00.000Z',
    tags: [],
    title: 'Erin Test Dialog',
    updated_at: '2023-06-20T20:20:35.377Z',
    updated_by: 'bltc943ddd2447420d5',
    version_number: 1,
    publish_details: {
      environment: 'bltfd036e2b961d5e4a',
      locale: 'en-us',
      time: '2023-06-22T14:36:46.443Z',
      user: 'bltc943ddd2447420d5',
    },
  },
  rootClassName: '',
  rendering: {},
}

BoundComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(BoundComponent)
