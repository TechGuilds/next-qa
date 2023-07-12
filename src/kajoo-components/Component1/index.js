/* eslint-disable */
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const Component1 = (props) => {
  return (
    <Container className={`component1-root ${props.rootClassName} `}>
      <Container className="component1-container">
        <Container className="component1-container1">
          <Image
            src="https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/kajoo-image-1689100397228.png"
            alt="default-kajoo-imag"
            className=""
          />
          <Container className="component1-container2">
            {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
              <repeaterCollection
                key={index}
                className="component1-repeater-collection"
              >
                <Text text="Heading" tag="h1" className="" />
                <Image
                  src="https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/kajoo-image-1689100425729.png"
                  alt="default-kajoo-imag"
                  className="component1-image1"
                />
              </repeaterCollection>
            ))}
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Component1.defaultProps = {
  fields: {},
  rootClassName: '',
}

Component1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Component1
