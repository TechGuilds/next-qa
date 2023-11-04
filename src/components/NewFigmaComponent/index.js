/* eslint-disable */
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={`new-figma-component-root ${props.rootClassName} `}>
      <Container className="new-figma-component-container">
        <Container className="new-figma-component-container01">
          <Container className="new-figma-component-container02">
            <Text
              text={props.fields.text}
              tag="span"
              className="new-figma-component-text"
            />
            <Text
              text={props.fields.text1}
              tag="span"
              className="new-figma-component-text1"
            />
          </Container>
          <Text
            text={props.fields.text2}
            tag="span"
            className="new-figma-component-text2"
          />
          <Container className="new-figma-component-container03">
            <Container className="new-figma-component-container04">
              <Text
                text={props.fields.text3}
                tag="span"
                className="new-figma-component-text3"
              />
              <Container className="new-figma-component-container05">
                <Container className="new-figma-component-container06">
                  <Image
                    src={props.fields.src}
                    alt={props.fields.alt}
                    className="new-figma-component-image"
                  />
                </Container>
              </Container>
            </Container>
            <Container className="new-figma-component-container07">
              <Text
                text={props.fields.text4}
                tag="span"
                className="new-figma-component-text4"
              />
              <Container className="new-figma-component-container08">
                <Container className="new-figma-component-container09">
                  <Image
                    src={props.fields.src1}
                    alt={props.fields.alt1}
                    className="new-figma-component-image1"
                  />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Image
          src={props.fields.src2}
          alt={props.fields.alt2}
          className="new-figma-component-image2"
        />
      </Container>
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  fields: {
    text: 'iPhone 14 Pro',
    text1: 'Pro. Beyond.',
    text2: 'Available starting 9:16',
    text3: 'Learn more',
    src: 'https://kajoo.nyc3.digitaloceanspaces.com/stage/orgs/61c661b27e969b2acad92083/assets/4-7olrAWV-F4BO-a7AkH6.svg',
    alt: 'arrowright136',
    text4: 'Pre-order',
    src1: 'https://kajoo.nyc3.digitaloceanspaces.com/stage/orgs/61c661b27e969b2acad92083/assets/PMhexeCbc4v5Ewm42LCKn.svg',
    alt1: 'arrowrightI141136',
    src2: 'https://kajoo.nyc3.digitaloceanspaces.com/stage/orgs/61c661b27e969b2acad92083/assets/pO95l87A0bvMAn3Rl5vzC.png',
    alt2: 'heroiphone14propreordercc1jjc6hq7malargetall2x142',
  },
  rootClassName: '',
}

NewFigmaComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent
