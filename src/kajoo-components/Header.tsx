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

import styles from './Header.module.css'

const AppHeader = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Image
            src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/Z8rCupC4gy_pFQoYxJCUv.png"
            alt="Company Logo"
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Text
            text={props.text}
            tag="span"
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Text
          text={props.text1}
          tag="h1"
          className={` ${styles['text1']} ${styles['paragraph-default']} `}
        />
        <Button
          text={props.text2}
          link={props.link}
          className={` ${styles['button']} ${styles['button-default']} `}
        />
      </Container>
      <Image
        src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/Z8rCupC4gy_pFQoYxJCUv.png"
        alt="Company Logo"
        className={` ${styles['image1']} ${styles['image-default']} `}
      />
      <Image
        src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/Z8rCupC4gy_pFQoYxJCUv.png"
        alt="Company Logo"
        className={` ${styles['image2']} ${styles['image-default']} `}
      />
    </Container>
  )
}

AppHeader.defaultProps = {
  'DLdZjEukL5d-UR-BsStg7': 'https://qa-app.kajoo.ca/icons/default-imag.svg',
  VjJkOkcW55jY33rPoGIck: '',
  rootClassName: '',
  text: 'Some Random Company',
  text1: 'Heading',
  text2: 'Button',
  link: '',
}

AppHeader.propTypes = {
  'DLdZjEukL5d-UR-BsStg7': PropTypes.string,
  VjJkOkcW55jY33rPoGIck: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  link: PropTypes.string,
}

export default AppHeader
