/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  RichText,
  Button,
  Image,
} from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container
      className={` ${styles['component-container1']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Container
        className={` ${
          styles['component-row-container1']
        } ${'container-default'} `}
      >
        <Container
          className={` ${
            styles['component-row-container2']
          } ${'container-default'} `}
        >
          <Container
            className={` ${
              styles['component-column-container']
            } ${'container-default'} `}
          >
            {props.children}
            <Placeholder name="Placeholder" rendering="Placeholder" />
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
              className={'text-default'}
            />
          </Container>
          <RichText value="Placeholder" className={'richtext-default'} />
          <Text text="Heading" tag="h1" className={'text-default'} />
          <Container className={styles['component-repeater']}>
            {props.fields['Css Class Options'].map((item, index) => (
              <Container key={index} className={styles['component-container2']}>
                <Button text="Placeholder" className={'button-default'} />
                <Image
                  src="Placeholder"
                  alt="default-kajoo-image"
                  className={'image-default'}
                />
              </Container>
            ))}
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

AppComponent.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppComponent
