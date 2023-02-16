/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Link,
  Button,
  Image,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './new-project-may-26-1.module.css'

const NewProjectMay261 = (props) => {
  return (
    <Container>
      <Container className={styles['whitepaper-thumbnail21160']}>
        <Container className={styles['text21161']}>
          <Text
            tag="span"
            text={props.fields.text_3_text}
            className={styles['text']}
          ></Text>
          <Container className={styles['container']}>
            <Text
              tag="span"
              text={props.fields.text_4_text}
              className={styles['text1']}
            ></Text>
            <Container className={styles['container1']}>
              <Link
                url="#"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link']}
              >
                <Link
                  href={props.fields.link_16_href}
                  target="_blank"
                  rel="noreferrer noopener"
                  text="Link"
                  className={styles['link1']}
                ></Link>
              </Link>
              <Button
                text={props.fields.button_13_text}
                className={` ${styles['button']} ${styles['csg-theme-button-button-121']} `}
              ></Button>
            </Container>
          </Container>
          <Container className={styles['logos21164']}>
            <Container className={styles['clientlogoplaceholder21165']}>
              <Image
                src={props.fields.image_7_src}
                alt={props.fields.image_7_alt}
                className={styles['image']}
              ></Image>
            </Container>
            <Container className={styles['clientlogoplaceholder21166']}>
              <Image
                src={props.fields.image_9_src}
                alt={props.fields.image_9_alt}
                className={styles['image1']}
              ></Image>
            </Container>
          </Container>
        </Container>
        <Container className={styles['iamge21167']}>
          <Container className={styles['transparentimage21168']}>
            <Image
              src={props.fields.image_12_src}
              alt={props.fields.image_12_alt}
              className={styles['image2']}
            ></Image>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewProjectMay261.defaultProps = {
  fields: {},
}

NewProjectMay261.propTypes = {
  fields: PropTypes.object,
}

export default NewProjectMay261
