/* eslint-disable */
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={`dynamic-component-container ${props.rootClassName} ${props.params?.styles} `}
    >
      <Text text={props.fields.title.value} className="text-default" />
      <Image
        src="https://app.kajoo.ai/icons/default-imag.svg"
        alt="default-kajoo-image"
        className="image-default"
      />
      <Text text={props.fields.untitled_asset.name} className="text-default" />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    title: {
      name: 'Title',
      type: 'text',
      value: 'Welcome',
    },
    body: {
      images: [],
      linkedItemCodenames: [],
      linkedItems: [],
      links: [],
      name: 'Body',
      type: 'rich_text',
      value:
        '<p>This is a&nbsp;<strong>content item</strong> that holds your content based on templates you define in your&nbsp;<strong>content types.</strong>&nbsp;To see how this one is defined, click&nbsp;<em>Content model</em>&nbsp;in the left menu and look at&nbsp;<em>Article—example content type</em>.</p>\n<p>In this content item, you can add the actual content that will be displayed in your final app. Your content can include formatted text and images.</p>\n<p><a href="https://kontent.ai/learn/docs/content-items/rich-text#a-adding-images" data-new-window="true" target="_blank" rel="noopener noreferrer">Add an image</a>&nbsp;below this paragraph.</p>\n<p><br></p>\n<p>To make your content available outside of Kontent.ai, click <strong>Publish </strong>on the top of the screen and then confirm the publishing by clicking <strong>Publish</strong> in the popup that appears.</p>',
    },
    url: {
      name: 'URL',
      type: 'url_slug',
      value: 'welcome',
    },
    untitled_asset: {
      name: 'Untitled asset',
      type: 'asset',
      value: [],
    },
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
