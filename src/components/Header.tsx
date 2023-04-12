/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Header.module.css'

const AppHeader = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Container
          className={` ${styles['container01']} ${styles['container-default']} `}
        >
          <Container
            className={` ${styles['container02']} ${styles['container-default']} `}
          >
            <Image
              src={props.fields.src2}
              alt={props.fields.alt2}
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <Text
              text={props.fields.text5}
              tag="span"
              className={` ${styles['text']} ${styles['text-boldblacktext']} `}
            />
          </Container>
          <Container
            className={` ${styles['container03']} ${styles['container-default']} `}
          >
            <Image
              src={props.fields.src3}
              alt={props.fields.alt3}
              className={` ${styles['image1']} ${styles['image-default']} `}
            />
            <Text
              text={props.fields.text6}
              tag="span"
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container className={styles['container04']}>
            <Container
              className={` ${styles['container05']} ${styles['container-default']} `}
            >
              <Image
                src={props.fields.src4}
                alt={props.fields.alt4}
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.fields.text7}
              tag="span"
              className={` ${styles['text2']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container
            className={` ${styles['container06']} ${styles['container-default']} `}
          >
            <Image
              src={props.fields.src5}
              alt={props.fields.alt5}
              className={` ${styles['image3']} ${styles['image-default']} `}
            />
            <Text
              text={props.fields.text8}
              tag="span"
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Container
            className={` ${styles['container07']} ${styles['container-default']} `}
          >
            <Image
              src={props.fields.src6}
              alt={props.fields.alt6}
              className={` ${styles['image4']} ${styles['image-default']} `}
            />
            <Text
              text={props.fields.text9}
              tag="span"
              className={` ${styles['text4']} ${styles['paragraph-default']} `}
            />
          </Container>
        </Container>
        <Container
          className={` ${styles['container08']} ${styles['container-default']} `}
        >
          <Image
            src={props.fields.src7}
            alt={props.fields.alt7}
            className={` ${styles['image5']} ${styles['image-default']} `}
          />
          <Container className={styles['container09']}>
            <Container
              className={` ${styles['container10']} ${styles['container-default']} `}
            >
              <Container
                className={` ${styles['container11']} ${styles['container-default']} `}
              >
                <Image
                  src={props.fields.src1}
                  alt={props.fields.alt1}
                  className={` ${styles['image6']} ${styles['image-default']} `}
                />
              </Container>
              <Text
                text={props.fields.text}
                tag="span"
                className={` ${styles['text5']} ${styles['paragraph-default']} `}
              />
            </Container>
            <Container
              className={` ${styles['container12']} ${styles['container-default']} `}
            >
              <Container
                className={` ${styles['container13']} ${styles['container-default']} `}
              >
                <Image
                  src={props.fields.src}
                  alt={props.fields.alt}
                  className={` ${styles['image7']} ${styles['image-default']} `}
                />
              </Container>
              <Text
                text={props.fields.text1}
                tag="span"
                className={` ${styles['text6']} ${styles['paragraph-default']} `}
              />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AppHeader.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppHeader.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppHeader
