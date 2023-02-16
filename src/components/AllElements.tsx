/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  RichText,
  Image,
  Video,
  Button,
  Textinput,
  Textarea,
  Radiobutton,
  Dropdown,
  Checkbox,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AllElements.module.css'

const AllElements = (props) => {
  return (
    <Container className={styles['root']}>
      <Container
        bgImage={props.fields.bgImage}
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
              tag="span"
              className={styles['text']}
            />
            <RichText
              value="&lt;p&gt;Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.&lt;/p&gt;"
              className={styles['richtext']}
            />
            <Text
              text={props.fields.text1}
              tag="h1"
              className={styles['text1']}
            />
            <Image
              src="/icons/default-imag.svg"
              alt={props.fields.alt}
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <Video
              src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
              className={` ${styles['video']} ${styles['video-default']} `}
            />
            <Button
              text="Button"
              link={props.fields.link}
              className={styles['button-default']}
            />
            <Textinput
              className={` ${styles['textinput']} ${styles['textinput-default']} `}
            />
            <Textarea
              className={` ${styles['textarea']} ${styles['textarea-default']} `}
            />
          </Container>
          <Radiobutton
            className={` ${styles['radiobutton']} ${styles['radiobutton-default']} `}
          />
          <Dropdown
            className={` ${styles['dropdown']} ${styles['dropdown-default']} `}
          />
          <Checkbox
            className={` ${styles['checkbox']} ${styles['checkbox-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

AllElements.defaultProps = {
  fields: {},
}

AllElements.propTypes = {
  fields: PropTypes.object,
}

export default AllElements
