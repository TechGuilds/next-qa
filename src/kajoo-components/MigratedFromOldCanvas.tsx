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

import styles from './MigratedFromOldCanvas.module.css'

const MigratedFromOldCanvas = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Text text={props.text} className={styles['text']} />
        <Text text={props.text1} className={styles['text1']} />
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Image src={props.src} className={styles['image']} />
            <Text text={props.text2} className={styles['text2']} />
            <Button text={props.text3} className={styles['button']} />
          </Container>
          <Container className={styles['container3']}>
            <Image src={props.src1} className={styles['image1']} />
            <Text text={props.text4} className={styles['text3']} />
            <Button text={props.text5} className={styles['button1']} />
          </Container>
          <Container className={styles['container4']}>
            <Image src={props.src2} className={styles['image2']} />
            <Text text={props.text6} className={styles['text4']} />
            <Button text={props.text7} className={styles['button2']} />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

MigratedFromOldCanvas.defaultProps = {
  rootClassName: '',
  text: 'HEADER',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  src: '/graphics/default.png',
  text2:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text3: 'Button',
  src1: '/graphics/default.png',
  text4:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text5: 'Button',
  src2: '/graphics/default.png',
  text6:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text7: 'Button',
}

MigratedFromOldCanvas.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  src: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  src1: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  src2: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
}

export default MigratedFromOldCanvas
