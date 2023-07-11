/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Button, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Test1.module.css'

const Test1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text="Heading" tag="h1" className={styles['header-default']} />
      <Text
        text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
        tag="span"
        className={styles['paragraph-default']}
      />
      <Button
        text={props.fields.title}
        link="#"
        className={styles['button-default']}
      />
      <Image
        src="https://app.kajoo.ai/icons/default-imag.svg"
        alt="default-kajoo-imag"
        className={styles['image-default']}
      />
    </Container>
  )
}

Test1.defaultProps = {
  fields: {
    _version: 12,
    locale: 'en-us',
    uid: 'blta434ceaa53828ed1',
    ACL: {},
    _in_progress: false,
    created_at: '2022-06-29T16:12:12.881Z',
    created_by: 'blt7e329dbe668f3e6c',
    page_components: [
      {
        hero_banner: {
          banner_image: {
            _version: 1,
            is_dir: false,
            uid: 'bltd9dd1ec20412272e',
            ACL: {},
            content_type: 'image/svg+xml',
            created_at: '2022-06-29T16:11:58.513Z',
            created_by: 'blt7e329dbe668f3e6c',
            description: '',
            file_size: '54029',
            filename: 'winning-digital-strategy.svg',
            parent_uid: 'blt749a704175add196',
            tags: [],
            title: 'Winning Digital Strategy',
            updated_at: '2022-06-29T16:11:58.513Z',
            updated_by: 'blt7e329dbe668f3e6c',
            publish_details: {
              environment: 'bltcbc9e23b97399988',
              locale: 'en-us',
              time: '2022-06-29T16:11:58.792Z',
              user: 'blt7e329dbe668f3e6c',
            },
            url: 'https://images.contentstack.io/v3/assets/bltf30e8d394a5af90c/bltd9dd1ec20412272e/62bc79cea3eeb81d5ccb2e69/winning-digital-strategy.svg',
          },
          _metadata: {
            uid: 'cs4fd66e820e6e7d2f',
          },
          bg_color: '#a809e1',
          text_color: '#ffffff',
          banner_title: 'Create A Winning Digital Strategy For Your Business!',
          banner_description:
            'We help you create an agile digital strategy that helps you stand out and win customers. Nothing less.',
          call_to_action: {
            title: 'Read more',
            href: '/',
          },
        },
      },
      {
        section: {
          title_h2: 'We are here to help you with what’s next',
          _metadata: {
            uid: 'cs7ff8d492877d43ca',
          },
          description:
            'At SampleSite, we are obsessed with technology and well-versed with trends. As a consultancy with more than a quarter-century of experience, we bring clarity and vision to our clients and help them set up solutions for tomorrow.',
          call_to_action: {
            title: 'Connect with an Advisor',
            href: '/',
          },
          image: {
            _version: 1,
            is_dir: false,
            uid: 'blt762073373e4e287e',
            ACL: {},
            content_type: 'image/svg+xml',
            created_at: '2022-06-29T16:11:59.067Z',
            created_by: 'blt7e329dbe668f3e6c',
            file_size: '49454',
            filename: 'help-for-the-next-step.svg',
            parent_uid: 'blt749a704175add196',
            tags: [],
            title: 'help-for-the-next-step.svg',
            updated_at: '2022-06-29T16:11:59.067Z',
            updated_by: 'blt7e329dbe668f3e6c',
            publish_details: {
              environment: 'bltcbc9e23b97399988',
              locale: 'en-us',
              time: '2022-06-29T16:11:59.292Z',
              user: 'blt7e329dbe668f3e6c',
            },
            url: 'https://images.contentstack.io/v3/assets/bltf30e8d394a5af90c/blt762073373e4e287e/62bc79cfe55ac91150bd4d8b/help-for-the-next-step.svg',
          },
          image_alignment: 'Left',
        },
      },
      {
        section_with_buckets: {
          title_h2: 'Choose the #1 Tech Consultancy',
          _metadata: {
            uid: 'csafd941cda9e93ec0',
          },
          description: 'We lead you throughout your digital transformation',
          bucket_tabular: false,
          buckets: [
            {
              title_h3: 'Artificial Intelligence',
              _metadata: {
                uid: 'cs8c342bbd996eb531',
              },
              description: {
                uid: '1ad18ffcc1dd45e78592bd4291ccfbc1',
                attrs: {},
                children: [
                  {
                    type: 'p',
                    attrs: {},
                    uid: '4ab518c99a1d412d9c306dab2c1b2434',
                    children: [
                      {
                        text: '',
                      },
                    ],
                  },
                ],
                type: 'doc',
                _version: 12,
              },
              icon: {
                _version: 1,
                is_dir: false,
                uid: 'blt9f8a8d62b8b9b23e',
                ACL: {},
                content_type: 'image/svg+xml',
                created_at: '2022-06-29T16:11:57.787Z',
                created_by: 'blt7e329dbe668f3e6c',
                description: '',
                file_size: '706',
                filename: 'artificial-intelligence.svg',
                parent_uid: 'blt749a704175add196',
                tags: [],
                title: 'Artificial Intelligence.svg',
                updated_at: '2022-06-29T16:11:57.787Z',
                updated_by: 'blt7e329dbe668f3e6c',
                publish_details: {
                  environment: 'bltcbc9e23b97399988',
                  locale: 'en-us',
                  time: '2022-06-29T16:11:57.955Z',
                  user: 'blt7e329dbe668f3e6c',
                },
                url: 'https://images.contentstack.io/v3/assets/bltf30e8d394a5af90c/blt9f8a8d62b8b9b23e/62bc79cd5e22387f3a530b1c/artificial-intelligence.svg',
              },
              call_to_action: {
                title: 'Start Now',
                href: '#',
              },
            },
            {
              title_h3: 'Cloud Computing',
              _metadata: {
                uid: 'cs7e9d4b3a24891796',
              },
              description: {
                uid: '6661975fe8284514a561e3e2cdaafffb',
                attrs: {},
                children: [
                  {
                    type: 'p',
                    attrs: {},
                    uid: '9ac6d01967d040e6978d8ee32f5b6f12',
                    children: [
                      {
                        text: '',
                      },
                    ],
                  },
                ],
                type: 'doc',
                _version: 12,
              },
              icon: {
                _version: 1,
                is_dir: false,
                uid: 'bltce6903ebf944cee2',
                ACL: {},
                content_type: 'image/svg+xml',
                created_at: '2022-06-29T16:11:54.913Z',
                created_by: 'blt7e329dbe668f3e6c',
                description: '',
                file_size: '1314',
                filename: 'cloud-computing.svg',
                parent_uid: 'blt749a704175add196',
                tags: [],
                title: 'Cloud Computing',
                updated_at: '2022-06-29T16:11:54.913Z',
                updated_by: 'blt7e329dbe668f3e6c',
                publish_details: {
                  environment: 'bltcbc9e23b97399988',
                  locale: 'en-us',
                  time: '2022-06-29T16:11:55.155Z',
                  user: 'blt7e329dbe668f3e6c',
                },
                url: 'https://images.contentstack.io/v3/assets/bltf30e8d394a5af90c/bltce6903ebf944cee2/62bc79ca8e2cba7f845f780b/cloud-computing.svg',
              },
              call_to_action: {
                title: 'Rollover your 401k',
                href: '#',
              },
            },
            {
              title_h3: 'Security',
              _metadata: {
                uid: 'csce6795aa791f32fa',
              },
              description: {
                uid: 'bfd584ede4624a11ab21de9cd7eca984',
                attrs: {},
                children: [
                  {
                    type: 'p',
                    attrs: {},
                    uid: '48426020ab474b12a7f9b4c05f94e62b',
                    children: [
                      {
                        text: '',
                      },
                    ],
                  },
                ],
                type: 'doc',
                _version: 12,
              },
              icon: {
                _version: 1,
                is_dir: false,
                uid: 'blt066b803b36f1e70a',
                ACL: {},
                content_type: 'image/svg+xml',
                created_at: '2022-06-29T16:11:59.343Z',
                created_by: 'blt7e329dbe668f3e6c',
                description: '',
                file_size: '1053',
                filename: 'security.svg',
                parent_uid: 'blt749a704175add196',
                tags: [],
                title: 'Security',
                updated_at: '2022-06-29T16:11:59.343Z',
                updated_by: 'blt7e329dbe668f3e6c',
                publish_details: {
                  environment: 'bltcbc9e23b97399988',
                  locale: 'en-us',
                  time: '2022-06-29T16:11:59.511Z',
                  user: 'blt7e329dbe668f3e6c',
                },
                url: 'https://images.contentstack.io/v3/assets/bltf30e8d394a5af90c/blt066b803b36f1e70a/62bc79cfe65e10208695d8d4/security.svg',
              },
              call_to_action: {
                title: 'Learn More',
                href: '#',
              },
            },
          ],
        },
      },
      {
        from_blog: {
          title_h2: 'Learn about our community outreach',
          _metadata: {
            uid: 'cs59eb40ffadbed53a',
          },
          featured_blogs: [
            {
              uid: 'blt3bd0475091ea2eda',
              _content_type_uid: 'blog_post',
            },
            {
              uid: 'bltf2696c848a9f3460',
              _content_type_uid: 'blog_post',
            },
          ],
          view_articles: {
            title: 'View Articles',
            href: '/blog',
          },
        },
      },
      {
        section_with_cards: {
          cards: [
            {
              title_h3: 'Schedule a Demo with us',
              _metadata: {
                uid: 'csa2e875186ea2d395',
              },
              description:
                'Get a customized platform walk through for your stack.',
              call_to_action: {
                title: 'Schedule a Demo',
                href: '/contact-us',
              },
            },
            {
              title_h3: 'Start a Free Trial',
              _metadata: {
                uid: 'csef530e1f1c49d1b7',
              },
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel lorem morbi nulla quis sed diam sed.',
              call_to_action: {
                title: 'Start Free Trial',
                href: '/contact-us',
              },
            },
          ],
          _metadata: {
            uid: 'csce2585879f1f30da',
          },
        },
      },
    ],
    seo: {
      meta_title: 'Tekt',
      meta_description: 'Welcome to Tekt',
      keywords: 'architecture design tekt',
      enable_search_indexing: true,
    },
    tags: [],
    title: 'Home',
    updated_at: '2023-07-11T11:12:34.258Z',
    updated_by: 'bltde4e0779ddb58fdf',
    url: '/',
    publish_details: {
      environment: 'bltcbc9e23b97399988',
      locale: 'en-us',
      time: '2023-07-11T11:12:38.128Z',
      user: 'bltde4e0779ddb58fdf',
    },
  },
  rootClassName: '',
}

Test1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Test1
