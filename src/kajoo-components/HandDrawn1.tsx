/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './HandDrawn1.module.css'

const HandDrawn1 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Image
            src={props.src}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Image
            src={props.src1}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Image
            src={props.src2}
            className={` ${styles['image2']} ${styles['image-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container2']} ${styles['container-default']} `}
        >
          <Text
            text={props.text}
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.text1}
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container3']} ${styles['container-default']} `}
        >
          <Button
            text={props.text2}
            className={` ${styles['button']} ${styles['button-default']} `}
          />
          <Button
            text={props.text3}
            className={` ${styles['button1']} ${styles['button-default']} `}
          />
          <Button
            text={props.text4}
            className={` ${styles['button2']} ${styles['button-default']} `}
          />
        </Container>
        <Text
          text={props.text5}
          className={` ${styles['text2']} ${styles['paragraph-default']} `}
        />
      </Container>
    </Container>
  )
}

HandDrawn1.defaultProps = {
  rootClassName: '',
  src: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/rSAVDJ8MD-2GW1sZo7F5n.png',
  src1: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/pbaqMffHDxeRVAMg0_Olp.png',
  src2: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/RDVvoU7q2VB8w6yhBdsGl.png',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text2: 'Button',
  text3: 'Button',
  text4: 'Button',
  text5:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
}

HandDrawn1.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  src1: PropTypes.string,
  src2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
}

export default HandDrawn1
