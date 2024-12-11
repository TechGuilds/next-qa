/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import {
  Container,
  Text,
  Link,
  RichText,
  Button,
  Image,
} from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './form.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['dynamic-component-container1']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Text text="Brand Choice" className={'text-default'} />
      <Link
        href="#"
        target="_blank"
        rel="noreferrer noopener"
        text="Link"
        className={'link-default'}
      />
      <Container
        className={` ${
          styles['dynamic-component-row-container']
        } ${'container-default'} `}
      >
        <Container
          className={` ${
            styles['dynamic-component-column-container']
          } ${'container-default'} `}
        >
          {props.children}
          <Placeholder name="Placeholder" rendering="Placeholder" />
          <Text
            text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
            className={'text-default'}
          />
        </Container>
        <RichText
          value={props.fields['Is Ajax']}
          className={'richtext-default'}
        />
        <Text text="Heading" tag="h1" className={'text-default'} />
        <Container className={styles['dynamic-component-repeater']}>
          {props.fields['Css Class Options'].map((item, index) => (
            <Container
              key={index}
              className={styles['dynamic-component-container2']}
            >
              <Button text={item.fields.Image} className={'button-default'} />
              <Image
                src={item.fields.Text}
                alt="default-kajoo-image"
                className={'image-default'}
              />
            </Container>
          ))}
        </Container>
      </Container>
      <Link
        href="#"
        target="_blank"
        rel="noreferrer noopener"
        text="Link"
        className={'link-default'}
      />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    'Css Class Options': [
      {
        fields: {
          Title:
            'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
          Image: 'https://app.kajoo.ai/icons/default-imag.svg',
          Text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
          heading:
            'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
        },
      },
      {
        fields: {
          Title:
            'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
          Image: 'https://app.kajoo.ai/icons/default-imag.svg',
          Text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
          heading:
            'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
        },
      },
      {
        fields: {
          Title:
            'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
          Image: 'https://app.kajoo.ai/icons/default-imag.svg',
          Text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
          heading:
            'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
        },
      },
    ],
    'Css Class':
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    'Is Ajax': '',
    'Is Robot Detection Enabled': '',
    'Is Template': '',
    Scripts:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    Styles:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    'Field Type': '',
    'Is Tracking Enabled': '',
  },
  rootClassName: '',
  rendering: {},
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(DynamicComponent)
