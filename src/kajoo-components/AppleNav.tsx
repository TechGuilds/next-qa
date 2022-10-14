/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleNav.module.css'

const AppleNav = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Image src={props.src} alt={props.alt} className={styles['image']} />
        <Container className={styles['container1']}>
          <Text text={props.text} className={styles['text']} />
          <Text text={props.text1} className={styles['text01']} />
          <Text text={props.text2} className={styles['text02']} />
          <Text text={props.text3} className={styles['text03']} />
          <Text text={props.text4} className={styles['text04']} />
          <Text text={props.text5} className={styles['text05']} />
          <Text text={props.text6} className={styles['text06']} />
          <Text text={props.text7} className={styles['text07']} />
          <Text text={props.text8} className={styles['text08']} />
          <Text text={props.text9} className={styles['text09']} />
        </Container>
        <Image src={props.src1} alt={props.alt1} className={styles['image1']} />
        <Container className={styles['container2']}>
          <Image
            src={props.src2}
            alt={props.alt2}
            className={styles['image2']}
          />
        </Container>
      </Container>
    </Container>
  )
}

AppleNav.defaultProps = {
  rootClassName: '',
  src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nNDQnIHZpZXdCb3g9JzAgMCAxNCA0NCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGcgY2xpcC1wYXRoPSd1cmwoI2NsaXAwXzEyODZfMTQ3MzYpJz4KPHBhdGggZD0nTTEzLjA3MjYgMTcuNTIxNEMxMi45Nzk2IDE3LjU5MzcgMTEuMzQ3OCAxOC41MTI5IDExLjM0NzggMjAuNTU3OEMxMS4zNDc4IDIyLjkyMjkgMTMuNDIzNyAyMy43NTk1IDEzLjQ4NTcgMjMuNzgwMUMxMy40NzU0IDIzLjgzMTcgMTMuMTU1MiAyNC45MjY1IDEyLjM5MDkgMjYuMDQxOUMxMS43MDkzIDI3LjAyMzEgMTAuOTk2NiAyOC4wMDQyIDkuOTEyMTcgMjguMDA0MkM4LjgyNzc3IDI4LjAwNDIgOC41NDg4NyAyNy4zNzQyIDcuMjk5MTcgMjcuMzc0MkM2LjA4MDQ3IDI3LjM3NDIgNS42NDY2NyAyOC4wMjQ5IDQuNjU1MTcgMjguMDI0OUMzLjY2MzY3IDI4LjAyNDkgMi45NzE2NyAyNy4xMTYgMi4xNzY0NyAyNi4wMDA2QzEuMjU3MjcgMjQuNjg4OSAwLjUxMzY3MiAyMi42NTQzIDAuNTEzNjcyIDIwLjcyM0MwLjUxMzY3MiAxNy42MjQ2IDIuNTI3NjcgMTUuOTgyNCA0LjUxMDU3IDE1Ljk4MjRDNS41NjQwNyAxNS45ODI0IDYuNDQxODcgMTYuNjc0NCA3LjEwMjg3IDE2LjY3NDRDNy43MzI4NyAxNi42NzQ0IDguNzE0MDcgMTUuOTQxMSA5LjkxMjA3IDE1Ljk0MTFDMTAuMzY2NiAxNS45NDEyIDExLjk5ODUgMTUuOTgyNiAxMy4wNzI2IDE3LjUyMTRaTTkuMzQ0MTcgMTQuNjI5NkM5LjgzOTg3IDE0LjA0MDkgMTAuMTkxMSAxMy4yMjUgMTAuMTkxMSAxMi40MDkxQzEwLjE5MTEgMTIuMjk1NSAxMC4xODA4IDEyLjE4MTkgMTAuMTYwMSAxMi4wODg5QzkuMzU0NDcgMTIuMTE5OSA4LjM5Mzk3IDEyLjYyNiA3LjgxNTU3IDEzLjI5NzNDNy4zNjExNyAxMy44MTM3IDYuOTM3NjcgMTQuNjI5NiA2LjkzNzY3IDE1LjQ1NTlDNi45Mzc2NyAxNS41Nzk4IDYuOTU4MzcgMTUuNzAzOCA2Ljk2ODY3IDE1Ljc0NTFDNy4wMjAyNyAxNS43NTU0IDcuMTAyOTcgMTUuNzY1OCA3LjE4NTU3IDE1Ljc2NThDNy45MDg1NyAxNS43NjU3IDguODE3MzcgMTUuMjgwMyA5LjM0NDE3IDE0LjYyOTZaJyBmaWxsPSd3aGl0ZScvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9J2NsaXAwXzEyODZfMTQ3MzYnPgo8cmVjdCB3aWR0aD0nMTQnIGhlaWdodD0nNDQnIGZpbGw9J3doaXRlJy8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
  alt: 'globalnavappleimageb5er5ngrzxqqlarge128614736',
  text: 'Store',
  text1: 'Mac',
  text2: 'IPad',
  text3: 'iPhone',
  text4: 'Wacth',
  text5: 'AirPods',
  text6: 'TV & Home',
  text7: 'Only on Apple',
  text8: 'Accessories',
  text9: 'Support',
  src1: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTUnIGhlaWdodD0nNDQnIHZpZXdCb3g9JzAgMCAxNSA0NCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEzLjk3OTcgMjcuNTkzMUwxMC40Nzk3IDI0LjA5MzFDMTEuMzYxNCAyMy4wMTMzIDExLjc5NDUgMjEuNjM2IDExLjY4OTYgMjAuMjQ1OEMxMS41ODQ3IDE4Ljg1NTcgMTAuOTQ5NyAxNy41NTkxIDkuOTE1ODggMTYuNjIzOEM4Ljg4MjA4IDE1LjY4ODYgNy41Mjg0OCAxNS4xODYyIDYuMTM0ODQgMTUuMjIwN0M0Ljc0MTIgMTUuMjU1MSAzLjQxNDA0IDE1LjgyMzYgMi40Mjc2NSAxNi44MDg3QzEuNDQxMjYgMTcuNzkzOCAwLjg3MTA0MyAxOS4xMjAyIDAuODM0ODQzIDIwLjUxMzhDMC43OTg2NDIgMjEuOTA3NCAxLjI5OTIzIDIzLjI2MTcgMi4yMzMxNCAyNC4yOTY3QzMuMTY3MDUgMjUuMzMxNyA0LjQ2MjkxIDI1Ljk2ODMgNS44NTI4OCAyNi4wNzVDNy4yNDI4NiAyNi4xODE4IDguNjIwNzEgMjUuNzUwNCA5LjcwMTY3IDI0Ljg3MDFMMTMuMjAxNyAyOC4zNzAxQzEzLjMwNDggMjguNDczMyAxMy40NDQ4IDI4LjUzMTIgMTMuNTkwNyAyOC41MzEyQzEzLjczNjYgMjguNTMxMiAxMy44NzY1IDI4LjQ3MzMgMTMuOTc5NyAyOC4zNzAxQzE0LjA4MjggMjguMjY2OSAxNC4xNDA4IDI4LjEyNyAxNC4xNDA4IDI3Ljk4MTFDMTQuMTQwOCAyNy44MzUyIDE0LjA4MjggMjcuNjk1MyAxMy45Nzk3IDI3LjU5MjFWMjcuNTkzMVpNMS45NTg2NyAyMC42NjgxQzEuOTU4ODcgMTkuODEzOSAyLjIxMjM0IDE4Ljk3OSAyLjY4NzA0IDE4LjI2ODhDMy4xNjE3NCAxNy41NTg3IDMuODM2MzQgMTcuMDA1MyA0LjYyNTU2IDE2LjY3ODZDNS40MTQ3NyAxNi4zNTE4IDYuMjgzMTQgMTYuMjY2NCA3LjEyMDg4IDE2LjQzMzJDNy45NTg2MiAxNi42IDguNzI4MSAxNy4wMTE0IDkuMzMyMDIgMTcuNjE1NEM5LjkzNTk0IDE4LjIxOTUgMTAuMzQ3MiAxOC45ODkxIDEwLjUxMzggMTkuODI2OEMxMC42ODAzIDIwLjY2NDYgMTAuNTk0NyAyMS41MzMgMTAuMjY3OCAyMi4zMjIxQzkuOTQwODkgMjMuMTExMyA5LjM4NzMxIDIzLjc4NTcgOC42NzcwOCAyNC4yNjAzQzcuOTY2ODQgMjQuNzM0OCA3LjEzMTg1IDI0Ljk4ODEgNi4yNzc2NyAyNC45ODgxQzUuMTMyMzYgMjQuOTg3IDQuMDM0MjYgMjQuNTMxNSAzLjIyNDUgMjMuNzIxNkMyLjQxNDczIDIyLjkxMTYgMS45NTk0NyAyMS44MTM0IDEuOTU4NjcgMjAuNjY4MVonIGZpbGw9JyNGNUY1RjcnLz4KPC9zdmc+Cg==',
  alt1: 'Group1128614739',
  src2: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTMnIGhlaWdodD0nNDQnIHZpZXdCb3g9JzAgMCAxMyA0NCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMiAyNS45QzEyIDI2LjUgMTEuNSAyNyAxMC45IDI3SDIuMUMxLjUgMjcgMSAyNi41IDEgMjUuOVYxOEMxIDE3LjUgMS41IDE3IDIuMSAxN0gxMUMxMS42IDE3IDEyLjEgMTcuNSAxMi4xIDE4LjFWMjUuOUgxMlpNNi41IDE0QzcuNyAxNCA4LjYgMTQuOSA4LjggMTZINC4yQzQuNCAxNC45IDUuMyAxNCA2LjUgMTRaTTEwLjkgMTZIOS44QzkuNiAxNC4zIDguMiAxMyA2LjUgMTNDNC44IDEzIDMuNCAxNC4zIDMuMiAxNkgyLjFDMC45IDE2IDAgMTYuOSAwIDE4LjFWMjZDMCAyNy4xIDAuOSAyOCAyLjEgMjhIMTFDMTIuMSAyOCAxMy4xIDI3LjEgMTMuMSAyNS45VjE4QzEzIDE2LjkgMTIuMSAxNiAxMC45IDE2WicgZmlsbD0nI0Y1RjVGNycvPgo8L3N2Zz4K',
  alt2: 'Group128614743',
}

AppleNav.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  src1: PropTypes.string,
  alt1: PropTypes.string,
  src2: PropTypes.string,
  alt2: PropTypes.string,
}

export default AppleNav
