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

import styles from './BlogList.module.css'

const Poiuyt = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/-jr2efm5XQZMpytnf1du8.png"
              alt="GlenOaksFuneralHome139550855"
              className={styles['image']}
            />
          </Container>
          <Container className={styles['container03']}>
            <Container className={styles['container04']}>
              <Container className={styles['container05']}>
                <Text
                  text="Glen Oaks Funeral Home &amp; Cemetery"
                  className={styles['text']}
                />
                <Text
                  text="7541 Hwy #50, Woodbridge Ontario, L4H 4W7"
                  className={styles['text1']}
                />
              </Container>
              <RichText
                value='&lt;span style="font-size: 14px; \nfont-family: Helvetica Neue; \nfont-style: normal; \nfont-weight: 400; \nfont-stretch: normal; \ncolor: rgba(87, 87, 87, 1); \nwidth: 404px; \nheight: auto; \ntext-align: left; \nline-height: 165.9999966621399%; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"&gt;&lt;span &gt;Funeral · Cremation  &lt;/span&gt;&lt;br /&gt;&lt;span &gt;Garden · Chapel Room · Parking&lt;/span&gt;&lt;/span&gt;'
                className={styles['richtext']}
              />
            </Container>
            <Container className={styles['container06']}>
              <Container className={styles['container07']}>
                <Container className={styles['container08']}>
                  <Container className={styles['container09']}>
                    <Image
                      src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/JcoqRukyqKyy5hluCrRP6.svg"
                      alt="GroupI13955086529977"
                      className={styles['image1']}
                    />
                  </Container>
                  <Text text="Call" className={styles['text2']} />
                </Container>
                <Container className={styles['container10']}>
                  <Image
                    src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/5DsZKw5FwHQgLZmD38LJR.svg"
                    alt="GroupI13955086724587"
                    className={styles['image2']}
                  />
                </Container>
              </Container>
              <Container className={styles['container11']}>
                <Container className={styles['container12']}>
                  <Container className={styles['container13']}>
                    <Image
                      src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/crZAk3llxf-XNUSUVNd7d.svg"
                      alt="GroupI139550870113046055"
                      className={styles['image3']}
                    />
                  </Container>
                  <Text text="Book Appointment" className={styles['text3']} />
                </Container>
                <Container className={styles['container14']}>
                  <Image
                    src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/2I3nX2gYESFJ6r8H1xHAq.svg"
                    alt="GroupI13955087224587"
                    className={styles['image4']}
                  />
                </Container>
              </Container>
              <Container className={styles['container15']}>
                <Text text="Visit Website" className={styles['text4']} />
                <Container className={styles['container16']}>
                  <Container className={styles['container17']}>
                    <Image
                      src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/Ec870Cb69404BgzGhhxio.svg"
                      alt="Group139550877"
                      className={styles['image5']}
                    />
                  </Container>
                  <Container className={styles['container18']}>
                    <Image
                      src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/tjVcEQGzFN-qIgoLcUGGN.svg"
                      alt="Group139550880"
                      className={styles['image6']}
                    />
                  </Container>
                  <Container className={styles['container19']}>
                    <Image
                      src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/zcbuzyVky1t1wts7lYCkl.svg"
                      alt="Group139550883"
                      className={styles['image7']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={styles['container20']}>
          <Image
            alt="Lineseperator139550886"
            src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/oIhmUxUDnUe7e2wxKQjlm.svg"
            className={styles['image8']}
          />
        </Container>
      </Container>
    </Container>
  )
}

Poiuyt.defaultProps = {
  rootClassName: '',
  fields: {},
}

Poiuyt.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Poiuyt
