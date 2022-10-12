/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  RichText,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleTiles.module.css'

const AppleTiles = (props) => {
  return (
    <Container>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Container className={styles['container03']}>
              <Container className={styles['container04']}>
                <Image
                  src={props.fields.src}
                  alt={props.fields.alt}
                  className={styles['image']}
                />
                <Text text={props.fields.text} className={styles['text']} />
              </Container>
              <Text text={props.fields.text1} className={styles['text01']} />
            </Container>
            <Container className={styles['container05']}>
              <Container className={styles['container06']}>
                <Text text={props.fields.text2} className={styles['text02']} />
                <Container className={styles['container07']}>
                  <Container className={styles['container08']}>
                    <Image
                      src={props.fields.src1}
                      alt={props.fields.alt1}
                      className={styles['image01']}
                    />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container09']}>
                <Text text={props.fields.text3} className={styles['text03']} />
                <Container className={styles['container10']}>
                  <Container className={styles['container11']}>
                    <Image
                      src={props.fields.src2}
                      alt={props.fields.alt2}
                      className={styles['image02']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
          <Image
            src={props.fields.src3}
            alt={props.fields.alt3}
            className={styles['image03']}
          />
        </Container>
        <Container className={styles['container12']}>
          <Image
            src={props.fields.src4}
            alt={props.fields.alt4}
            className={styles['image04']}
          />
          <Container className={styles['container13']}>
            <Container className={styles['container14']}>
              <Container className={styles['container15']}>
                <Image
                  src={props.fields.src5}
                  alt={props.fields.alt5}
                  className={styles['image05']}
                />
                <Text text={props.fields.text4} className={styles['text04']} />
              </Container>
              <Text text={props.fields.text5} className={styles['text05']} />
            </Container>
            <Container className={styles['container16']}>
              <Container className={styles['container17']}>
                <Text text={props.fields.text6} className={styles['text06']} />
                <Container className={styles['container18']}>
                  <Container className={styles['container19']}>
                    <Image
                      src={props.fields.src6}
                      alt={props.fields.alt6}
                      className={styles['image06']}
                    />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container20']}>
                <Text text={props.fields.text7} className={styles['text07']} />
                <Container className={styles['container21']}>
                  <Container className={styles['container22']}>
                    <Image
                      src={props.fields.src7}
                      alt={props.fields.alt7}
                      className={styles['image07']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={styles['container23']}>
          <Container className={styles['container24']}>
            <Container className={styles['container25']}>
              <Container className={styles['container26']}>
                <Image
                  src={props.fields.src8}
                  alt={props.fields.alt8}
                  className={styles['image08']}
                />
                <Container className={styles['container27']}>
                  <Text
                    text={props.fields.text8}
                    className={styles['text08']}
                  />
                  <Text
                    text={props.fields.text9}
                    className={styles['text09']}
                  />
                </Container>
              </Container>
            </Container>
            <Container className={styles['container28']}>
              <Container className={styles['container29']}>
                <Text text={props.fields.text10} className={styles['text10']} />
                <Container className={styles['container30']}>
                  <Container className={styles['container31']}>
                    <Image
                      src={props.fields.src9}
                      alt={props.fields.alt9}
                      className={styles['image09']}
                    />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container32']}>
                <Text text={props.fields.text11} className={styles['text11']} />
                <Container className={styles['container33']}>
                  <Container className={styles['container34']}>
                    <Image
                      src={props.fields.src10}
                      alt={props.fields.alt10}
                      className={styles['image10']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
          <Image
            src={props.fields.src11}
            alt={props.fields.alt11}
            className={styles['image11']}
          />
        </Container>
        <Container className={styles['container35']}>
          <Image
            src={props.fields.src12}
            alt={props.fields.alt12}
            className={styles['image12']}
          />
          <Container className={styles['container36']}>
            <Container className={styles['container37']}>
              <Container className={styles['container38']}>
                <Image
                  src={props.fields.src13}
                  alt={props.fields.alt13}
                  className={styles['image13']}
                />
                <Text text={props.fields.text12} className={styles['text12']} />
              </Container>
              <Text text={props.fields.text13} className={styles['text13']} />
            </Container>
            <Container className={styles['container39']}>
              <Container className={styles['container40']}>
                <Text text={props.fields.text14} className={styles['text14']} />
                <Container className={styles['container41']}>
                  <Container className={styles['container42']}>
                    <Image
                      src={props.fields.src14}
                      alt={props.fields.alt14}
                      className={styles['image14']}
                    />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container43']}>
                <Text text={props.fields.text15} className={styles['text15']} />
                <Container className={styles['container44']}>
                  <Container className={styles['container45']}>
                    <Image
                      src={props.fields.src15}
                      alt={props.fields.alt15}
                      className={styles['image15']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={styles['container46']}>
          <Image
            src={props.fields.src16}
            alt={props.fields.alt16}
            className={styles['image16']}
          />
          <Container className={styles['container47']}>
            <Container className={styles['container48']}>
              <Container className={styles['container49']}>
                <Image
                  src={props.fields.src17}
                  alt={props.fields.alt17}
                  className={styles['image17']}
                />
                <Container className={styles['container50']}>
                  <Text
                    text={props.fields.text16}
                    className={styles['text16']}
                  />
                  <Text
                    text={props.fields.text17}
                    className={styles['text17']}
                  />
                </Container>
              </Container>
            </Container>
            <Container className={styles['container51']}>
              <Container className={styles['container52']}>
                <Text text={props.fields.text18} className={styles['text18']} />
                <Container className={styles['container53']}>
                  <Container className={styles['container54']}>
                    <Image
                      src={props.fields.src18}
                      alt={props.fields.alt18}
                      className={styles['image18']}
                    />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container55']}>
                <Text text={props.fields.text19} className={styles['text19']} />
                <Container className={styles['container56']}>
                  <Container className={styles['container57']}>
                    <Image
                      src={props.fields.src19}
                      alt={props.fields.alt19}
                      className={styles['image19']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
          <Text text={props.fields.text20} className={styles['text20']} />
        </Container>
        <Container className={styles['container58']}>
          <Container className={styles['container59']}>
            <Container className={styles['container60']}>
              <RichText
                value={props.fields.value}
                className={styles['richtext']}
              />
              <Container className={styles['container61']}>
                <Text text={props.fields.text21} className={styles['text21']} />
                <Text text={props.fields.text22} className={styles['text22']} />
              </Container>
            </Container>
            <Container className={styles['container62']}>
              <Container className={styles['container63']}>
                <Text text={props.fields.text23} className={styles['text23']} />
                <Container className={styles['container64']}>
                  <Container className={styles['container65']}>
                    <Image
                      src={props.fields.src20}
                      alt={props.fields.alt20}
                      className={styles['image20']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
          <Image
            src={props.fields.src21}
            alt={props.fields.alt21}
            className={styles['image21']}
          />
        </Container>
      </Container>
    </Container>
  )
}

AppleTiles.defaultProps = {
  fields: {},
}

AppleTiles.propTypes = {
  fields: PropTypes.object,
}

export default AppleTiles
