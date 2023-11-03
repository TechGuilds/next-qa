/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './CorporateFooter.module.css'

const CorporateFooter = (props) => {
  return (
    <Container
      tag="footer"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    >
      <Container tag="div" className={styles['container']}>
        <Container tag="div" className={styles['container1']}>
          <Container tag="div" className={styles['container2']}>
            <h2 className={styles['html-element']}>
              <Text tag="span" text={props.fields.text} />
            </h2>
            <p className={styles['html-element01']}>
              <Text tag="span" text={props.fields.text1} />
              <br className={styles['html-element02']} />
              <Text tag="span" text={props.fields.text2} />
              <br className={styles['html-element03']} />
              <Text tag="span" text={props.fields.text3} />
              <br className={styles['html-element04']} />
              <span className={styles['html-element05']}>
                <Text tag="span" text={props.fields.text4} />
              </span>
            </p>
          </Container>
          <Container tag="div" className={styles['container3']}>
            <a
              aria-label="Book a Tour"
              href="https://www.amica.ca/book-a-visit"
              onclick="location.href='/Amica/CTA/CTAClick/CallToActionClick?itemId=B0A15FB413C74C45AACA10CEC578BE4E'"
              className={styles['html-element06']}
            >
              <Text tag="span" text={props.fields.text5} />
            </a>
            <a
              aria-label="Get In Touch"
              href="https://www.amica.ca/get-in-touch"
              onclick="location.href='/Amica/CTA/CTAClick/CallToActionClick?itemId=71B40F001FEA4F95B084C923967C339E'"
              className={styles['html-element07']}
            >
              <Text tag="span" text={props.fields.text6} />
            </a>
          </Container>
          <hr className={styles['html-element08']} />
          <ul className={styles['html-element09']}>
            <li className={styles['html-element10']}>
              <a
                href="https://www.amica.ca/amica-difference/about-amica"
                target
                className={styles['html-element11']}
              >
                <Text tag="span" text={props.fields.text7} />
              </a>
            </li>
            <li className={styles['html-element12']}>
              <a
                href="https://www.amica.ca/careers"
                target
                className={styles['html-element13']}
              >
                <Text tag="span" text={props.fields.text8} />
              </a>
            </li>
            <li className={styles['html-element14']}>
              <a
                href="https://www.amica.ca/healthcare-professionals"
                target
                className={styles['html-element15']}
              >
                <Text tag="span" text={props.fields.text9} />
              </a>
            </li>
            <li className={styles['html-element16']}>
              <a
                href="https://www.amica.ca/helping-hands-charity"
                target
                className={styles['html-element17']}
              >
                <Text tag="span" text={props.fields.text10} />
              </a>
            </li>
            <li className={styles['html-element18']}>
              <a
                href="https://www.amica.ca/press"
                target
                className={styles['html-element19']}
              >
                <Text tag="span" text={props.fields.text11} />
              </a>
            </li>
          </ul>
          <hr className={styles['html-element20']} />
          <Container tag="div" className={styles['container4']}>
            <h2 className={styles['html-element21']}>
              <Text tag="span" text={props.fields.text12} />
            </h2>
            <Container tag="div" className={styles['container5']}>
              <Container tag="div" className={styles['container6']}>
                <a
                  id="facebook"
                  href="https://www.facebook.com/AmicaSeniorLifestyles/"
                  className={styles['html-element22']}
                >
                  <Image
                    tag="img"
                    src={props.fields.src}
                    alt={props.fields.alt}
                    height="25"
                    width="25"
                    className={styles['image']}
                  />
                </a>
                <a
                  id="linkedin"
                  href="https://www.linkedin.com/company/amica-senior-lifestyles/"
                  className={styles['html-element23']}
                >
                  <Image
                    tag="img"
                    src={props.fields.src1}
                    alt={props.fields.alt1}
                    height="25"
                    width="25"
                    className={styles['image1']}
                  />
                </a>
                <a
                  id="instagram"
                  href="https://www.instagram.com/amicaseniorlifestyles/"
                  className={styles['html-element24']}
                >
                  <Image
                    tag="img"
                    src={props.fields.src2}
                    alt={props.fields.alt2}
                    height="25"
                    width="25"
                    className={styles['image2']}
                  />
                </a>
                <a
                  id="youtube"
                  href="https://www.youtube.com/channel/UCXyqMibqd9ppUjdR_OzH2AQ/featured"
                  className={styles['html-element25']}
                >
                  <Image
                    tag="img"
                    src={props.fields.src3}
                    alt={props.fields.alt3}
                    height="25"
                    width="25"
                    className={styles['image3']}
                  />
                </a>
                <a
                  id="pinterest"
                  href="https://www.pinterest.ca/AmicaSeniorLifestyles/_created/"
                  className={styles['html-element26']}
                >
                  <Image
                    tag="img"
                    src={props.fields.src4}
                    alt={props.fields.alt4}
                    height="25"
                    width="25"
                    className={styles['image4']}
                  />
                </a>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container tag="div" className={styles['container7']}>
        <Container tag="div" className={styles['container8']}>
          <ul className={styles['html-element27']}>
            <li className={styles['html-element28']}>
              <a
                href="https://www.amica.ca/accessibility-policy"
                target
                className={styles['html-element29']}
              >
                <Text tag="span" text={props.fields.text13} />
              </a>
            </li>
            <li className={styles['html-element30']}>
              <a
                href="https://www.amica.ca/privacy-policy"
                target
                className={styles['html-element31']}
              >
                <Text tag="span" text={props.fields.text14} />
              </a>
            </li>
            <li className={styles['html-element32']}>
              <a
                href="https://www.amica.ca/terms-of-use"
                target
                className={styles['html-element33']}
              >
                <Text tag="span" text={props.fields.text15} />
              </a>
            </li>
          </ul>
          <p className={styles['html-element34']}>
            <Text tag="span" text={props.fields.text16} />
          </p>
        </Container>
      </Container>
    </Container>
  )
}

CorporateFooter.defaultProps = {
  fields: {
    text: 'Contact Us',
    text1: '\n                        20 Queen St W #3200,',
    text2: 'Toronto, ON',
    text3: 'M5H 3R3',
    text4: '(416) 487-2020',
    text5: 'Book a Tour',
    text6: 'Get In Touch',
    text7: 'ABOUT AMICA',
    text8: 'CAREERS',
    text9: 'HEALTHCARE PROFESSIONALS',
    text10: 'HELPING HANDS CHARITY',
    text11: 'Press',
    text12: 'Follow Us',
    src: 'https://amica.kajoo.ca/-/media/0fe2da91a6404d78a74157f83698153d.ashx?db=master&la=en&vs=1&ts=20230913t1702387148',
    alt: 'Facebook',
    src1: 'https://amica.kajoo.ca/-/media/fc0355ac817a480abbdd1a19798ca014.ashx?db=master&la=en&vs=1&ts=20230913t1703039351',
    alt1: 'Linkedin',
    src2: 'https://amica.kajoo.ca/-/media/238879b709704f11967b188051ede7dc.ashx?db=master&la=en&vs=1&ts=20230914t1526065887',
    alt2: '',
    src3: 'https://amica.kajoo.ca/-/media/e65c3eb0cec049608077fb9cc5b809d2.ashx?db=master&la=en&vs=1&ts=20230914t1525056366',
    alt3: '',
    src4: 'https://amica.kajoo.ca/-/media/9b8d29469aa7491487debf4b4b3973ca.ashx?db=master&la=en&vs=1&ts=20230914t1526337959',
    alt4: '',
    text13: 'Accessibility Policy',
    text14: 'Privacy Policy',
    text15: 'Terms of Use',
    text16: '\n                © Amica Senior Lifestyles 2023\n            ',
  },
  rootClassName: '',
}

CorporateFooter.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default CorporateFooter
