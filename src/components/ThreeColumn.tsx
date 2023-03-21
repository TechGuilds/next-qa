/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import ThreeColumnTest from '../kajoo-components/ThreeColumnTest'
import styles from './ThreeColumn.module.css'

const ThreeColumn = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container
          className={` ${styles['container01']} ${styles['container-default']} `}
        >
          <Container className={styles['container02']}>
            <Container
              className={` ${styles['container03']} ${styles['container-default']} `}
            >
              <Text
                text={props.fields.text}
                className={` ${styles['text']} ${styles['paragraph-default']} `}
              />
              <Image
                src={props.fields.src}
                className={` ${styles['image']} ${styles['image-default']} `}
              />
              <Text
                text={props.fields.text1}
                tabIndex="1"
                className={` ${styles['text1']} ${styles['paragraph-default']} `}
              />
            </Container>
            <Button
              text={props.fields.text6}
              className={` ${styles['button']} ${styles['button-default']} `}
            />
          </Container>
          <Container className={styles['container04']}>
            <Image
              src={props.fields.src2}
              className={` ${styles['image1']} ${styles['image-default']} `}
            />
            <ThreeColumnTest rootClassName="root-class-name" />
          </Container>
          <Container
            className={` ${styles['container05']} ${styles['container-default']} `}
          >
            <Container
              className={` ${styles['container06']} ${styles['container-default']} `}
            >
              <Text
                text={props.fields.text2}
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
            </Container>
            <Text
              text={props.fields.text3}
              tabIndex="-1"
              aria-activedescendant="2"
              aria-required="true"
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.fields.text7}
              className={` ${styles['button1']} ${styles['button-default']} `}
            />
            <Image
              src={props.fields.src1}
              className={` ${styles['image2']} ${styles['image-default']} `}
            />
          </Container>
          <Container
            className={` ${styles['container07']} ${styles['container-default']} `}
          >
            <Container
              className={` ${styles['container08']} ${styles['container-default']} `}
            >
              <Text
                text={props.fields.text4}
                className={` ${styles['text4']} ${styles['paragraph-default']} `}
              />
            </Container>
            <Text
              text={props.fields.text5}
              tabIndex="3"
              className={` ${styles['text5']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.fields.text8}
              className={` ${styles['button2']} ${styles['button-default']} `}
            />
          </Container>
        </Container>
        <Container
          className={` ${styles['container09']} ${styles['container-default']} `}
        />
      </Container>
    </Container>
  )
}

ThreeColumn.defaultProps = {
  rootClassName: '',
  fields: {},
}

ThreeColumn.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ThreeColumn
