/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  RichText,
  Link,
  Video,
  Checkbox,
} from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './UatTestComp123.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        bgImage
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text text="Heading" tag="h1" className={styles['header-default']} />
        <Image
          src="/icons/default-imag.svg"
          alt="default-kajoo-imag"
          className={` ${styles['image-default']} ${styles['image']} `}
        />
      </Container>
      <RichText
        value="&lt;p&gt;Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.&lt;/p&gt;"
        className={styles['richtext-default']}
      />
      <Container
        className={` ${styles['container1']} ${styles['container-default']} `}
      >
        <Text
          text="Heading"
          tag="h1"
          className={` ${styles['header-default']} ${styles['text1']} `}
        />
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
      </Container>
      <Container
        className={` ${styles['container2']} ${styles['container-default']} `}
      >
        <Text text="Heading" tag="h1" className={styles['header-default']} />
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          tag="span"
          className={styles['paragraph-default']}
        />
        <Link
          href="#"
          target="_blank"
          rel="noreferrer noopener"
          text="Link"
          className={styles['link-default']}
        />
        <Video
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          muted="true"
          poster="https://peach.blender.org/wp-content/uploads/bbb-splash.png?x81236"
          className={styles['video-default']}
        />
        <Image
          src="/icons/default-imag.svg"
          alt="default-kajoo-imag"
          className={styles['image-default']}
        />
        <Text text="Label" tag="label" className={styles['label-default']} />
        <Checkbox className={styles['checkbox-default']} />
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  fields: {},
  rootClassName: '',
}

AppComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default AppComponent
