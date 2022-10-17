/* eslint-disable */
// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Container, Link, Button } from 'kajoo-components/sitecore-nextjs';

import PropTypes from 'prop-types';

import styles from './CollectionOfLinks.module.css';

const CollectionOfLinks = (props) => {
  const [propList, setPropList] = useState([props]);
  console.log('CollectionOfLinks', { props });
  useEffect(() => {
    setPropList([...propList, props]);
  }, [props]);
  return (
    <h1>
      CollectionOfLinks
      <pre>{JSON.stringify(propList, null, 2)}</pre>
    </h1>
  );
};

const MyComp = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={` ${styles['container1']} ${styles['container-default']} `}>
          <Link
            href={props.fields.href1}
            className={` ${styles['link']} ${styles['link-link-style-2']} `}
          />
          <Link
            href="#"
            text={props.fields.text1}
            className={` ${styles['link1']} ${styles['link-link-style']} `}
          />
          <Link
            href={props.fields.href3}
            className={` ${styles['link2']} ${styles['link-link-style-2']} `}
          />
        </Container>
        <Container className={` ${styles['container2']} ${styles['container-default']} `}>
          <Button
            text="Button"
            link="Linnk"
            className={` ${styles['button']} ${styles['button-button-364']} `}
          />
          <Button
            text={props.fields.text4}
            className={` ${styles['button1']} ${styles['button-button-540']} `}
          />
        </Container>
      </Container>
    </Container>
  );
};

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
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

CollectionOfLinks.defaultProps = {
  rootClassName: '',
  fields: {},
};

CollectionOfLinks.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
};

export default CollectionOfLinks;
