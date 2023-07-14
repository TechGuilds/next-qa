/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import Component1 from './Component1'
import AppComponent from '../components/Component'
import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Component1 rootClassName="root-class-name" />
      <AppComponent rootClassName="root-class-name" />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    title: 'Erin Test Feature 1',
    feature_details:
      'Integer dapibus aliquet arcu in imperdiet. Suspendisse potenti. Fusce fringilla ex et egestas tincidunt. Suspendisse eros magna, pulvinar in sapien id, eleifend vehicula ante.',
    icon: {
      parent_uid: 'blt50f6ebe7cd9c7aaa',
      uid: 'blt9e849032d5fdcbcf',
      created_by: 'bltde4e0779ddb58fdf',
      updated_by: 'bltde4e0779ddb58fdf',
      created_at: '2022-01-12T19:43:10.998Z',
      updated_at: '2022-01-12T20:42:40.429Z',
      content_type: 'image/svg+xml',
      file_size: '632',
      filename: 'facebook.svg',
      title: 'facebook.svg',
      ACL: {},
      _version: 2,
      is_dir: false,
      tags: [],
      description: '',
      publish_details: {
        environment: 'bltfd036e2b961d5e4a',
        locale: 'en-us',
        time: '2023-06-22T14:36:46.416Z',
        user: 'bltc943ddd2447420d5',
      },
      url: 'https://images.contentstack.io/v3/assets/blt363844fb4b059f02/blt9e849032d5fdcbcf/61df3d4025d68c388a00ff59/facebook.svg',
    },
    cta: [
      {
        uid: 'bltb42d0bca4b06ee88',
        _content_type_uid: 'cta',
      },
    ],
    tags: [],
    locale: 'en-us',
    uid: 'blta49c618c7a8d6465',
    created_by: 'bltc943ddd2447420d5',
    updated_by: 'bltc943ddd2447420d5',
    created_at: '2023-06-20T20:17:06.215Z',
    updated_at: '2023-06-20T20:19:04.975Z',
    ACL: {},
    _version: 3,
    _in_progress: false,
    publish_details: {
      environment: 'bltfd036e2b961d5e4a',
      locale: 'en-us',
      time: '2023-06-22T14:36:46.491Z',
      user: 'bltc943ddd2447420d5',
    },
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
