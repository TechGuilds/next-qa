/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { KajooComponent } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'
import Test4Gg from '../kajoo-components/Test4Gg'

const Test4GgWithDatasource = (props) => {
  return <KajooComponent datasource={props.fields} component={Test4Gg} />
}

Test4GgWithDatasource.defaultProps = {
  fields: {
    provider: 'contentstack',
    apiKey: 'bltf30e8d394a5af90c',
    deliveryToken: 'csf5bf45e7e9facc4179673ca5',
    environment: 'development',
    contentTypeUid: 'page',
    entryUid: 'blta434ceaa53828ed1',
  },
}

Test4GgWithDatasource.propTypes = {
  fields: PropTypes.object,
}

export default Test4GgWithDatasource
