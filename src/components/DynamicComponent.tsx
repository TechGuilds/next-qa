/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Image
        src={props.fields.src18}
        alt={props.fields.alt18}
        className={` ${'image-default'} ${styles['image']} `}
      />
      <Image
        src={props.fields.src19}
        alt={props.fields.alt19}
        className={'image-default'}
      />
      <Image
        src={props.fields.src20}
        alt={props.fields.alt20}
        className={` ${'image-default'} ${styles['image2']} `}
      />
      <Image
        src={props.fields.src23}
        alt={props.fields.alt23}
        className={'image-default'}
      />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    src: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png',
    alt: 'image-asset',
    src1: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png',
    alt1: 'image-asset',
    src2: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-xCjCtfQDRJnhB5r9vEmh.png',
    alt2: 'image-asset',
    src3: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png',
    alt3: 'image-asset',
    src4: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png',
    alt4: 'image-asset',
    src5: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-xCjCtfQDRJnhB5r9vEmh.png',
    alt5: 'image-asset',
    src6: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png',
    alt6: 'image-asset',
    src7: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png',
    alt7: 'image-asset',
    src8: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-xCjCtfQDRJnhB5r9vEmh.png',
    alt8: 'image-asset',
    src9: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-xCjCtfQDRJnhB5r9vEmh.png',
    alt9: 'image-asset',
    src10:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png',
    alt10: 'image-asset',
    src11:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-yj7-Lprtu3Va8UYAZofd.svg',
    alt11: 'image-asset',
    src12:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/021Z0B5BGJdCB-NgAGIcs.png',
    alt12: 'image-asset',
    src13:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-xCjCtfQDRJnhB5r9vEmh.png',
    alt13: 'image-asset',
    src14:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png',
    alt14: 'image-asset',
    src15:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/0-K57MiwjpyevjNnR7YsN.svg',
    alt15: 'image-asset',
    src16:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/021Z0B5BGJdCB-NgAGIcs.png',
    alt16: 'image-asset',
    src17:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/0-K57MiwjpyevjNnR7YsN.svg',
    alt17: 'image-asset',
    src18:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-xCjCtfQDRJnhB5r9vEmh.png',
    alt18: 'image-asset',
    src19:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png',
    alt19: 'image-asset',
    src20:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-Zx4mo_F2MCh0XdNywtYL.svg',
    alt20: 'image-asset',
    src21:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/021Z0B5BGJdCB-NgAGIcs.png',
    alt21: 'image-asset',
    src22:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/0-K57MiwjpyevjNnR7YsN.svg',
    alt22: 'image-asset',
    src23:
      'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/021Z0B5BGJdCB-NgAGIcs.png',
    alt23: 'image-asset',
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
