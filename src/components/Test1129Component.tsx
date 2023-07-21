/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Link,
  TypeForm,
  RichText,
  Image,
  Textarea,
  Textinput,
  Radiobutton,
  Toggle,
  Video,
  Button,
} from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Test1129Component.module.css'

const DyNamicEntRy = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text
          text={props.fields.text}
          tag="span"
          className={` ${styles['paragraph-default']} ${styles['text']} `}
        />
        <Text
          text={props.fields.value}
          tag="h1"
          className={styles['header-default']}
        />
      </Container>
      <Link
        href="#"
        target="_blank"
        rel="noreferrer noopener"
        text="Link"
        className={styles['link-default']}
      />
      <Container
        className={` ${styles['container1']} ${styles['container-default']} `}
      >
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          tag="span"
          className={styles['paragraph-default']}
        />
        <Text text="Heading" tag="h1" className={styles['header-default']} />
      </Container>
      <TypeForm formId mode="widget" buttonText="Typeform" />
      <RichText
        value="&lt;p&gt;Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.&lt;/p&gt;"
        className={styles['richtext-default']}
      />
      <Image
        src={props.fields.src}
        alt={props.fields.alt}
        className={styles['image-default']}
      />
      <form className={` ${styles['form']} ${styles['container-default']} `}>
        <Textarea className={styles['textarea-default']} />
        <Textinput className={styles['textinput-default']} />
        <Radiobutton type="radio" className={styles['radiobutton-default']} />
        <Toggle className={styles['toggle-default']} />
        <Video
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          muted="true"
          poster="https://peach.blender.org/wp-content/uploads/bbb-splash.png?x81236"
          className={styles['video-default']}
        />
      </form>
      <Button text="Button" link="#" className={styles['button-default']} />
      <Text text="Label" tag="label" className={styles['label-default']} />
    </Container>
  )
}

DyNamicEntRy.defaultProps = {
  fields: {
    src: '/icons/default-imag.svg',
    alt: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    text1:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    text2:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    text3:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    alt1: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    src1: '/icons/default-imag.svg',
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    value:
      '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
  },
  rootClassName: '',
}

DyNamicEntRy.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DyNamicEntRy
