/* eslint-disable */
import React from 'react'
import { Container, Link, Image, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={`dynamic-component-container ${props.rootClassName} `}
    >
      <Container className="dynamic-component-column-container container-default">
        <Link href="https://kajoo.ai" className="dynamic-component-link">
          <Image
            src={props.fields.src}
            alt={props.fields.alt}
            className="image-default"
          />
        </Link>
        <Text text={props.fields.text} tag="h1" className="header-default" />
      </Container>
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-image',
    text: 'Heading',
  },
  rootClassName: '',
  rendering: {},
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default DynamicComponent
