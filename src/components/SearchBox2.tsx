/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './SearchBox2.module.css'

const SearchBox2 = (props) => {
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
        value="2ktF-yatYuqfwxpoqlIvbtK2qLo1gQyAtwWXZZdbhh49I1HuVZaiQAg5PXeodzoLuxXuDiYtSHJiWxT4yHkiAmfLgdb0m3O2UG3ME7zuclM1"
        className={styles['html-element']}
      />
      <input
        name="uid"
        type="hidden"
        value="341dca52-72dc-4623-8a78-9ac9553e8c4c"
        className={styles['html-element1']}
      />
      <Container className={styles['container']}>
        <button
          aria-label="Open search form"
          type="button"
          aria-controls="headerSearch"
          aria-expanded="false"
          className={styles['html-element2']}
        >
          <RichText value={props.fields.value} />
        </button>
        <Container id="headerSearch" className={styles['container1']}>
          <button
            aria-label="Close search form"
            type="button"
            aria-controls="headerSearch"
            aria-expanded="false"
            className={styles['html-element3']}
          >
            <RichText value={props.fields.value1} />
          </button>
          <Text
            tag="label"
            id="lblSearch"
            text={props.fields.text}
            htmlFor="sbquery"
            className={styles['text']}
          />
          <Text text={props.fields.text1} />
          <Container className={styles['container2']}>
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
            <Container className={styles['container3']}>
              <button
                type="button"
                onclick="search()"
                className={styles['html-element6']}
              >
                <RichText value={props.fields.value2} />
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
            <Text text={props.fields.text2} />
          </button>
        </Container>
      </Container>
    </Container>
  )
}

SearchBox2.defaultProps = {
  fields: {
    value:
      '<svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"><path d="M24 22.694l-6.63-6.632a9.759 9.759 0 0 0 2.242-6.256A9.804 9.804 0 0 0 9.806 0 9.804 9.804 0 0 0 0 9.806a9.804 9.804 0 0 0 9.806 9.806c2.382 0 4.529-.841 6.256-2.242l6.63 6.63L24 22.694zM9.857 17.762c-4.422 0-8-3.578-8-8 0-4.423 3.578-8 8-8 4.423 0 8 3.577 8 8 0 4.422-3.577 8-8 8z"></path></svg>',
    value1:
      '<svg width="42px" height="42px" xmlns="http://www.w3.org/2000/svg">\n    <path d="M40.0556449,41.6661906 L0.305453063,1.91662959 C-0.112947155,1.4670992 -0.0995777941,0.768344537 0.333642664,0.333626314 C0.76833679,-0.0995727114 1.46715175,-0.112941645 1.9166965,0.305437614 L41.6668883,40.0549987 C41.9918056,40.3813905 42.0897323,40.8709594 41.9131732,41.2967523 C41.7366217,41.7225453 41.3211992,41.9999886 40.8612856,41.9999886 C40.5585987,42 40.2692888,41.8798277 40.0556449,41.6661906 Z"></path>\n    <path d="M0.0868234345,41.2967525 C-0.0897281608,40.8709597 0.00819105181,40.3813606 0.333108428,40.0549992 L40.0833084,0.305443228 C40.5328533,-0.112943518 41.2316306,-0.099574588 41.6663629,0.333631921 C42.0995759,0.768312052 42.1129453,1.46710451 41.6945525,1.91663479 L1.94435253,41.6661907 C1.73070854,41.8798278 1.44140609,42 1.13873428,42 C0.678797698,41.9999886 0.263359837,41.7225567 0.0868234345,41.2967525 Z"></path>\n</svg>',
    text: 'How can we help?',
    text1:
      '\n            Lorem ipsum dolor sit amet consectetur adipisicing.\n            ',
    value2:
      '<svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"><path d="M24 22.694l-6.63-6.632a9.759 9.759 0 0 0 2.242-6.256A9.804 9.804 0 0 0 9.806 0 9.804 9.804 0 0 0 0 9.806a9.804 9.804 0 0 0 9.806 9.806c2.382 0 4.529-.841 6.256-2.242l6.63 6.63L24 22.694zM9.857 17.762c-4.422 0-8-3.578-8-8 0-4.423 3.578-8 8-8 4.423 0 8 3.577 8 8 0 4.422-3.577 8-8 8z"></path></svg>',
    text2: 'Search',
  },
  rootClassName: '',
}

SearchBox2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default SearchBox2
