/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container
          text="He has a wealth of experience advising the government on Indigenous matters, including major energy projects. Interviewees characterise him as ‘very, very knowledgeable and open to discussion.’"
          className={styles['container1']}
        />
        <Container className={styles['container2']}>
          <Text text="—" tag="span" />
          <Text text="Chambers Global" className={styles['text1']} />
          <Text text=", 2021" tag="span" />
        </Container>
        <Container className={styles['container-default']}>
          <svg viewBox="0 0 38 29" className={styles['icon']} />
          <path
            d="M37.5281 22.7741C37.5281 18.3923 34.9564 16.7779 31.8002 16.7779C29.2285 16.7779 27.0074 17.5851 25.254 18.5076C24.7864 17.2391 24.6695 15.7401 24.6695 14.587C24.6695 8.24481 29.696 4.78545 36.3591 3.28639C37.0605 3.17108 37.2943 3.05577 37.1774 2.24858L36.8267 0.634214C36.7098 -0.0576567 36.2422 -0.0576566 35.5409 0.0576539C27.8257 1.55671 20.4612 6.05388 20.4612 15.6248C20.4612 23.3507 25.1371 29.001 31.3326 29.001C35.424 29.001 37.5281 26.9254 37.5281 22.7741ZM17.5388 22.7741C17.5388 18.3923 14.9671 16.7779 11.8109 16.7779C9.35605 16.7779 6.90123 17.4698 5.26468 18.5076C4.79709 17.2391 4.6802 15.7401 4.6802 14.587C4.6802 8.24481 9.70674 4.78545 16.3698 3.28639C17.0712 3.17108 17.305 3.05577 17.1881 2.24858L16.8374 0.634214C16.7205 -0.0576567 16.2529 -0.0576566 15.5516 0.0576539C7.8364 1.55671 0.471924 6.05388 0.471924 15.6248C0.471924 23.3507 5.14778 29.001 11.3433 29.001C15.4347 29.001 17.5388 26.9254 17.5388 22.7741Z"
            className={styles['path']}
          />
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
