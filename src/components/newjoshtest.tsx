/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  RichText,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './newjoshtest.module.css'

const ProductCardRepeater = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container02']}>
              <Text text="Heading" tag="h1" className={styles['text']} />
              <Container className={styles['container03']}>
                <Image
                  src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/tEnV-LhahldOA5kmM2FZG.png"
                  className={` ${styles['image']} ${styles['acece83e7e5d4e62c6a6c']} `}
                />
                <Text
                  text="Hello there I am test text"
                  tag="span"
                  className={styles['text1']}
                />
                <RichText
                  value="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
                  className={styles['richtext']}
                />
              </Container>
            </Container>
          </Container>
        ))}
      </Container>
      <Container className={styles['container04']}>
        <Container className={styles['container05']}>
          <Container className={styles['container06']}>
            <Container className={styles['container07']}>
              <Text text={props.fields.Title} className={styles['text2']} />
              <Container className={styles['container08']}>
                <Text text={props.fields.Title} className={styles['text3']} />
              </Container>
            </Container>
            <Container className={styles['container09']}>
              <Container className={styles['container10']}>
                <Container className={styles['container11']}>
                  <Image
                    src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/CRWGiE_dEU4wd5MPOnvWB.svg"
                    className={styles['image1']}
                  />
                  <Text text={props.fields.Title} className={styles['text4']} />
                </Container>
                <Container className={styles['container12']}>
                  <Container className={styles['container13']}>
                    <Text text="50-79" className={styles['text5']} />
                    <Text text="min" className={styles['text6']} />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container14']}>
                <Container className={styles['container15']}>
                  <Container className={styles['container16']}>
                    <Image
                      src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/GRIcH8XoRPM72-hmHKNYT.svg"
                      className={styles['image2']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container
          bgImage={props.fields.bgImage}
          className={styles['container17']}
        />
        <Container className={styles['container18']}>
          <Container className={styles['container19']} />
          <Text text="50%" className={styles['text7']} />
        </Container>
      </Container>
    </Container>
  )
}

ProductCardRepeater.defaultProps = {
  rootClassName: '',
  fields: {},
}

ProductCardRepeater.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ProductCardRepeater
