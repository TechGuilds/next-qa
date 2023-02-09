/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ThreeColumnBindTest1.module.css'

const ThreeColumnBindTest1 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Image
            src={props.fields.src7}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Text
            text="HEADER"
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Text
            text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container2']} ${styles['container-default']} `}
        >
          <Image
            src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/NSrpw0hDZEw2WDyWwiBgB1.png"
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Text
            text="HEADER"
            className={` ${styles['text2']} ${styles['paragraph-default']} `}
          />
          <Text
            text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
            className={` ${styles['text3']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container3']} ${styles['container-default']} `}
        >
          <Image
            src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/Cpg0bGxG52wtUDpVIiLbv.png"
            className={` ${styles['image2']} ${styles['image-default']} `}
          />
          <Text
            text="HEADER"
            className={` ${styles['text4']} ${styles['paragraph-default']} `}
          />
          <Text
            text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
            className={` ${styles['text5']} ${styles['paragraph-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

ThreeColumnBindTest1.defaultProps = {
  rootClassName: '',
  fields: {},
}

ThreeColumnBindTest1.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ThreeColumnBindTest1
