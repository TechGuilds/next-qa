/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './CompLink.module.css'

const CompLink = (props) => {
  return (
    <Container className={styles['root']}>
      <ErrorBoundary param={props}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
        >
        <Link
          href={props.fields.href}
          className={` ${styles['link']} ${styles['link-link-style-2']} `}
          />
      </Container>
  </ErrorBoundary>
    </Container>
  )
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("CompLinkError",error, errorInfo,props?.param);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
CompLink.defaultProps = {
  fields: {},
}

CompLink.propTypes = {
  fields: PropTypes.object,
}

export default CompLink
