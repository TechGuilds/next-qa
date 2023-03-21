/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Image
        src="https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/Tf_XrCU4w3rQC6p_dHzYP.svg"
        alt="Rectangle32216"
        className={styles['image']}
      />
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  rootClassName: '',
}

NewFigmaComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent
