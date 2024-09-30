/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import {
  Container,
  Text,
  RichText,
  Image,
  Link,
  Video,
  TypeForm,
} from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container className={` ${styles['container1']} ${'container-default'} `}>
        <Text text="Heading" tag="h1" className={'text-default'} />
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          className={'text-default'}
        />
        <RichText
          value="&lt;p&gt;Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.&lt;/p&gt;"
          className={'richtext-default'}
        />
        <Image
          src="https://app.kajoo.ai/icons/default-imag.svg"
          alt="default-kajoo-image"
          className={'image-default'}
        />
        <Link
          href="#"
          target="_blank"
          rel="noreferrer noopener"
          text="Link"
          className={'link-default'}
        />
        <Video
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          muted="true"
          poster="https://peach.blender.org/wp-content/uploads/bbb-splash.png?x81236"
          className={'video-default'}
        />
      </Container>
      <TypeForm mode="widget" buttonText="Typeform" />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    heading: {
      name: 'Heading',
      type: 'text',
      value: 'OTC trading test',
    },
    link: {
      name: 'Link',
      type: 'text',
      value:
        'https://www.stonex.com/otc-trading/?_gl=1*x4guk1*_gcl_au*MTkyNjA5NDQwOS4xNzA3MjIxNDQw&_ga=2.208197076.771805015.1709717667-898444463.1706869820',
    },
    blurb: {
      name: 'Blurb',
      type: 'text',
      value:
        'Experience customized hedging options and superior flexibility with OTC products from StoneX.',
    },
    image: {
      name: 'Image',
      type: 'asset',
      value: [
        {
          name: 'Homepage_OTCTrading.jpg',
          description: 'Man and woman working in the lab',
          type: 'image/jpeg',
          size: 6737,
          url: 'https://assets-eu-01.kc-usercontent.com:443/53d15725-cbbe-01e5-1f69-b531a4daafe9/f50ec3ff-aa67-473e-be69-9361c43ef466/Homepage_OTCTrading.jpg',
          width: 282,
          height: 90,
          renditions: {},
        },
      ],
    },
    figma_preview: {
      name: 'Figma preview',
      type: 'custom',
      value: '',
    },
    figma_url: {
      name: 'Figma URL',
      type: 'text',
      value:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FI1zwtLc7Vkxke9vNBDlCxR%2FStoneX%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D9KghmRaHVhFT2EM1-1',
    },
  },
  rendering: {},
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default withDatasourceCheck()(DynamicComponent)
