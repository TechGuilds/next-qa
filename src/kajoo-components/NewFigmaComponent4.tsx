/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, RichText, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent4.module.css'

const NewFigmaComponent4 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Link
            url="https://zenith-dev-101-single.azurewebsites.net/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <RichText
              value='&lt;span style="box-sizing: border-box; \ncolor: rgb(0, 123, 255); \nfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; \nline-height: 24px; \ntext-align: left; \ntext-decoration-color: transparent; \ntext-decoration-line: none; \n"&gt;&lt;span style="box-sizing: border-box; \ncolor: rgb(0, 123, 255); \ncursor: pointer; \nfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; \nheight: 19.4px; \nline-height: 24px; \ntext-align: left; \ntext-decoration-color: rgb(0, 123, 255); \nvertical-align: middle; \nwidth: 117px; \n"/&gt;&lt;/span&gt;'
              className={styles['richtext']}
            />
          </Link>
        </Container>
        <Container className={styles['container02']}>
          <Container text="Offices" className={styles['container03']} />
          <Container className={styles['container04']}>
            <Container tag="li" className={styles['container05']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/services/offices/toronto"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link01']}
              >
                <Text text="Toronto" className={styles['text']} />
              </Link>
            </Container>
            <Container tag="li" className={styles['container06']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/services/offices/new-york"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link02']}
              >
                <Text text="New York" className={styles['text01']} />
              </Link>
            </Container>
            <Container tag="li" className={styles['container07']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/services/offices/calgary"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link03']}
              >
                <Text text="Calgary" className={styles['text02']} />
              </Link>
            </Container>
            <Container tag="li" className={styles['container08']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/services/offices/montreal"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link04']}
              >
                <Text text="Montréal" className={styles['text03']} />
              </Link>
            </Container>
            <Container tag="li" className={styles['container09']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/services/offices/halifax"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link05']}
              >
                <Text
                  text="Halifax - Legal Services Centre"
                  className={styles['text04']}
                />
              </Link>
            </Container>
          </Container>
        </Container>
        <Container className={styles['container10']}>
          <Container text="About Us" className={styles['container11']} />
          <Container className={styles['container12']}>
            <Container tag="li" className={styles['container13']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/about-us"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link06']}
              >
                <Text text="About Us" className={styles['text05']} />
              </Link>
            </Container>
            <Container tag="li" className={styles['container14']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/about-us/recognition"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link07']}
              >
                <Text text="Recognition" className={styles['text06']} />
              </Link>
            </Container>
            <Container tag="li" className={styles['container15']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/about-us/client-solutions"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link08']}
              >
                <Text text="Client Solutions" className={styles['text07']} />
              </Link>
            </Container>
            <Container tag="li" className={styles['container16']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/about-us/diversity-equity-and-inclusion"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link09']}
              >
                <Text
                  text="Diversity, Equity and Inclusion"
                  className={styles['text08']}
                />
              </Link>
            </Container>
            <Container tag="li" className={styles['container17']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/about-us/social-impact-and-sustainability"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link10']}
              >
                <Text
                  text="Social Impact and Sustainability"
                  className={styles['text09']}
                />
              </Link>
            </Container>
            <Container tag="li" className={styles['container18']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/about-us/our-history"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link11']}
              >
                <Text text="Our History" className={styles['text10']} />
              </Link>
            </Container>
          </Container>
        </Container>
        <Container className={styles['container19']}>
          <Container text="News" className={styles['container20']} />
          <Container className={styles['container21']}>
            <Container tag="li" className={styles['container22']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/about-us/news-and-media"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link12']}
              >
                <Text text="News and Media" className={styles['text11']} />
              </Link>
            </Container>
            <Container tag="li" className={styles['container23']}>
              <Link
                url="https://zenith-dev-101-single.azurewebsites.net/our-latest-thinking/staying-current"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link13']}
              >
                <Text text="Staying Current" className={styles['text12']} />
              </Link>
            </Container>
          </Container>
        </Container>
        <Container className={styles['container24']}>
          <Text text="Subscribe" className={styles['text13']} />
          <Link
            url="https://zenith-dev-101-single.azurewebsites.net/subscribe"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link14']}
          >
            <RichText
              value='&lt;span style="align-items: center; \nbackground-color: rgb(0, 110, 170); \nborder-bottom-color: rgb(0, 110, 170); \nborder-bottom-left-radius: 2px; \nborder-bottom-right-radius: 2px; \nborder-bottom-style: solid; \nborder-bottom-width: 2.4px; \nborder-left-color: rgb(0, 110, 170); \nborder-left-style: solid; \nborder-left-width: 2.4px; \nborder-right-color: rgb(0, 110, 170); \nborder-right-style: solid; \nborder-right-width: 2.4px; \nborder-top-color: rgb(0, 110, 170); \nborder-top-left-radius: 2px; \nborder-top-right-radius: 2px; \nborder-top-style: solid; \nborder-top-width: 2.4px; \nborder-width: 2.4px; \nbox-sizing: border-box; \ncolor: rgb(255, 255, 255); \ndisplay: flex; \nfont-family: franklin-gothic-urw, sans-serif; \nfont-size: 18px; \nfont-weight: 500; \nheight: 52.65px; \njustify-content: center; \nline-height: 31.86px; \npadding-bottom: 8px; \npadding-left: 32px; \npadding-right: 32px; \npadding-top: 8px; \ntext-align: center; \ntext-decoration-color: transparent; \ntext-decoration-line: none; \nwidth: 144.562px; \n"&gt;&lt;span style="box-sizing: border-box; \ncolor: rgb(255, 255, 255); \ncursor: pointer; \nfont-family: franklin-gothic-urw, sans-serif; \nfont-size: 18px; \nfont-weight: 500; \nheight: 31.85px; \nline-height: 31.86px; \ntext-align: center; \ntext-decoration-color: rgb(255, 255, 255); \nwidth: 75.7625px; \n"&gt;Subscribe&lt;/span&gt;&lt;/span&gt;'
              className={styles['richtext1']}
            />
          </Link>
          <Text
            text="Subscribe to Torys’ insights for our latest commentary, webinar and events schedule and more."
            className={styles['text14']}
          />
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent4.defaultProps = {
  fields: {},
  rootClassName: '',
}

NewFigmaComponent4.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent4
