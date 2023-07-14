/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text
        text={props.fields.title}
        tag="h1"
        className={styles['header-default']}
      />
    </Container>
  )
}

Component1.defaultProps = {
  fields: {
    _version: 2,
    locale: 'en-us',
    uid: 'bltcb25aa672e048a7a',
    ACL: {},
    _in_progress: false,
    created_at: '2022-06-29T16:12:13.642Z',
    created_by: 'blt7e329dbe668f3e6c',
    logo: {
      _version: 1,
      is_dir: false,
      uid: 'blt83e0ea5cd535a397',
      ACL: {},
      content_type: 'image/svg+xml',
      created_at: '2022-06-29T16:12:01.286Z',
      created_by: 'blt7e329dbe668f3e6c',
      description: '',
      file_size: '11085',
      filename: 'company-logo.svg',
      parent_uid: 'bltd3fa7be535517dc6',
      tags: [],
      title: 'Company Logo',
      updated_at: '2022-06-29T16:12:01.286Z',
      updated_by: 'blt7e329dbe668f3e6c',
      publish_details: {
        environment: 'bltcbc9e23b97399988',
        locale: 'en-us',
        time: '2022-06-29T16:12:01.540Z',
        user: 'blt7e329dbe668f3e6c',
      },
      url: 'https://images.contentstack.io/v3/assets/bltf30e8d394a5af90c/blt83e0ea5cd535a397/62bc79d19c112a1a7e536f8a/company-logo.svg',
    },
    navigation_menu: [
      {
        label: 'Home',
        _metadata: {
          uid: 'cs69550988926e85d9',
        },
        page_reference: [
          {
            uid: 'blta434ceaa53828ed1',
            _content_type_uid: 'page',
          },
        ],
      },
      {
        label: 'About Us',
        _metadata: {
          uid: 'cscf5318e5388812b4',
        },
        page_reference: [
          {
            uid: 'bltc81bde514927af0b',
            _content_type_uid: 'page',
          },
        ],
      },
      {
        label: 'Blog',
        _metadata: {
          uid: 'cs32274bbf10a21bec',
        },
        page_reference: [
          {
            uid: 'blt85bab5882ca6a72c',
            _content_type_uid: 'page',
          },
        ],
      },
      {
        label: 'Contact Us',
        _metadata: {
          uid: 'cs46f9812a50d8309c',
        },
        page_reference: [
          {
            uid: 'blt997a70c868274835',
            _content_type_uid: 'page',
          },
        ],
      },
    ],
    notification_bar: {
      show_announcement: true,
      announcement_text: {
        uid: 'fd9881103940824d8a65bdee7050ccc5',
        attrs: {},
        children: [
          {
            type: 'p',
            attrs: {},
            uid: 'a3ae29a89fcd0dd7f370a7d647b928a3',
            children: [
              {
                text: 'To Our Community: Please read this important update.',
              },
            ],
          },
        ],
        type: 'doc',
        _version: 2,
      },
    },
    tags: [],
    title: 'Company Name',
    updated_at: '2022-06-29T16:12:15.974Z',
    updated_by: 'blt7e329dbe668f3e6c',
    publish_details: {
      environment: 'bltcbc9e23b97399988',
      locale: 'en-us',
      time: '2022-06-29T16:12:19.703Z',
      user: 'blt7e329dbe668f3e6c',
    },
  },
  rootClassName: '',
}

Component1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Component1
