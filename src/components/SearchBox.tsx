/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './SearchBox.module.css'

const SearchBox = (props) => {
  return (
    <Container
      tag="form"
      action="/?kajooRender=%22true%22"
      method="post"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    >
      <input
        name="__RequestVerificationToken"
        type="hidden"
        value="HXNGzCiegh0BTUiHWvPE3CqBMdgJ1FgO1EZd0iQhXBDOmAVfd4sB428mv6htONNwJfWojSCssp4pbv-smUgedFOdPFFG1Oh08K90TBG6Rrs1"
        className={styles['html-element']}
      />
      <input
        name="uid"
        type="hidden"
        value="341dca52-72dc-4623-8a78-9ac9553e8c4c"
        className={styles['html-element1']}
      />
      <Container tag="div" className={styles['container']}>
        <button
          aria-label="Open search form"
          type="button"
          aria-controls="headerSearch"
          aria-expanded="false"
          className={styles['html-element2']}
        >
          <RichText
            tag="svg"
            width="25"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            className={styles['richtext']}
          />
        </button>
        <Container tag="div" id="headerSearch" className={styles['container1']}>
          <button
            aria-label="Close search form"
            type="button"
            aria-controls="headerSearch"
            aria-expanded="false"
            className={styles['html-element3']}
          >
            <RichText
              tag="svg"
              width="42px"
              height="42px"
              xmlns="http://www.w3.org/2000/svg"
              className={styles['richtext1']}
            />
          </button>
          <Text
            tag="label"
            id="lblSearch"
            text={props.fields.text}
            htmlFor="sbquery"
            className={styles['text']}
          />
          <Text tag="span" text={props.fields.text1} />
          <Container tag="div" className={styles['container2']}>
            <input
              aria-labelledby="lblSearch"
              id="sbquery"
              name="sbquery"
              placeholder="I'm searching for..."
              type="text"
              value
              className={styles['html-element4']}
            />
            <br className={styles['html-element5']} />
            <Container tag="div" className={styles['container3']}>
              <button
                type="button"
                onclick="search()"
                className={styles['html-element6']}
              >
                <RichText
                  tag="svg"
                  width="25"
                  height="25"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles['richtext2']}
                />
              </button>
            </Container>
            <input
              id="url"
              name="url"
              type="hidden"
              value
              className={styles['html-element7']}
            />
          </Container>
          <button type="submit" className={styles['html-element8']}>
            <Text tag="span" text={props.fields.text2} />
          </button>
        </Container>
      </Container>
    </Container>
  )
}

SearchBox.defaultProps = {
  fields: {
    text: 'How can we help?',
    text1:
      '\n            Lorem ipsum dolor sit amet consectetur adipisicing.\n            ',
    text2: 'Search',
  },
  rootClassName: '',
}

SearchBox.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default SearchBox
