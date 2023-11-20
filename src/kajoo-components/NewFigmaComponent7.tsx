/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent7.module.css'

const NewFigmaComponent7 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container
          bgImage="https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/ncsnCflo8fUs14r1AalS8.jpeg"
          className={styles['container01']}
        >
          <Container className={styles['container02']}>
            <Container className={styles['container03']}>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNTIwJyBoZWlnaHQ9JzEnIHZpZXdCb3g9JzAgMCA1MjAgMScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGxpbmUgeTE9JzAuNScgeDI9JzUyMCcgeTI9JzAuNScgc3Ryb2tlPScjQTBBOUFFJy8+Cjwvc3ZnPgo="
                alt="borderlineI2219"
                className={styles['image']}
              />
              <Text
                text="Environmental and Safety Lorem Ipsum"
                tag="span"
                className={styles['text']}
              />
            </Container>
            <Container className={styles['container04']}>
              <Container className={styles['container05']}>
                <Container className={styles['container06']}>
                  <Text
                    text="Water Safety"
                    tag="span"
                    className={styles['text1']}
                  />
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxMiAxMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGcgY2xpcC1wYXRoPSd1cmwoI2NsaXAwXzI4NTg3XzI3NiknPgo8cGF0aCBkPSdNMyAxMkgwTDMgNkwwIDBIM0w2IDZMMyAxMlonIGZpbGw9JyNCRUQ3M0QnLz4KPHBhdGggZD0nTTkgMTJINkw5IDZMNiAwSDlMMTIgNkw5IDEyWicgZmlsbD0nI0JFRDczRCcvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9J2NsaXAwXzI4NTg3XzI3Nic+CjxyZWN0IHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nd2hpdGUnLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                    alt="NWMOchevronI2219"
                    className={styles['image1']}
                  />
                </Container>
                <Text
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id purus mauris nunc aliquam odio sem consectetur tempor."
                  tag="span"
                  className={styles['text2']}
                />
              </Container>
              <Container className={styles['container07']}>
                <Container className={styles['container08']}>
                  <Text
                    text="Environmental Safety"
                    tag="span"
                    className={styles['text3']}
                  />
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxMiAxMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGcgY2xpcC1wYXRoPSd1cmwoI2NsaXAwXzI4NTg3XzI4MyknPgo8cGF0aCBkPSdNMyAxMkgwTDMgNkwwIDBIM0w2IDZMMyAxMlonIGZpbGw9JyNCRUQ3M0QnLz4KPHBhdGggZD0nTTkgMTJINkw5IDZMNiAwSDlMMTIgNkw5IDEyWicgZmlsbD0nI0JFRDczRCcvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9J2NsaXAwXzI4NTg3XzI4Myc+CjxyZWN0IHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nd2hpdGUnLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                    alt="NWMOchevronI2219"
                    className={styles['image2']}
                  />
                </Container>
                <Text
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id purus mauris nunc aliquam odio sem consectetur tempor."
                  tag="span"
                  className={styles['text4']}
                />
              </Container>
            </Container>
            <Container className={styles['container09']}>
              <Container className={styles['container10']}>
                <Text
                  text="Learn more"
                  tag="span"
                  className={styles['text5']}
                />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent7.defaultProps = {
  fields: {},
  rootClassName: '',
}

NewFigmaComponent7.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent7
