/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent1.module.css'

const NewFigmaComponent1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <RichText
              value='&lt;span style="box-sizing: border-box; \nfont-family: mencken-std-head, sans-serif; \nfont-size: 32px; \nfont-weight: 400; \nheight: 43.8375px; \nline-height: 43.84px; \nmargin-block-end: 0px; \nmargin-block-start: 0px; \nmargin-bottom: 0px; \nmargin-top: 0px; \noverflow: hidden; \ntext-align: left; \nwidth: 204.3px; \n"&gt;&lt;span style="box-sizing: border-box; \nfont-family: mencken-std-head, sans-serif; \nfont-size: 32px; \nheight: 43.8375px; \nline-height: 43.84px; \ntext-align: left; \nwidth: 204.3px; \n"&gt;&lt;span style="box-sizing: border-box; \nfont-family: mencken-std-head, sans-serif; \nfont-size: 32px; \nline-height: 43.84px; \ntext-align: left; \n"&gt;Featured Work&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;'
              className={styles['richtext']}
            />
            <Container className={styles['container3']} />
          </Container>
          <Container className={styles['container4']}>
            <Container className={styles['container5']}>
              <Container className={styles['container6']}>
                <Container className={styles['container7']}>
                  <Text
                    text="In 2018, Frank was appointed by the Government of Canada to oversee consultation and accommodation discussions with Indigenous Communities regarding the Trans Mountain Pipeline expansion."
                    tag="span"
                  />
                  <Text className={styles['text01']} />
                  <Text text="\n" tag="span" />
                  <Text
                    text="From 2017 - 2018, he mediated the Manitoba land claim between Waywayseecappo First Nation and Government of Canada."
                    className={styles['text03']}
                  />
                  <Text text="\n" tag="span" />
                  <Text
                    text="In 2014, Frank submitted his report following an independent review of various matters for Chief William Blair of the Toronto Police Service relating to police encounters with mentally or emotionally disturbed persons."
                    className={styles['text05']}
                  />
                  <Text text="\n" tag="span" />
                  <Text
                    text="From 2014 - 2018, Frank represented the Province of Ontario in its negotiations with the Chiefs of the Matawa Council on the Ring of Fire."
                    className={styles['text07']}
                  />
                  <Text text="\n" tag="span" />
                  <Text
                    text="In 2011, he was appointed by the Ministry of the Attorney General of Ontario as an Independent Reviewer to provide a report on the process for including individuals living in First Nations reserve communities on the province’s jury roles."
                    className={styles['text09']}
                  />
                  <Text text="\n" tag="span" />
                  <Text
                    text="In 2010, Frank was on the panel to review Canadian officials handing over Afghan detainees to ensure torture was not involved."
                    className={styles['text11']}
                  />
                  <Text text="\n" tag="span" />
                  <Text
                    text="In December 2006, Frank was appointed Commissioner to lead a terrorism inquiry into the conduct of Canadian officials regarding certain individuals. He also was appointed by the Government of Ontario to lead discussions that resulted in a Framework Agreement between Grassy Narrows First Nation and the Ministry of Natural Resources."
                    className={styles['text13']}
                  />
                  <Text text="\n" tag="span" />
                  <Text
                    text="In November 2006, he was appointed by the Ontario Ministry of the Attorney General as a member of the Board of Governors of the Law Commission of Ontario."
                    className={styles['text15']}
                  />
                  <Text text="\n" tag="span" />
                  <Text
                    text="In June 2005, Frank was appointed by the Government of Canada as its representative to lead discussions toward a fair and lasting resolution of the legacy of Indian residential schools."
                    className={styles['text17']}
                  />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent1.defaultProps = {
  fields: {},
  rootClassName: '',
}

NewFigmaComponent1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent1
