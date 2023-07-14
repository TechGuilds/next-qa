/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  Button,
  Link,
  Video,
  Radiobutton,
} from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TestingANotherComponent.module.css'

const TestingANotherComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container bgImage={props.fields.bgImage} className={styles['container']}>
        <Container
          bgImage={props.fields.bgImage1}
          className={styles['container01']}
        >
          <Container
            bgImage={props.fields.bgImage2}
            className={styles['container02']}
          >
            <Text
              text={props.fields.text}
              tag="span"
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Image
              src={props.fields.src}
              alt={props.fields.alt}
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <Text
              text={props.fields.text1}
              tag="span"
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container
            bgImage={props.fields.bgImage3}
            className={styles['container03']}
          >
            <Container
              bgImage={props.fields.bgImage4}
              className={styles['container04']}
            >
              <Text
                text={props.fields.text2}
                tag="span"
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.fields.src1}
                alt={props.fields.alt1}
                className={` ${styles['image1']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.fields.text3}
              tag="span"
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container
            bgImage={props.fields.bgImage5}
            className={styles['container05']}
          >
            <Container
              bgImage={props.fields.bgImage6}
              className={styles['container06']}
            >
              <Text
                text={props.fields.text4}
                tag="span"
                className={` ${styles['text4']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.fields.src2}
                alt={props.fields.alt2}
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.fields.text5}
              tag="span"
              className={` ${styles['text5']} ${styles['paragraph-default']} `}
            />
          </Container>
        </Container>
        <Container
          bgImage={props.fields.bgImage7}
          className={styles['container07']}
        >
          <Container className={styles['container08']}>
            <Button
              link={props.fields.link}
              className={` ${styles['button']} ${styles['button-default']} `}
            />
            <Link href={props.fields.href} className={styles['link-default']} />
          </Container>
          <Container className={styles['container09']}>
            <Button
              link={props.fields.link1}
              className={` ${styles['button1']} ${styles['button-default']} `}
            />
            <Video
              src={props.fields.src3}
              muted="true"
              poster="https://peach.blender.org/wp-content/uploads/bbb-splash.png?x81236"
              className={styles['video-default']}
            />
          </Container>
          <Container className={styles['container10']}>
            <Button
              link={props.fields.link2}
              className={` ${styles['button2']} ${styles['button-default']} `}
            />
            <Radiobutton
              type="radio"
              className={styles['radiobutton-default']}
            />
            <Text
              text={props.fields.text10}
              tag="label"
              className={styles['label-default']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

TestingANotherComponent.defaultProps = {
  fields: {
    bgImage: '',
    bgImage1: '',
    bgImage2: '',
    text: 'HEADER',
    src: '/icons/default-imag.svg',
    alt: 'default-kajoo-imag',
    text1:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
    bgImage3: '',
    bgImage4: '',
    text2: 'HEADER',
    src1: '/icons/default-imag.svg',
    alt1: 'default-kajoo-imag',
    text3:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
    bgImage5: '',
    bgImage6: '',
    text4: 'HEADER',
    src2: '/icons/default-imag.svg',
    alt2: 'default-kajoo-imag',
    text5:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
    bgImage7: '',
    link: '#',
    text6: 'Button',
    href: '#',
    text7: 'Link',
    link1: '#',
    text8: 'Button',
    src3: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    link2: '#',
    text9: 'Button',
    text10: 'Label',
  },
  rootClassName: '',
}

TestingANotherComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default TestingANotherComponent
