/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Container className={styles['container03']}>
              <Text
                tag="span"
                text="How we can help"
                className={styles['text']}
              />
              <Container className={styles['container04']}>
                <Text
                  tag="span"
                  text="Planning Ahead"
                  className={styles['text1']}
                />
                <Text
                  tag="span"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  className={styles['text2']}
                />
              </Container>
            </Container>
            <Container className={styles['container05']}>
              <Container className={styles['container06']}>
                <Text
                  tag="span"
                  text="Learn More"
                  className={styles['text3']}
                />
              </Container>
              <Container className={styles['container07']}>
                <Text
                  tag="span"
                  text="Start Planning"
                  className={styles['text4']}
                />
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={styles['container08']}>
          <Container className={styles['container09']}>
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/stage/orgs/61c661b27e969b2acad92083/assets/Xopl9i-cdPk7iLhTLIL5e.png"
              alt="ScreenShot20210805at120134082701"
              className={styles['image']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  fields: {},
  rootClassName: '',
}

NewFigmaComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent
