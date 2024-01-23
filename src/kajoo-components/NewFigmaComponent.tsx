/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        tag="body"
        data-new-gr-c-s-check-loaded="14.1150.0"
        data-gr-ext-installed
        className="fluid rtl light ad1"
        className={styles['container']}
      >
        <Container
          tag="div"
          id="kajoo-chrome-plugin-root"
          className={styles['container001']}
        />
        <Container
          tag="div"
          id="main-nav"
          className="main-nav"
          className={styles['container002']}
        >
          <Container
            tag="div"
            className="logo"
            className={styles['container003']}
          >
            <Container
              tag="a"
              href="/"
              title="MAM"
              className="logo-img"
              className={styles['container004']}
            >
              <Text
                text="\n                                                                                        MAM                                                                                    "
                className={styles['text']}
              />
            </Container>
            <Container
              tag="div"
              className="clearfix"
              className={styles['container005']}
            />
          </Container>
          <Container
            tag="div"
            data-app-manager-dropdown-container="true"
            data-simplebar="init"
            className="prim-nav main-nav nav-scroll clearfix app-manager-dropdown-container"
            className={styles['container006']}
          >
            <Container
              tag="div"
              className="simplebar-wrapper"
              className={styles['container007']}
            >
              <Container
                tag="div"
                className="simplebar-height-auto-observer-wrapper"
                className={styles['container008']}
              />
              <Container
                tag="div"
                className="simplebar-mask"
                className={styles['container009']}
              >
                <Container
                  tag="div"
                  className="simplebar-offset"
                  className={styles['container010']}
                >
                  <Container
                    tag="div"
                    className="simplebar-content-wrapper"
                    className={styles['container011']}
                  >
                    <Container
                      tag="div"
                      className="simplebar-content"
                      className={styles['container012']}
                    >
                      <Container
                        tag="div"
                        className="prim-nav main-nav nav-disable-scroll clearfix"
                        className={styles['container013']}
                      >
                        <Container
                          tag="ul"
                          className="prim-nav mob-nav nav-disable-scroll clearfix"
                          className={styles['container014']}
                        >
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="1"
                            data-app-sidebar-list-item="1"
                            className="super-menu mn_1 mn_dashboard current"
                            className={styles['container015']}
                          >
                            <Container
                              tag="a"
                              href="/"
                              className="menu-item home"
                              className={styles['container016']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-home"
                                className={styles['container017']}
                              />
                              <Container
                                tag="span"
                                className={styles['container018']}
                              >
                                <Text
                                  text="لوحة التحكم"
                                  className={styles['text01']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container019']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="10"
                            data-app-sidebar-list-item="10"
                            className=" super-menu mn_2 mn_invoices"
                            className={styles['container020']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item receipt"
                              className={styles['container021']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-receipt"
                                className={styles['container022']}
                              />
                              <Container
                                tag="span"
                                className={styles['container023']}
                              >
                                <Text
                                  text="المبيعات"
                                  className={styles['text02']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container024']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="2"
                            data-app-sidebar-list-item="2"
                            className=" super-menu mn_3 mn_pos_sessions"
                            className={styles['container025']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item desktop-classic"
                              className={styles['container026']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-desktop-classic"
                                className={styles['container027']}
                              />
                              <Container
                                tag="span"
                                className={styles['container028']}
                              >
                                <Text
                                  text="نقاط البيع"
                                  className={styles['text03']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container029']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="177"
                            data-app-sidebar-list-item="177"
                            className="mn_multi-line super-menu mn_4 mn_sales-commissions-parent"
                            className={styles['container030']}
                          >
                            <Container
                              tag="a"
                              href="/v2/owner/commissions"
                              className="menu-item cash-multiple"
                              className={styles['container031']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-cash-multiple"
                                className={styles['container032']}
                              />
                              <Container
                                tag="span"
                                className={styles['container033']}
                              >
                                <Text
                                  text="المبيعات المستهدفة و العمولات"
                                  className={styles['text04']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container034']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="19"
                            data-app-sidebar-list-item="19"
                            className=" super-menu mn_5 mn_work_orders"
                            className={styles['container035']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item clipboard-text-outline"
                              className={styles['container036']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-clipboard-text-outline"
                                className={styles['container037']}
                              />
                              <Container
                                tag="span"
                                className={styles['container038']}
                              >
                                <Text
                                  text="أوامر الشغل"
                                  className={styles['text05']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container039']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="195"
                            data-app-sidebar-list-item="195"
                            className=" super-menu mn_6 mn_workflows"
                            className={styles['container040']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item clipboard-text-outline"
                              className={styles['container041']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-clipboard-text-outline"
                                className={styles['container042']}
                              />
                              <Container
                                tag="span"
                                className={styles['container043']}
                              >
                                <Text
                                  text="دورات العمل"
                                  className={styles['text06']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container044']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="25"
                            data-app-sidebar-list-item="25"
                            className=" super-menu mn_7 mn_clients"
                            className={styles['container045']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item account-tie"
                              className={styles['container046']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-account-tie"
                                className={styles['container047']}
                              />
                              <Container
                                tag="span"
                                className={styles['container048']}
                              >
                                <Text
                                  text="العملاء"
                                  className={styles['text07']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container049']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="160"
                            data-app-sidebar-list-item="160"
                            className=" super-menu mn_8 mn_credits"
                            className={styles['container050']}
                          >
                            <Container
                              tag="a"
                              href="/owner/suppliers/view/1"
                              className="menu-item layers-triple"
                              className={styles['container051']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-layers-triple"
                                className={styles['container052']}
                              />
                              <Container
                                tag="span"
                                className={styles['container053']}
                              >
                                <Text
                                  text="النقاط و الأرصدة"
                                  className={styles['text08']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container054']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="203"
                            data-app-sidebar-list-item="203"
                            className="mn_multi-line super-menu mn_9 mn_client_loyalty_points"
                            className={styles['container055']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item gift"
                              className={styles['container056']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-gift"
                                className={styles['container057']}
                              />
                              <Container
                                tag="span"
                                className={styles['container058']}
                              >
                                <Text
                                  text="نقاط الولاء"
                                  className={styles['text09']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container059']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="36"
                            data-app-sidebar-list-item="36"
                            className=" super-menu mn_10 mn_inventory"
                            className={styles['container060']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item package-variant-closed"
                              className={styles['container061']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-package-variant-closed"
                                className={styles['container062']}
                              />
                              <Container
                                tag="span"
                                className={styles['container063']}
                              >
                                <Text
                                  text="المخزون"
                                  className={styles['text10']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container064']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="182"
                            data-app-sidebar-list-item="182"
                            className="super-menu mn_11 mn_purchases open-submenu"
                            className={styles['container065']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item truck-delivery-outline"
                              className={styles['container066']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-truck-delivery-outline"
                                className={styles['container067']}
                              />
                              <Container
                                tag="span"
                                className={styles['container068']}
                              >
                                <Text
                                  text="المشتريات"
                                  className={styles['text11']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container069']}
                              />
                            </Container>
                            <Container
                              tag="div"
                              className="sub-menu-cont"
                              className={styles['container070']}
                            >
                              <Container
                                tag="ul"
                                className="left sub-menu "
                                className={styles['container071']}
                              >
                                <Container
                                  tag="li"
                                  data-app-sidebar-list-item-sublist-item-group-id="2"
                                  className={styles['container072']}
                                >
                                  <Container
                                    tag="a"
                                    href="/v2/owner/entity/purchase_request/list"
                                    onclick="subSideMenuClick(event)"
                                    className="calendar-month"
                                    className={styles['container073']}
                                  >
                                    <Text
                                      text=" طلبات الشراء "
                                      className={styles['text12']}
                                    />
                                  </Container>
                                </Container>
                                <Container
                                  tag="li"
                                  data-app-sidebar-list-item-sublist-item-group-id="2"
                                  className={styles['container074']}
                                >
                                  <Container
                                    tag="a"
                                    href="/v2/owner/entity/quotation_request/list"
                                    onclick="subSideMenuClick(event)"
                                    className="calendar-month"
                                    className={styles['container075']}
                                  >
                                    <Text
                                      text=" طلبات عروض الأسعار "
                                      className={styles['text13']}
                                    />
                                  </Container>
                                </Container>
                                <Container
                                  tag="li"
                                  data-app-sidebar-list-item-sublist-item-group-id="2"
                                  className={styles['container076']}
                                >
                                  <Container
                                    tag="a"
                                    href="/v2/owner/entity/purchase_quotation/list"
                                    onclick="subSideMenuClick(event)"
                                    className="calendar-month"
                                    className={styles['container077']}
                                  >
                                    <Text
                                      text=" عروض أسعار المشتريات "
                                      className={styles['text14']}
                                    />
                                  </Container>
                                </Container>
                                <Container
                                  tag="li"
                                  data-app-sidebar-list-item-sublist-item-group-id="2"
                                  className={styles['container078']}
                                >
                                  <Container
                                    tag="a"
                                    href="/v2/owner/entity/purchase_order-13/list"
                                    onclick="subSideMenuClick(event)"
                                    className="calendar-month"
                                    className={styles['container079']}
                                  >
                                    <Text
                                      text=" أوامر الشراء "
                                      className={styles['text15']}
                                    />
                                  </Container>
                                </Container>
                                <Container
                                  tag="li"
                                  data-app-sidebar-list-item-sublist-item-group-id="2"
                                  className={styles['container080']}
                                >
                                  <Container
                                    tag="a"
                                    href="/owner/purchase_invoices/index"
                                    onclick="subSideMenuClick(event)"
                                    className
                                    className={styles['container081']}
                                  >
                                    <Text
                                      text=" فواتير الشراء "
                                      className={styles['text16']}
                                    />
                                  </Container>
                                </Container>
                                <Container
                                  tag="li"
                                  data-app-sidebar-list-item-sublist-item-group-id="2"
                                  className={styles['container082']}
                                >
                                  <Container
                                    tag="a"
                                    href="/owner/purchase_invoices/refund"
                                    onclick="subSideMenuClick(event)"
                                    className
                                    className={styles['container083']}
                                  >
                                    <Text
                                      text=" مرتجعات المشتريات "
                                      className={styles['text17']}
                                    />
                                  </Container>
                                </Container>
                                <Container
                                  tag="li"
                                  data-app-sidebar-list-item-sublist-item-group-id="2"
                                  className={styles['container084']}
                                >
                                  <Container
                                    tag="a"
                                    href="/v2/owner/entity/supplier/list"
                                    onclick="subSideMenuClick(event)"
                                    className
                                    className={styles['container085']}
                                  >
                                    <Text
                                      text=" إدارة الموردين "
                                      className={styles['text18']}
                                    />
                                  </Container>
                                </Container>
                                <Container
                                  tag="li"
                                  data-app-sidebar-list-item-sublist-item-group-id="2"
                                  className={styles['container086']}
                                >
                                  <Container
                                    tag="a"
                                    href="/owner/purchase_order_payments/index"
                                    onclick="subSideMenuClick(event)"
                                    className
                                    className={styles['container087']}
                                  >
                                    <Text
                                      text=" مدفوعات الموردين "
                                      className={styles['text19']}
                                    />
                                  </Container>
                                </Container>
                                <Container
                                  tag="li"
                                  data-app-sidebar-list-item-sublist-item-group-id="2"
                                  className={styles['container088']}
                                >
                                  <Container
                                    tag="a"
                                    href="/v2/owner/purchase-invoices/settings"
                                    onclick="subSideMenuClick(event)"
                                    className
                                    className={styles['container089']}
                                  >
                                    <Text
                                      text=" إعدادات فواتير الشراء "
                                      className={styles['text20']}
                                    />
                                  </Container>
                                </Container>
                                <Container
                                  tag="li"
                                  data-app-sidebar-list-item-sublist-item-group-id="2"
                                  className={styles['container090']}
                                >
                                  <Container
                                    tag="a"
                                    href="/v2/owner/suppliers/settings"
                                    onclick="subSideMenuClick(event)"
                                    className
                                    className={styles['container091']}
                                  >
                                    <Text
                                      text=" إعدادت الموردين "
                                      className={styles['text21']}
                                    />
                                  </Container>
                                </Container>
                              </Container>
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="52"
                            data-app-sidebar-list-item="52"
                            className=" super-menu mn_12 mn_finance_parent_menu"
                            className={styles['container092']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item safe"
                              className={styles['container093']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-safe"
                                className={styles['container094']}
                              />
                              <Container
                                tag="span"
                                className={styles['container095']}
                              >
                                <Text
                                  text="المالية"
                                  className={styles['text22']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container096']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="181"
                            data-app-sidebar-list-item="181"
                            className="mn_multi-line super-menu mn_13 mn_accounting_parent_menu"
                            className={styles['container097']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item cash-multiple"
                              className={styles['container098']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-cash-multiple"
                                className={styles['container099']}
                              />
                              <Container
                                tag="span"
                                className={styles['container100']}
                              >
                                <Text
                                  text="الحسابات العامة"
                                  className={styles['text23']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container101']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="153"
                            data-app-sidebar-list-item="153"
                            className=" super-menu mn_14 mn_requests"
                            className={styles['container102']}
                          >
                            <Container
                              tag="a"
                              href="/v2/owner/request_types"
                              className="menu-item clipboard-list-outline"
                              className={styles['container103']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-clipboard-list-outline"
                                className={styles['container104']}
                              />
                              <Container
                                tag="span"
                                className={styles['container105']}
                              >
                                <Text
                                  text="الطلبات"
                                  className={styles['text24']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container106']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="61"
                            data-app-sidebar-list-item="61"
                            className=" super-menu mn_15 mn_staffs"
                            className={styles['container107']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item account-multiple-outline"
                              className={styles['container108']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-account-multiple-outline"
                                className={styles['container109']}
                              />
                              <Container
                                tag="span"
                                className={styles['container110']}
                              >
                                <Text
                                  text="الموظفين"
                                  className={styles['text25']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container111']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="68"
                            data-app-sidebar-list-item="68"
                            className=" super-menu mn_16 mn_reports"
                            className={styles['container112']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item poll-box"
                              className={styles['container113']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-poll-box"
                                className={styles['container114']}
                              />
                              <Container
                                tag="span"
                                className={styles['container115']}
                              >
                                <Text
                                  text="التقارير"
                                  className={styles['text26']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container116']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="79"
                            data-app-sidebar-list-item="79"
                            className=" super-menu mn_17 mn_branches"
                            className={styles['container117']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item map-marker-multiple"
                              className={styles['container118']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-map-marker-multiple"
                                className={styles['container119']}
                              />
                              <Container
                                tag="span"
                                className={styles['container120']}
                              >
                                <Text
                                  text="الفروع"
                                  className={styles['text27']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container121']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="83"
                            data-app-sidebar-list-item="83"
                            className=" super-menu mn_18 mn_templates"
                            className={styles['container122']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item file-document-outline"
                              className={styles['container123']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-file-document-outline"
                                className={styles['container124']}
                              />
                              <Container
                                tag="span"
                                className={styles['container125']}
                              >
                                <Text
                                  text="القوالب"
                                  className={styles['text28']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container126']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="li"
                            onclick="sideMenuClick(this,event)"
                            data-menu-item-id="93"
                            data-app-sidebar-list-item="93"
                            className=" super-menu mn_19 mn_sites"
                            className={styles['container127']}
                          >
                            <Container
                              tag="a"
                              href="#"
                              className="menu-item settings-outline"
                              className={styles['container128']}
                            >
                              <Container
                                tag="i"
                                className="list-icon mdi mdi-settings-outline"
                                className={styles['container129']}
                              />
                              <Container
                                tag="span"
                                className={styles['container130']}
                              >
                                <Text
                                  text="الإعدادات"
                                  className={styles['text29']}
                                />
                              </Container>
                              <Container
                                tag="i"
                                className="mdi mdi-chevron-down"
                                className={styles['container131']}
                              />
                            </Container>
                          </Container>
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
              <Container
                tag="div"
                className="simplebar-placeholder"
                className={styles['container132']}
              />
            </Container>
            <Container
              tag="div"
              className="simplebar-track simplebar-vertical"
              className={styles['container133']}
            >
              <Container
                tag="div"
                className="simplebar-scrollbar"
                className={styles['container134']}
              />
            </Container>
          </Container>
          <Container
            tag="div"
            className="clear"
            className={styles['container135']}
          />
        </Container>
        <Container
          tag="div"
          id="main-content"
          className="layout"
          className={styles['container136']}
        >
          <Container
            tag="div"
            className="layout-container"
            className={styles['container137']}
          >
            <Container
              tag="div"
              className="header clearfix"
              className={styles['container138']}
            >
              <Container
                tag="div"
                className="container-fluid no-padder"
                className={styles['container139']}
              >
                <Container
                  tag="div"
                  className="header-elements row"
                  className={styles['container140']}
                >
                  <Container
                    tag="div"
                    className="col-md-8 col-sm-8 col-xs-7 head-pos-fix"
                    className={styles['container141']}
                  >
                    <Container
                      tag="a"
                      href="#"
                      id="shrink-sidebar"
                      className={styles['container142']}
                    >
                      <Container
                        tag="i"
                        className="mdi mdi-backburger"
                        className={styles['container143']}
                      />
                    </Container>
                    <Container
                      tag="ol"
                      id="breadcrumb"
                      className="breadcrumb up-bread header-breadcrumb"
                      className={styles['container144']}
                    >
                      <Container
                        tag="li"
                        className="breadcrumb-item"
                        className={styles['container145']}
                      >
                        <Container
                          tag="a"
                          href="/v2/owner/entity/supplier/list"
                          className={styles['container146']}
                        >
                          <Text text="الموردين" className={styles['text30']} />
                        </Container>
                      </Container>
                      <Container
                        tag="li"
                        className="breadcrumb-item active"
                        className={styles['container147']}
                      >
                        <Container
                          tag="span"
                          className={styles['container148']}
                        >
                          <Text
                            text="dsd #000001"
                            className={styles['text31']}
                          />
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                  <Container
                    tag="div"
                    className="col-md-4 col-sm-4 col-xs-5"
                    className={styles['container149']}
                  >
                    <Container
                      tag="div"
                      className="user-log"
                      className={styles['container150']}
                    >
                      <Container
                        tag="ul"
                        className="nav navbar-nav navbar-right user-nav"
                        className={styles['container151']}
                      >
                        <Container
                          tag="li"
                          className="dropdown res-right user-drop hidden-xs"
                          className={styles['container152']}
                        >
                          <Container
                            tag="a"
                            className="clearfix d-inline-flex align-items-center support-modal-btn support-btn"
                            className={styles['container153']}
                          >
                            <Container
                              tag="span"
                              className="mdi mdi-lifebuoy fs-28"
                              className={styles['container154']}
                            />
                            <Container
                              tag="span"
                              className="ml-1"
                              className={styles['container155']}
                            >
                              <Text
                                text="\n                    المساعده                "
                                className={styles['text32']}
                              />
                            </Container>
                          </Container>
                        </Container>
                        <Container
                          tag="li"
                          id="notifications-dropdown-wrapper"
                          className="dropdown s2020 res-left"
                          className={styles['container156']}
                        >
                          <Container
                            tag="a"
                            data-toggle="dropdown"
                            id="notifications-dropdown"
                            href="#"
                            aria-expanded="false"
                            className="dropdown-toggle ico-bell list_all_noti"
                            className={styles['container157']}
                          >
                            <Container
                              tag="i"
                              className="mdi mdi-bell nav-item-icon"
                              className={styles['container158']}
                            />
                          </Container>
                        </Container>
                        <Container
                          tag="li"
                          className="dropdown res-right user-drop"
                          className={styles['container159']}
                        >
                          <Container
                            tag="a"
                            data-toggle="dropdown"
                            href="/settings"
                            aria-expanded="false"
                            className="dropdown-toggle clearfix"
                            className={styles['container160']}
                          >
                            <Text
                              tag="span"
                              className="mdi mdi-account-circle"
                              className={styles['text33']}
                            />
                            <Container
                              tag="span"
                              className="drop-cont hidden-xs"
                              className={styles['container161']}
                            >
                              <Text
                                text="\n                Mohammed Alkhateb                "
                                className={styles['text34']}
                              />
                              <Container
                                tag="span"
                                className="caret"
                                className={styles['container162']}
                              />
                              <Container
                                tag="p"
                                id="menu-subtitle"
                                className={styles['container163']}
                              >
                                <Text
                                  text="Main Branch"
                                  className={styles['text35']}
                                />
                              </Container>
                            </Container>
                          </Container>
                        </Container>
                      </Container>
                      <Container
                        tag="div"
                        className="clear"
                        className={styles['container164']}
                      />
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
            <Container
              tag="div"
              className="main-area clearfix "
              className={styles['container165']}
            >
              <Container
                tag="div"
                className="container"
                className={styles['container166']}
              >
                <Text
                  tag="div"
                  className="flash-wrapper master-widget-container"
                  className={styles['text36']}
                />
                <Container tag="ol" className={styles['container167']}>
                  <Container
                    tag="div"
                    className="pages-head fixed-div"
                    className={styles['container168']}
                  >
                    <Container
                      tag="div"
                      className="container"
                      className={styles['container169']}
                    >
                      <Container
                        tag="div"
                        className="row"
                        className={styles['container170']}
                      >
                        <Container
                          tag="div"
                          className="col-md-4"
                          className={styles['container171']}
                        >
                          <Container
                            tag="h1"
                            className="left"
                            className={styles['container172']}
                          >
                            <Container
                              tag="span"
                              className={styles['container173']}
                            >
                              <Text
                                text="dsd #000001 "
                                className={styles['text37']}
                              />
                              <Container
                                tag="div"
                                className="status rate-green"
                                className={styles['container174']}
                              >
                                <Container
                                  tag="span"
                                  className="status-symble "
                                  className={styles['container175']}
                                >
                                  <Text
                                    text="نشط"
                                    className={styles['text38']}
                                  />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="tags-elems"
                                className={styles['container176']}
                              >
                                <Container
                                  tag="div"
                                  className="preventClick"
                                  className={styles['container177']}
                                >
                                  <Container
                                    tag="div"
                                    className="clear"
                                    className={styles['container178']}
                                  />
                                </Container>
                              </Container>
                            </Container>
                            <Container
                              tag="div"
                              className="sub-headings"
                              className={styles['container179']}
                            >
                              <Container
                                tag="span"
                                className="invoice-client sub-heading sub-heading2"
                                className={styles['container180']}
                              >
                                <Text
                                  text="\n                            حساب الأستاذ: "
                                  className={styles['text39']}
                                />
                                <Container
                                  tag="a"
                                  href="/v2/owner/chart-of-accounts/accounts/368"
                                  target="_blank"
                                  className={styles['container181']}
                                >
                                  <Text
                                    text="dsd #2211001"
                                    className={styles['text40']}
                                  />
                                </Container>
                              </Container>
                            </Container>
                          </Container>
                        </Container>
                        <Container
                          tag="div"
                          className="col-md-8 d-inline-flex justify-content-end align-items-center"
                          className={styles['container182']}
                        >
                          <Container
                            tag="div"
                            className="B_clients_pay pull-right B_clients_pay_new_style"
                            className={styles['container183']}
                          >
                            <Text tag="ul" className={styles['text41']} />
                          </Container>
                          <Text
                            tag="div"
                            className="mb-opt-btn"
                            className={styles['text42']}
                          />
                          <Container
                            tag="div"
                            className="clear"
                            className={styles['container184']}
                          />
                          <Container
                            tag="div"
                            className="top-actions top-actions-w100-mob"
                            className={styles['container185']}
                          >
                            <Text
                              tag="div"
                              className="mb-opt-btn"
                              className={styles['text43']}
                            />
                            <Container
                              tag="a"
                              href="/owner/suppliers/edit/1"
                              className="btn btn-lg btn-addon btn-success pull-right add-new-btn"
                              className={styles['container186']}
                            >
                              <Container
                                tag="span"
                                className={styles['container187']}
                              >
                                <Container
                                  tag="i"
                                  className="fa fa-pencil"
                                  className={styles['container188']}
                                />
                                <Text
                                  text="\n                    تعديل المورد                "
                                  className={styles['text44']}
                                />
                              </Container>
                            </Container>
                          </Container>
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                  <Container
                    tag="div"
                    className="invoice-actions btn-group dropdown-btn-group"
                    className={styles['container189']}
                  >
                    <Container
                      tag="a"
                      href="/owner/suppliers/edit/1"
                      className="btn btn-default btn-sm btn-5 "
                      className={styles['container190']}
                    >
                      <Container
                        tag="i"
                        className="fa fa-pencil"
                        className={styles['container191']}
                      />
                      <Text
                        text="\n        تعديل البيانات    "
                        className={styles['text45']}
                      />
                    </Container>
                    <Container
                      tag="a"
                      href="/owner/purchase_invoices/add?supplier_id=1"
                      className="btn btn-default btn-sm btn-5 "
                      className={styles['container192']}
                    >
                      <Container
                        tag="i"
                        className="fa fa-money"
                        className={styles['container193']}
                      />
                      <Text
                        text=" إنشاء فاتورة شراء"
                        className={styles['text46']}
                      />
                    </Container>
                    <Container
                      tag="a"
                      href="/owner/suppliers/statement/1"
                      className="btn btn-default btn-sm btn-5 "
                      className={styles['container194']}
                    >
                      <Container
                        tag="i"
                        className="fa fa-calculator"
                        className={styles['container195']}
                      />
                      <Text text=" كشف حساب" className={styles['text47']} />
                    </Container>
                    <Container
                      tag="a"
                      href="/owner/purchase_order_payments/add_open_balance/1"
                      className="btn btn-default btn-sm btn-5"
                      className={styles['container196']}
                    >
                      <Container
                        tag="i"
                        className="fa fa-credit-card"
                        className={styles['container197']}
                      />
                      <Text
                        text=" أضافة رصيد الافتتاحي"
                        className={styles['text48']}
                      />
                    </Container>
                    <Container
                      tag="a"
                      href="/owner/suppliers/add_payment_credit/1"
                      className="btn btn-default btn-sm btn-5 "
                      className={styles['container198']}
                    >
                      <Container
                        tag="i"
                        className="fa fa-money"
                        className={styles['container199']}
                      />
                      <Text
                        text=" أضف رصيد مدفوعات "
                        className={styles['text49']}
                      />
                    </Container>
                    <Container
                      tag="a"
                      href="/owner/suppliers/suspend_users/1/1"
                      className="btn btn-default btn-sm btn-5 "
                      className={styles['container200']}
                    >
                      <Container
                        tag="i"
                        className="fa fa-minus-circle"
                        className={styles['container201']}
                      />
                      <Text text=" موقوف" className={styles['text50']} />
                    </Container>
                    <Container
                      tag="a"
                      href="/owner/suppliers/delete/1"
                      className="btn btn-default btn-sm btn-4 "
                      className={styles['container202']}
                    >
                      <Container
                        tag="i"
                        className="fa fa-trash-o"
                        className={styles['container203']}
                      />
                      <Text
                        text="\n        حذف    "
                        className={styles['text51']}
                      />
                    </Container>
                  </Container>
                  <Container
                    tag="div"
                    className="tabs-box box"
                    className={styles['container204']}
                  >
                    <Container
                      tag="ul"
                      role="tablist"
                      className="nav nav-tabs responsive"
                      className={styles['container205']}
                    >
                      <Container
                        tag="li"
                        role="presentation"
                        className="active"
                        className={styles['container206']}
                      >
                        <Container
                          tag="a"
                          href="#ProfileBlock"
                          aria-controls="ProfileBlock"
                          role="tab"
                          data-toggle="tab"
                          className="active"
                          className={styles['container207']}
                        >
                          <Container
                            tag="span"
                            className="one-line"
                            className={styles['container208']}
                          >
                            <Text
                              text="\n                    الملف الشخصي                "
                              className={styles['text52']}
                            />
                          </Container>
                        </Container>
                      </Container>
                      <Container
                        tag="li"
                        role="presentation"
                        className={styles['container209']}
                      >
                        <Container
                          tag="a"
                          aria-controls="ActivityLogBlock"
                          role="tab"
                          data-toggle="tab"
                          href="#ActivityLogBlock"
                          title="Activity Log for Supplier"
                          className={styles['container210']}
                        >
                          <Container
                            tag="span"
                            className="one-line"
                            className={styles['container211']}
                          >
                            <Text
                              text="سجل النشاطات"
                              className={styles['text53']}
                            />
                          </Container>
                        </Container>
                      </Container>
                    </Container>
                    <Container
                      tag="div"
                      className="tab-content responsive"
                      className={styles['container212']}
                    >
                      <Container
                        tag="div"
                        role="tabpanel"
                        id="ProfileBlock"
                        className="tab-pane active"
                        className={styles['container213']}
                      >
                        <Container
                          tag="div"
                          className="inputs-group-list"
                          className={styles['container214']}
                        >
                          <Container
                            tag="div"
                            className="row"
                            className={styles['container215']}
                          >
                            <Container
                              tag="div"
                              className="col-md-6"
                              className={styles['container216']}
                            >
                              <Container
                                tag="table"
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                className="view-table"
                                className={styles['container217']}
                              >
                                <Container
                                  tag="tbody"
                                  className={styles['container218']}
                                >
                                  <Container
                                    tag="tr"
                                    className={styles['container219']}
                                  >
                                    <Container
                                      tag="td"
                                      className={styles['container220']}
                                    >
                                      <Container
                                        tag="h3"
                                        className={styles['container221']}
                                      >
                                        <Text
                                          text="ds ds"
                                          className={styles['text54']}
                                        />
                                      </Container>
                                      <Container
                                        tag="p"
                                        className={styles['container222']}
                                      >
                                        <Text
                                          text="ds"
                                          className={styles['text55']}
                                        />
                                      </Container>
                                      <Container
                                        tag="p"
                                        className={styles['container223']}
                                      >
                                        <Text
                                          text="d"
                                          className={styles['text56']}
                                        />
                                      </Container>
                                      <Container
                                        tag="p"
                                        className={styles['container224']}
                                      >
                                        <Text
                                          text="ds, "
                                          className={styles['text57']}
                                        />
                                      </Container>
                                    </Container>
                                  </Container>
                                </Container>
                              </Container>
                            </Container>
                            <Container
                              tag="div"
                              className="col-md-6"
                              className={styles['container225']}
                            >
                              <Container
                                tag="table"
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                className="view-table"
                                className={styles['container226']}
                              >
                                <Container
                                  tag="tbody"
                                  className={styles['container227']}
                                >
                                  <Container
                                    tag="tr"
                                    className={styles['container228']}
                                  >
                                    <Container
                                      tag="td"
                                      className={styles['container229']}
                                    >
                                      <Container
                                        tag="strong"
                                        className={styles['container230']}
                                      >
                                        <Text
                                          text="الهاتف:"
                                          className={styles['text58']}
                                        />
                                      </Container>
                                    </Container>
                                    <Container
                                      tag="td"
                                      className={styles['container231']}
                                    >
                                      <Text
                                        text="ds"
                                        className={styles['text59']}
                                      />
                                    </Container>
                                  </Container>
                                </Container>
                              </Container>
                            </Container>
                          </Container>
                        </Container>
                        <Container
                          tag="div"
                          id="custom-form-view"
                          className={styles['container232']}
                        />
                        <Container
                          tag="div"
                          className="input-fields mt-8"
                          className={styles['container233']}
                        >
                          <Container
                            tag="h3"
                            className="head-bar theme-color-a"
                            className={styles['container234']}
                          >
                            <Container
                              tag="span"
                              className="details-info"
                              className={styles['container235']}
                            >
                              <Text
                                text="\n                                معلومات سريعة                            "
                                className={styles['text60']}
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="div"
                            className="row"
                            className={styles['container236']}
                          >
                            <Container
                              tag="div"
                              className="col-md-6"
                              className={styles['container237']}
                            >
                              <Container
                                tag="table"
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                className="view-table"
                                className={styles['container238']}
                              >
                                <Container
                                  tag="tbody"
                                  className={styles['container239']}
                                >
                                  <Container
                                    tag="tr"
                                    className={styles['container240']}
                                  >
                                    <Container
                                      tag="td"
                                      width="160"
                                      className={styles['container241']}
                                    >
                                      <Container
                                        tag="strong"
                                        className={styles['container242']}
                                      >
                                        <Text
                                          text="\n                                        عدد فواتير الشراء: "
                                          className={styles['text61']}
                                        />
                                      </Container>
                                    </Container>
                                    <Container
                                      tag="td"
                                      className={styles['container243']}
                                    >
                                      <Text
                                        text="                                        No issued purchase invoices                                    "
                                        className={styles['text62']}
                                      />
                                    </Container>
                                  </Container>
                                  <Container
                                    tag="tr"
                                    className={styles['container244']}
                                  >
                                    <Container
                                      tag="td"
                                      className={styles['container245']}
                                    >
                                      <Container
                                        tag="strong"
                                        className={styles['container246']}
                                      >
                                        <Text
                                          text="\n                                        عدد فواتير الشراء الغير مدفوعة: "
                                          className={styles['text63']}
                                        />
                                      </Container>
                                    </Container>
                                    <Container
                                      tag="td"
                                      className={styles['container247']}
                                    >
                                      <Text
                                        text="                                        No due purchase invoices                                    "
                                        className={styles['text64']}
                                      />
                                    </Container>
                                  </Container>
                                </Container>
                              </Container>
                            </Container>
                            <Container
                              tag="div"
                              className="col-md-6"
                              className={styles['container248']}
                            >
                              <Container
                                tag="table"
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                className="view-table"
                                className={styles['container249']}
                              >
                                <Container
                                  tag="tbody"
                                  className={styles['container250']}
                                >
                                  <Container
                                    tag="tr"
                                    className={styles['container251']}
                                  >
                                    <Container
                                      tag="td"
                                      width="160"
                                      className={styles['container252']}
                                    >
                                      <Container
                                        tag="strong"
                                        className={styles['container253']}
                                      >
                                        <Text
                                          text="\n                                        اخر فاتورة شراء: "
                                          className={styles['text65']}
                                        />
                                      </Container>
                                    </Container>
                                    <Container
                                      tag="td"
                                      className={styles['container254']}
                                    >
                                      <Text
                                        text="                                        No issued Purchase Invoices                                    "
                                        className={styles['text66']}
                                      />
                                    </Container>
                                  </Container>
                                </Container>
                              </Container>
                            </Container>
                          </Container>
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
            <Container
              tag="div"
              className="clear"
              className={styles['container255']}
            />
          </Container>
        </Container>
        <Container
          tag="div"
          id="help-container"
          className={styles['container256']}
        >
          <Container
            tag="div"
            className="modal-bg-container"
            className={styles['container257']}
          >
            <Container
              tag="div"
              className="modal-bg"
              className={styles['container258']}
            />
          </Container>
          <Text tag="div" id="modal-container" className={styles['text67']} />
        </Container>
        <Container
          tag="div"
          className="ui-daterangepickercontain"
          className={styles['container259']}
        />
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
