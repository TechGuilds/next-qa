/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BannerErrors.module.css'

const BannerErrors = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Image
            src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/JphHqXYOWLI0OIS2JdQgx.png"
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Container className={styles['container2']}>
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/JBqhg4wjNZGjQlpXkipjz.png"
              className={` ${styles['image1']} ${styles['image-default']} `}
            />
            <Text
              text={props.text}
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Image
            src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/C4OtNY2OLivVfxvMNsSzF.png"
            className={` ${styles['image2']} ${styles['image-default']} `}
          />
        </Container>
        <Container className={styles['container3']}>
          <Container />
        </Container>
      </Container>
    </Container>
  )
}

BannerErrors.defaultProps = {
  ByduTW5EuYRdb3YvNuNlO: '/icons/default-imag.svg',
  aSjTZhjGkNa_d8tynozWj: '/icons/default-imag.svg',
  U8bkn6DaHB0BxaVt7dwAu: '/icons/default-imag.svg',
  rootClassName: '',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
}

BannerErrors.propTypes = {
  ByduTW5EuYRdb3YvNuNlO: PropTypes.string,
  aSjTZhjGkNa_d8tynozWj: PropTypes.string,
  U8bkn6DaHB0BxaVt7dwAu: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default BannerErrors
