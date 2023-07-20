/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import DynamicComponent from './DynamicComponent'
import styles from './Component2.module.css'

const Component2 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <DynamicComponent rootClassName="root-class-name2" />
    </Container>
  )
}

Component2.defaultProps = {
  fields: {
    title: 'Erin Test Feature 2',
    feature_details:
      'Etiam et auctor libero. Curabitur sit amet nisi venenatis ex mattis cursus. Phasellus pulvinar sodales leo, vitae dignissim justo venenatis at. ',
    icon: {
      parent_uid: 'blt50f6ebe7cd9c7aaa',
      uid: 'blte337f4c6f1575648',
      created_by: 'bltde4e0779ddb58fdf',
      updated_by: 'bltde4e0779ddb58fdf',
      created_at: '2022-01-12T19:33:36.539Z',
      updated_at: '2022-01-12T19:33:36.539Z',
      content_type: 'image/png',
      file_size: '4817',
      filename: 'Kajoo_Logo_Icon.png',
      title: 'Kajoo_Logo_Icon.png',
      ACL: {},
      _version: 1,
      is_dir: false,
      tags: [],
      publish_details: {
        environment: 'bltfd036e2b961d5e4a',
        locale: 'en-us',
        time: '2023-06-22T14:36:46.345Z',
        user: 'bltc943ddd2447420d5',
      },
      url: 'https://images.contentstack.io/v3/assets/blt363844fb4b059f02/blte337f4c6f1575648/61df2d105ee73041f45e8217/Kajoo_Logo_Icon.png',
    },
    cta: [
      {
        uid: 'bltb42d0bca4b06ee88',
        _content_type_uid: 'cta',
      },
    ],
    tags: [],
    locale: 'en-us',
    uid: 'blte7d0abfc043d7e4e',
    created_by: 'bltc943ddd2447420d5',
    updated_by: 'bltc943ddd2447420d5',
    created_at: '2023-06-20T20:19:38.734Z',
    updated_at: '2023-06-20T20:19:38.734Z',
    ACL: {},
    _version: 1,
    _in_progress: false,
    publish_details: {
      environment: 'bltfd036e2b961d5e4a',
      locale: 'en-us',
      time: '2023-06-22T14:36:46.469Z',
      user: 'bltc943ddd2447420d5',
    },
  },
  rootClassName: '',
}

Component2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Component2
