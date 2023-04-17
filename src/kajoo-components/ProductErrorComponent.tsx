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

import styles from './ProductErrorComponent.module.css'

const ProductErrorComponent = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container tabIndex={2} className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text
              text="HEADER"
              tag="p"
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/tUvdjzaGOKjExNEn6min4.png"
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <Text
              text={props.text1}
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
            <Button text={props.text6} className={styles['button-default']} />
          </Container>
          <Container className={styles['container3']}>
            <Container className={styles['container4']}>
              <Text
                text={props.text2}
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Image
                src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/DGcnb9uRquJnutOWqpc-z.png"
                className={` ${styles['image1']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.text3}
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
            <Button text={props.text7} className={styles['button-default']} />
          </Container>
          <Container className={styles['container5']}>
            <Container className={styles['container6']}>
              <Text
                text={props.text4}
                className={` ${styles['text4']} ${styles['paragraph-default']} `}
              />
              <Image
                src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/h4rdonl9G62rmAsjFYJII.png"
                tabIndex={1}
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.text5}
              className={` ${styles['text5']} ${styles['paragraph-default']} `}
            />
            <Button text={props.text8} className={styles['button-default']} />
          </Container>
        </Container>
        <Container className={styles['container7']} />
      </Container>
    </Container>
  )
}

ProductErrorComponent.defaultProps = {
  cZZL4mNvUye4ybEBKmjWj: 'HEADER',
  Y0vNxu8DgSjIgXPvdz3my: '/icons/default-imag.svg',
  y3fLM5U7SvX9c2IX_G2ej: '/icons/default-imag.svg',
  uVGcCm206w8vxHMWAkaZs: '/icons/default-imag.svg',
  rootClassName: '',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text6: 'Button',
  text2: 'HEADER',
  text3:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text7: 'Button',
  text4: 'HEADER',
  text5:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text8: 'Button',
}

ProductErrorComponent.propTypes = {
  cZZL4mNvUye4ybEBKmjWj: PropTypes.string,
  Y0vNxu8DgSjIgXPvdz3my: PropTypes.string,
  y3fLM5U7SvX9c2IX_G2ej: PropTypes.string,
  uVGcCm206w8vxHMWAkaZs: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text8: PropTypes.string,
}

export default ProductErrorComponent
