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
              text={props.fields.text1}
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.fields.text6}
              className={styles['button-default']}
            />
          </Container>
          <Container className={styles['container3']}>
            <Container className={styles['container4']}>
              <Text
                text={props.fields.text2}
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Image
                src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/DGcnb9uRquJnutOWqpc-z.png"
                className={` ${styles['image1']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.fields.text3}
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.fields.text7}
              className={styles['button-default']}
            />
          </Container>
          <Container className={styles['container5']}>
            <Container className={styles['container6']}>
              <Text
                text={props.fields.text4}
                className={` ${styles['text4']} ${styles['paragraph-default']} `}
              />
              <Image
                src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/h4rdonl9G62rmAsjFYJII.png"
                tabIndex={1}
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text={props.fields.text5}
              className={` ${styles['text5']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.fields.text8}
              className={styles['button-default']}
            />
          </Container>
        </Container>
        <Container className={styles['container7']} />
      </Container>
    </Container>
  )
}

ProductErrorComponent.defaultProps = {
  rootClassName: '',
  fields: {},
}

ProductErrorComponent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ProductErrorComponent
