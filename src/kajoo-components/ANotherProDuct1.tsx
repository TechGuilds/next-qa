/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ANotherProDuct1.module.css'

const ANotherProDuct1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container bgImage className={styles['container']}>
        <Container bgImage className={styles['container1']}>
          <Container bgImage className={styles['container2']}>
            <Text
              text="HEADER"
              tag="span"
              className={` ${styles['text']} ${styles['paragraph-default']} `}
            />
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/kajoo-image-1689884396436.png"
              alt="default-kajoo-imag"
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
            <Button
              link="#"
              text="Button"
              className={` ${styles['button']} ${styles['button-default']} `}
            />
          </Container>
          <Container bgImage className={styles['container3']}>
            <Container bgImage className={styles['container4']}>
              <Text
                text="HEADER"
                tag="span"
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Image
                src="https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/kajoo-image-1689884385230.png"
                alt="default-kajoo-imag"
                className={` ${styles['image1']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
            <Button
              link="#"
              text="Button"
              className={` ${styles['button1']} ${styles['button-default']} `}
            />
          </Container>
          <Container bgImage className={styles['container5']}>
            <Container bgImage className={styles['container6']}>
              <Text
                text="HEADER"
                tag="span"
                className={` ${styles['text4']} ${styles['paragraph-default']} `}
              />
              <Image
                src={
                  props.fields.components.blog.response[0].featured_image.url
                }
                alt="default-kajoo-imag"
                className={` ${styles['image2']} ${styles['image-default']} `}
              />
            </Container>
            <Text
              text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
              tag="span"
              className={` ${styles['text5']} ${styles['paragraph-default']} `}
            />
            <Button
              link="#"
              text="Button"
              className={` ${styles['button2']} ${styles['button-default']} `}
            />
          </Container>
        </Container>
        <Container bgImage className={styles['container7']} />
      </Container>
    </Container>
  )
}

ANotherProDuct1.defaultProps = {
  fields: {
    duration: 99,
    components: {
      blog: {
        '@extras': {
          rule: {
            metadata: [],
            attributes: {},
          },
        },
        status: 'VALID',
        response: [
          {
            _version: 2,
            locale: 'en-us',
            uid: 'blt61db2a88b06ac422',
            ACL: {},
            _in_progress: false,
            author: [
              {
                uid: 'blt929302cd49bbc695',
                _content_type_uid: 'author',
              },
            ],
            body: {
              uid: 'bda9e14f37198797c3137f79beb402c9',
              attrs: {},
              children: [
                {
                  type: 'p',
                  attrs: {},
                  uid: '2ae8b70ff86c17b39219422c3b72199a',
                  children: [
                    {
                      text: 'Envision a future where robots are so integrated into the foundation of human life that they become as common as smartphones. Robotics is a field that has a great potential to improve our lives at work, home, and in-play. They can be a support for learning physical as well as cognitive activities. Robots for years have helped humans do a task that was considered dangerous. Now, the field of robotics has progressed into the exploration of unreachable environments from the depth of the ocean to deep space. ',
                    },
                  ],
                },
                {
                  type: 'p',
                  attrs: {},
                  uid: '75fbe27f90258be4e9bb4ac74053604e',
                  children: [
                    {
                      text: "Robots being made capable enough to adapt, learn and interact with human beings and other machines on a cognitive level. Technology has progressed so rapidly that over the past few decades computing has been made indispensable. The digitalization of everything has made human life easy and so accessible. These digitizations put together with robotics assures a future that only existed in one's imagination.",
                    },
                  ],
                },
                {
                  type: 'p',
                  attrs: {},
                  uid: '21381884f57af3cc7c2459d844326131',
                  children: [
                    {
                      text: 'Robots are becoming so capable that they can execute complex computations and interact with the world on their own, with richer sensors and better actuators. With a future close, where robots and humans work alongside is creating many new job opportunities and saving time for humans.',
                    },
                  ],
                },
                {
                  type: 'p',
                  attrs: {},
                  uid: '4c07d6bf2c634d82c9949741c6e827cd',
                  children: [
                    {
                      text: 'Robots have only advanced in industrial fields or only in factories but have also come about to do simple human tasks such a mowing our lawns, milking cows, vacuuming the house, serving in restaurants, and so many other areas. In a few years, they will touch even more parts of our lives.',
                    },
                  ],
                },
                {
                  type: 'p',
                  attrs: {},
                  uid: '412ace354c522daf6563544ff65e821d',
                  children: [
                    {
                      text: "Today's robots are still quite limited. They cannot figure things out and their communication is often brittle. It also takes a lot of time to build new robots. The progressive adoption of robots will require integrating robots in the human world rather than integrating humans into the machine world.",
                    },
                  ],
                },
                {
                  type: 'p',
                  attrs: {},
                  uid: '187d91f76ed64920ca236a202c40f4ab',
                  children: [
                    {
                      text: '',
                    },
                  ],
                },
                {
                  type: 'p',
                  attrs: {},
                  uid: 'a70282c3372101f5965dca067758d746',
                  children: [
                    {
                      text: '',
                    },
                  ],
                },
              ],
              type: 'doc',
              _version: 2,
            },
            created_at: '2023-02-01T04:15:40.574Z',
            created_by: 'blt4fb13becc73eef0e',
            date: '2021-02-09T08:10:18.000Z',
            featured_image: {
              _version: 1,
              is_dir: false,
              uid: 'blt34554e61ad19eca7',
              ACL: {},
              content_type: 'image/svg+xml',
              created_at: '2023-02-01T04:15:28.447Z',
              created_by: 'blt4fb13becc73eef0e',
              description: '',
              file_size: '26826',
              filename: 'business-with-al.svg',
              parent_uid: 'blt1bbe26514d48f5e6',
              tags: [],
              title: 'Business With Al',
              updated_at: '2023-02-01T04:15:28.447Z',
              updated_by: 'blt4fb13becc73eef0e',
              publish_details: {
                environment: 'bltf45cf471110cd5ed',
                locale: 'en-us',
                time: '2023-02-01T04:15:28.591Z',
                user: 'blt4fb13becc73eef0e',
              },
              url: 'https://images.contentstack.io/v3/assets/blt22fd03a8846f5ff9/blt34554e61ad19eca7/63d9e760d2e2d92ee47b948c/business-with-al.svg',
            },
            is_archived: true,
            related_post: [
              {
                uid: 'blt4b711175d49a0ee0',
                _content_type_uid: 'blog_post',
              },
              {
                uid: 'blt3672a376a4dad3ad',
                _content_type_uid: 'blog_post',
              },
            ],
            seo: {
              meta_title: 'Robotics – Changing Our Lives and Future',
              meta_description: 'Blog data',
              keywords: 'Robotics – Changing Our Lives and Future',
              enable_search_indexing: true,
            },
            tags: [],
            title: 'Robotics – Changing Our Lives and Future',
            updated_at: '2023-02-01T04:15:41.522Z',
            updated_by: 'blt4fb13becc73eef0e',
            url: '/blog/robotics-changing-our-lives-and-future',
            publish_details: {
              environment: 'bltf45cf471110cd5ed',
              locale: 'en-us',
              time: '2023-02-01T04:15:45.439Z',
              user: 'blt4fb13becc73eef0e',
            },
          },
        ],
      },
    },
  },
  rootClassName: '',
}

ANotherProDuct1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ANotherProDuct1
