/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Radiobutton,
  Link,
  Text,
  TypeForm,
  Image,
  Textinput,
  Toggle,
  RichText,
  Textarea,
} from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Radiobutton type="radio" className={styles['radiobutton-default']} />
        <Link
          href="#"
          target="_blank"
          rel="noreferrer noopener"
          text="Link"
          className={styles['link-default']}
        />
        <Text text="Heading" tag="h1" className={styles['header-default']} />
        <Text text="Label" tag="label" className={styles['label-default']} />
        <TypeForm formId mode="widget" buttonText="Typeform" />
      </Container>
      <Container className={styles['container1']}>
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          tag="span"
          className={styles['paragraph-default']}
        />
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          tag="span"
          className={styles['paragraph-default']}
        />
        <Text text="Label" tag="label" className={styles['label-default']} />
      </Container>
      <Container className={styles['container2']}>
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          tag="span"
          className={` ${styles['paragraph-default']} ${styles['text5']} `}
        />
        <Image
          src="/icons/default-imag.svg"
          alt="default-kajoo-imag"
          className={` ${styles['image-default']} ${styles['image']} `}
        />
        <Textinput className={styles['textinput-default']} />
        <Toggle className={styles['toggle-default']} />
      </Container>
      <RichText
        value="&lt;p&gt;Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.&lt;/p&gt;"
        className={styles['richtext-default']}
      />
      <Container className={styles['container3']}>
        <Textarea className={styles['textarea-default']} />
        <form className={styles['container-default']} />
        <Textinput className={styles['textinput-default']} />
      </Container>
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {},
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
