/* eslint-disable */
import React from 'react'
import { Container, Text, Image, Link, Button } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const TestingColors = (props) => {
  return (
    <Container className={`testing-colors-root ${props.rootClassName} `}>
      <Container className="testing-colors-container testing-colors-container-default">
        <Text
          text={props.fields.text}
          tag="span"
          className="testing-colors-text testing-colors-paragraph-default"
        />
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className="testing-colors-image-default"
        />
        <Text
          text={props.fields.text1}
          tag="span"
          className="testing-colors-text1 testing-colors-paragraph-default"
        />
        <Text
          text={props.fields.text2}
          tag="h1"
          className="testing-colors-text2 testing-colors-header-defaultsrwe"
        />
        <Link
          href={props.fields.href}
          className="testing-colors-link-default"
        />
        <Button
          link={props.fields.link}
          className="testing-colors-button testing-colors-button-default"
        />
      </Container>
      <Button
        link={props.fields.link1}
        className="testing-colors-button1 testing-colors-button-default"
      />
    </Container>
  )
}

TestingColors.defaultProps = {
  fields: {
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-imag',
    text1:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    href: '#',
    text5: 'Button',
    link1: '#',
    text2: 'Heading',
    link: '#',
    text3: 'Link',
    text4: 'Button',
  },
  rootClassName: '',
}

TestingColors.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default TestingColors
