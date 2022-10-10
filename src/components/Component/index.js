/* eslint-disable */
import React from 'react'
import { Container } from 'kajoo-components/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const AppComponent = (props) => {
  return (
    <Container className="component-root">
      <Container
        bgImage={props.fields.bgImage1}
        className="component-container component-container-default"
      />
    </Container>
  )
}

AppComponent.defaultProps = {
  fields: {},
}

AppComponent.propTypes = {
  fields: PropTypes.object,
}

export default AppComponent
