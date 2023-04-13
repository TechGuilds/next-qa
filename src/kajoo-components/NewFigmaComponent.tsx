/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  RichText,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Container className={styles['container03']}>
              <Image
                src={props.src}
                alt={props.alt}
                className={styles['image']}
              />
              <Image
                src={props.src1}
                alt={props.alt1}
                className={styles['image01']}
              />
            </Container>
            <Container className={styles['container04']}>
              <Text text={props.text} className={styles['text']} />
              <Image
                src={props.src2}
                alt={props.alt2}
                className={styles['image02']}
              />
            </Container>
          </Container>
          <Image
            alt={props.alt3}
            src={props.src3}
            className={styles['image03']}
          />
        </Container>
        <Container className={styles['container05']}>
          <Container className={styles['container06']}>
            <Container className={styles['container07']}>
              <Container className={styles['container08']}>
                <Container className={styles['container09']}>
                  <Text text={props.text1} className={styles['text01']} />
                  <RichText
                    value={props.value}
                    className={styles['richtext']}
                  />
                </Container>
                <Container className={styles['container10']}>
                  <Text text={props.text2} className={styles['text02']} />
                  <Image
                    src={props.src4}
                    alt={props.alt4}
                    className={styles['image04']}
                  />
                </Container>
              </Container>
              <Container className={styles['container11']}>
                <Image
                  src={props.src5}
                  alt={props.alt5}
                  className={styles['image05']}
                />
                <Image
                  src={props.src6}
                  alt={props.alt6}
                  className={styles['image06']}
                />
                <Image
                  src={props.src7}
                  alt={props.alt7}
                  className={styles['image07']}
                />
                <Image
                  src={props.src8}
                  alt={props.alt8}
                  className={styles['image08']}
                />
                <Image
                  src={props.src9}
                  alt={props.alt9}
                  className={styles['image09']}
                />
              </Container>
            </Container>
            <Container className={styles['container12']}>
              <Text text={props.text3} className={styles['text03']} />
              <Container className={styles['container13']}>
                <Text text={props.text4} className={styles['text04']} />
                <Text text={props.text5} className={styles['text05']} />
                <Text text={props.text6} className={styles['text06']} />
                <Text text={props.text7} className={styles['text07']} />
                <Text text={props.text8} className={styles['text08']} />
              </Container>
            </Container>
            <Container className={styles['container14']}>
              <Text text={props.text9} className={styles['text09']} />
              <Container className={styles['container15']}>
                <Text text={props.text10} className={styles['text10']} />
                <Text text={props.text11} className={styles['text11']} />
                <Text text={props.text12} className={styles['text12']} />
                <Text text={props.text13} className={styles['text13']} />
                <Text text={props.text14} className={styles['text14']} />
              </Container>
            </Container>
          </Container>
          <Container className={styles['container16']}>
            <Container className={styles['container17']}>
              <Text text={props.text15} className={styles['text15']} />
              <Text text={props.text16} className={styles['text16']} />
            </Container>
            <Container className={styles['container18']}>
              <Container className={styles['container19']}>
                <Container className={styles['container20']}>
                  <Text text={props.text17} className={styles['text17']} />
                </Container>
                <Container className={styles['container21']}>
                  <Text text={props.text18} className={styles['text18']} />
                </Container>
              </Container>
              <Container className={styles['container22']}>
                <Container className={styles['container23']}>
                  <Text text={props.text19} className={styles['text19']} />
                </Container>
              </Container>
              <Container>
                <Button className={styles['button']} />
                <Text text={props.text20} className={styles['text20']} />
              </Container>
            </Container>
            <Container className={styles['container25']}>
              <Container className={styles['container26']}>
                <Text text={props.text21} className={styles['text21']} />
                <Container className={styles['container27']}>
                  <Container className={styles['container28']}>
                    <Container className={styles['container29']}>
                      <Image
                        src={props.src10}
                        alt={props.alt10}
                        className={styles['image10']}
                      />
                      <Text text={props.text22} className={styles['text22']} />
                    </Container>
                    <Container className={styles['container30']}>
                      <Image
                        src={props.src11}
                        alt={props.alt11}
                        className={styles['image11']}
                      />
                      <Text text={props.text23} className={styles['text23']} />
                    </Container>
                    <Container className={styles['container31']}>
                      <Image
                        src={props.src12}
                        alt={props.alt12}
                        className={styles['image12']}
                      />
                      <Text text={props.text24} className={styles['text24']} />
                    </Container>
                    <Container className={styles['container32']}>
                      <Image
                        src={props.src13}
                        alt={props.alt13}
                        className={styles['image13']}
                      />
                      <Text text={props.text25} className={styles['text25']} />
                    </Container>
                  </Container>
                  <Container className={styles['container33']}>
                    <Container className={styles['container34']}>
                      <Image
                        src={props.src14}
                        alt={props.alt14}
                        className={styles['image14']}
                      />
                      <Text text={props.text26} className={styles['text26']} />
                    </Container>
                  </Container>
                </Container>
              </Container>
              <RichText value={props.value1} className={styles['richtext1']} />
            </Container>
          </Container>
        </Container>
        <Container className={styles['container35']}>
          <Image
            alt={props.alt15}
            src={props.src15}
            className={styles['image15']}
          />
          <Text text={props.text27} className={styles['text27']} />
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  rootClassName: '',
  src: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/S_U9sRINcgBlL4Hp-OMOS.svg',
  alt: 'Group1245045273',
  src1: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/D6GKEnBxUG8ewMGUN0ZDq.svg',
  alt1: 'Group1245045344',
  text: 'Back to top',
  src2: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/1lVKlT_PGrjOGdfQ3O5X6.svg',
  alt2: 'ArrowUpwardFilled1245045351',
  alt3: 'borderline1245045352',
  src3: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/1mksXpCJaRzKXq4qLb76W.svg',
  text1: 'Contact',
  value:
    '<span style="font-size: 14px; \nfont-family: Helvetica Neue LT Std; \nfont-style: normal; \nfont-weight: 700; \nfont-stretch: normal; \ncolor: rgba(255, 255, 255, 1); \nwidth: 240px; \nheight: auto; \ntext-align: left; \nline-height: 20px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span style="color: rgba(255, 255, 255, 1); \nwidth: 240px; \nheight: auto; \nfont-weight: 700; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">Phone:</span><span style="color: rgba(255, 255, 255, 1); \nwidth: 240px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span > 416-934-9814</span><br /><span /></span><span style="color: rgba(255, 255, 255, 1); \nwidth: 240px; \nheight: auto; \nfont-weight: 700; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">Toll-free:</span><span style="color: rgba(255, 255, 255, 1); \nwidth: 240px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span > 1-866-249-6966</span><br /><span /></span><span style="color: rgba(255, 255, 255, 1); \nwidth: 240px; \nheight: auto; \nfont-weight: 700; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">Email:</span><span style="color: rgba(255, 255, 255, 1); \nwidth: 240px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"> contactus@nwmo.ca</span></span>',
  text2: 'Engaging with NWMO',
  src4: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/5dLo198EWMpHE0-RJPFsA.svg',
  alt4: 'NWMOchevronI12450453601112153387',
  src5: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/BxJgjou1MsEfndNMVVdfw.svg',
  alt5: 'facebook1245045362',
  src6: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/vnphjjJGp1OTPlLvcFGwJ.svg',
  alt6: 'instagram1245045363',
  src7: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/Xdzhpi728BdkylSVxim16.svg',
  alt7: 'linkedin1245045364',
  src8: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/5Rq1lOm9BtLYUXnKIeL2C.svg',
  alt8: 'twitter1245045365',
  src9: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/RV7jJ2F5j1l0wkcWG32dX.svg',
  alt9: 'youtube1245045366',
  text3: 'Resources',
  text4: 'Media Center',
  text5: 'Latest News',
  text6: 'Ignace and WLON Area',
  text7: 'South Bruce and SON Area',
  text8: 'Find a Community Office',
  text9: 'Support',
  text10: 'Accessibility',
  text11: 'FAQ',
  text12: 'Privacy',
  text13: 'Terms of Use',
  text14: 'Sitemap',
  text15: 'Subscribe',
  text16: 'Join our newsletters to stay up to date on news and events.',
  text17: 'Enter your ... ',
  text18: 'Enter your ...',
  text19: 'Enter your email',
  text20: 'Subscribe',
  text21: 'Choose newsletters to subscribe to:',
  src10:
    'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/1FJh62AiFzjOGEDaAuiTq.svg',
  alt10: 'CheckBoxFilled1245045403',
  text22: 'All',
  src11:
    'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/UV8jYjZtAZFD6WxJWbxOw.svg',
  alt11: 'CheckBoxOutlineBlankFilled1245045406',
  text23: 'Lorem ipsum',
  src12:
    'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/2PMbgAM4Qu6KLzudoEx8Q.svg',
  alt12: 'CheckBoxOutlineBlankFilled1245045409',
  text24: 'Lorem ipsum',
  src13:
    'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/_BvX_v2KGBseBayYjGiS2.svg',
  alt13: 'CheckBoxOutlineBlankFilled1245045412',
  text25: 'Lorem ipsum',
  src14:
    'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/goGHF7Tc1grxMKhqDuE-H.svg',
  alt14: 'CheckBoxOutlineBlankFilled1245045416',
  text26: 'Lorem ipsum',
  value1:
    '<span style="color: rgba(255, 255, 255, 1); \nwidth: 481px; \nheight: auto; \nfont-weight: 400; \nfont-family: Helvetica Neue LT Std; \ntext-align: left; \nline-height: 18px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span style="color: rgba(255, 255, 255, 1); \nwidth: 481px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">By subscribing you agree to with our </span><span style="color: rgba(255, 255, 255, 1); \nwidth: 481px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: underline; \n">Privacy Policy</span><span style="color: rgba(255, 255, 255, 1); \nwidth: 481px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"> and provide consent to receive updates from us.</span></span>',
  alt15: 'borderline1245045420',
  src15:
    'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/thXHtNeLD-ztIfH_5F2f8.svg',
  text27: '© 2022 Nuclear Waste Management Organization',
}

NewFigmaComponent.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  src1: PropTypes.string,
  alt1: PropTypes.string,
  text: PropTypes.string,
  src2: PropTypes.string,
  alt2: PropTypes.string,
  alt3: PropTypes.string,
  src3: PropTypes.string,
  text1: PropTypes.string,
  value: PropTypes.string,
  text2: PropTypes.string,
  src4: PropTypes.string,
  alt4: PropTypes.string,
  src5: PropTypes.string,
  alt5: PropTypes.string,
  src6: PropTypes.string,
  alt6: PropTypes.string,
  src7: PropTypes.string,
  alt7: PropTypes.string,
  src8: PropTypes.string,
  alt8: PropTypes.string,
  src9: PropTypes.string,
  alt9: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  text15: PropTypes.string,
  text16: PropTypes.string,
  text17: PropTypes.string,
  text18: PropTypes.string,
  text19: PropTypes.string,
  text20: PropTypes.string,
  text21: PropTypes.string,
  src10: PropTypes.string,
  alt10: PropTypes.string,
  text22: PropTypes.string,
  src11: PropTypes.string,
  alt11: PropTypes.string,
  text23: PropTypes.string,
  src12: PropTypes.string,
  alt12: PropTypes.string,
  text24: PropTypes.string,
  src13: PropTypes.string,
  alt13: PropTypes.string,
  text25: PropTypes.string,
  src14: PropTypes.string,
  alt14: PropTypes.string,
  text26: PropTypes.string,
  value1: PropTypes.string,
  alt15: PropTypes.string,
  src15: PropTypes.string,
  text27: PropTypes.string,
}

export default NewFigmaComponent
