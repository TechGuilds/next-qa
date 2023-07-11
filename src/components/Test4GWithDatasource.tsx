/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { KajooComponent } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'
import Test4G from '../kajoo-components/Test4G'

const Test4GWithDatasource = (props) => {
  return <KajooComponent datasource={props.fields} component={Test4G} />
}

Test4GWithDatasource.defaultProps = {
  fields: {
    provider: 'contentstack',
    apiKey: 'bltf30e8d394a5af90c',
    deliveryToken: 'csf5bf45e7e9facc4179673ca5',
    environment: 'development',
    contentTypeUid: 'page',
    entryUid: 'blta434ceaa53828ed1',
  },
}

Test4GWithDatasource.propTypes = {
  fields: PropTypes.object,
}

export default Test4GWithDatasource
