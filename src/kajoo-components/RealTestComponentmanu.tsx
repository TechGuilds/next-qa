/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Link,
  RichText,
  Image,
  Radiobutton,
  Textinput,
  Button,
  Toggle,
  Textarea,
  Video,
} from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RealTestComponentmanu.module.css'

const RealTestComponentmanu = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Text
            text={props.text}
            tag="span"
            className={styles['paragraph-default']}
          />
          <Link
            href={props.href}
            target={props.target}
            rel={props.rel}
            text={props.text2}
            className={` ${styles['link']} ${styles['link-default']} `}
          />
        </Container>
        <Container className={styles['container2']}>
          <Text
            text={props.text1}
            tag="h1"
            className={styles['header-default']}
          />
          <RichText
            value={props.value}
            className={styles['richtext-default']}
          />
        </Container>
      </Container>
      <Container className={styles['container3']}>
        <Text
          text={props.text6}
          tag="h1"
          className={` ${styles['header-default']} ${styles['text2']} `}
        />
        <Container
          className={` ${styles['container4']} ${styles['container-default']} `}
        >
          <Image
            src={props.src}
            alt={props.alt}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
        </Container>
        <Text
          text={props.text7}
          tag="span"
          className={` ${styles['text3']} ${styles['paragraph-default']} `}
        />
      </Container>
      <Container
        className={` ${styles['container5']} ${styles['container-default']} `}
      >
        <Container
          className={` ${styles['container6']} ${styles['container-default']} `}
        >
          <Image
            src={props.src1}
            alt={props.alt1}
            className={styles['image-default']}
          />
          <form
            className={` ${styles['form']} ${styles['container-default']} `}
          >
            <Text
              text={props.text4}
              tag="label"
              className={styles['label-default']}
            />
            <Container className={styles['container7']}>
              <Radiobutton
                type={props.type}
                className={styles['radiobutton-default']}
              />
              <Textinput className={styles['textinput-default']} />
            </Container>
            <Button
              text={props.text5}
              link={props.link}
              className={styles['button-default']}
            />
            <Container className={styles['container8']}>
              <Toggle
                className={` ${styles['toggle']} ${styles['toggle-default']} `}
              />
              <Textarea
                className={` ${styles['textarea']} ${styles['textarea-default']} `}
              />
            </Container>
          </form>
          <Video
            src={props.src2}
            muted={props.muted}
            poster={props.poster}
            className={styles['video-default']}
          />
        </Container>
        <Text
          text={props.text3}
          tag="label"
          className={` ${styles['text5']} ${styles['label-default']} `}
        />
      </Container>
    </Container>
  )
}

RealTestComponentmanu.defaultProps = {
  rootClassName: '',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  href: '#',
  target: '_blank',
  rel: 'noreferrer noopener',
  text2: 'Link',
  text1: 'Heading',
  value:
    '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
  text6: 'Heading',
  src: 'https://realtimecanvas.kajoo.ca/icons/default-imag.svg',
  alt: 'default-kajoo-imag',
  text7:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  src1: 'https://realtimecanvas.kajoo.ca/icons/default-imag.svg',
  alt1: 'default-kajoo-imag',
  text4: 'Label',
  type: 'radio',
  text5: 'Button',
  link: '#',
  src2: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
  muted: 'true',
  poster: 'https://peach.blender.org/wp-content/uploads/bbb-splash.png?x81236',
  text3: 'Label',
}

RealTestComponentmanu.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  value: PropTypes.string,
  text6: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  text7: PropTypes.string,
  src1: PropTypes.string,
  alt1: PropTypes.string,
  text4: PropTypes.string,
  type: PropTypes.string,
  text5: PropTypes.string,
  link: PropTypes.string,
  src2: PropTypes.string,
  muted: PropTypes.string,
  poster: PropTypes.string,
  text3: PropTypes.string,
}

export default RealTestComponentmanu
