/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  RichText,
  Image,
  Video,
  Textinput,
  Textarea,
  Radiobutton,
  Link,
  Button,
  Dropdown,
  Checkbox,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AllElements13.module.css'

const AllElements13 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
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
          <Link
            href={props.fields.href}
            className={` ${styles['link']} ${styles['link-default']} `}
          />
          <Button
            text={props.fields.text4}
            className={styles['button-default']}
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

AllElements13.defaultProps = {
  rootClassName: '',
  fields: {},
}

AllElements13.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AllElements13
