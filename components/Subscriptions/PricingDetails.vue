<template>
  <div>
    <div class="pricing-header-main-container">
      <div class="pricing-header-container">
        <div class="pricing-flexing-software-container">
          <span class="pricing-flexing-software" style="color: white;">Customizable&nbsp;software, <span
              style="white-space: nowrap;">Cost-effective price</span>
          </span> </br>
          <small class="new-banner-cpqforAll-content" style="color: white;">CPQ FOR ALL</small>
        </div>
        <div class="pricing-tags-lists-body">
          <ul class="pricing-tags-lists">
            <li class="pricing-tags-li">
              <i class="bi bi-check-circle-fill pricing-fill-logos" style="color: #715cf3;"></i>
              <div class="pricing-tags-li-container">
                <span class="pricing-tags-li-container-span">Personalized Demo </span>
                <small>With proof of concept </small>
              </div>
            </li>
            <li class="pricing-tags-li">
              <i class="bi bi-check-circle-fill pricing-fill-logos" style="color: #715cf3;"></i>
              <div class="pricing-tags-li-container">
                <span class="pricing-tags-li-container-span">Document Generation</span>
                <small>Dynamic images, real-time updates </small>
              </div>
            </li>
            <li class="pricing-tags-li">
              <i class="bi bi-check-circle-fill pricing-fill-logos" style="color: #715cf3;"></i>
              <div class="pricing-tags-li-container">
                <span class="pricing-tags-li-container-span">Rapid Implementation </span>
                <small>50% faster setup </small>
              </div>
            </li>
            <li class="pricing-tags-li">
              <i class="bi bi-check-circle-fill pricing-fill-logos" style="color: #715cf3;"></i>
              <div class="pricing-tags-li-container">
                <span class="pricing-tags-li-container-span">Streamline Pricing</span>
                <small>Real-time cost estimation</small>
              </div>
            </li>
          </ul>
        </div>

        <div class="pricing-page-button-container">
          <div class="pricing-page-button-sub-container">
            <div class="pricing-absolut-button" ref="toggleButton"></div>
            <button class="pricing-monthly" ref="button1" @click="leftClick">MONTHLY</button>
            <button class="pricing-yearly" ref="button2" @click="rightClick">YEARLY</button>
          </div>
        </div>


      </div>

      <div class="saveupto80">
        <img src="../../assets/images/PricingAssests/pricingArrow.png" alt="pricing Arrow" class="peicing-Arrow">
        <span class="saveupto80text">save up to 80%</span>
      </div>

    </div>


    <div class="subscription-layout">
      <CustomPopup v-if="showPopup" @close="handleClose" />
      <div class="subscription-main-content-box">
        <div class="sub-container">
          <div style="width:100%">
            <div class="cards-section1">

              <div class="pricing-card-body">
                <div class="plan-text-body">
                  <small class="pricing-plan-label">Pay-As-You-Go</small>

                </div>

                <div class="pricing-card-content">

                  <span class="">
                    Perfect for any business size, <br> pay per quote</span>

                </div>
                <div class="cards-cash-amount">

                  <span class="cards-cashs">
                    <small style="font-size: 22px;">{{ currency_symbol }}</small>
                    <span>{{ payAsYouGoAmount }}</span>

                  </span>
                  <div class="perquoteDiv">
                    <span class="">/quote </span>
                  </div>

                </div>
                <div class="card-key-feature-lists">
                  <div id="key-features-hidden">
                    <span class="card-key-feature-lists-h1">Key features : </span>
                    <ul class="cards-list-item">
                      <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                          class="card-list-item-content">Unlimited users</span></li>
                      <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                          class="card-list-item-content">Word & PDF export </span></li>
                      <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                          class="card-list-item-content">Dynamic document generation </span></li>
                      <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                          class="card-list-item-content">Advanced product catalog </span></li>
                      <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                          class="card-list-item-content">Basic reports</span></li>
                      <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                          class="card-list-item-content">Two-factor authentication </span></li>
                      <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                          class="card-list-item-content">Self-approvals</span></li>
                    </ul>
                  </div>
                </div>


                <div class="button_div">
                  <a href="https://web.dealdox.io/register?paymentMode=payAsYouGo">
                    <button class="try_free">Access DealDox CPQ</button>
                  </a>
                  <!-- <NuxtLink :to="{
                    name: 'contact-us',
                    params: { source: 'Enterprise' },
                  }">
                    <button class="try_free">Access DealDox CPQ </button>
                  </NuxtLink> -->

                </div>
              </div>
              <div class="pricing-card-body">
                <div class="plan-text-body">
                  <small class="pricing-plan-label">Standard</small>

                </div>

                <div class="pricing-card-content">

                  <span class="">
                    Fast, impressive proposals for small businesses at an affordable price</span>

                </div>
                <div class="cards-cash-amount">

                  <span class="cards-cashs">
                    <small style="font-size: 22px;">{{ currency_symbol }}</small>
                    <span v-if="monthly">{{ monthlystandardAmount }}</span>
                    <span v-else>{{ standardAmount }}</span>

                  </span>
                  <div class="perquoteDiv">
                    <span v-if="monthly">/user/month billed monthly</span><span v-else>
                      /user/month billed annually</span>
                  </div>

                </div>
                <div class="card-key-feature-lists">
                  <span class="card-key-feature-lists-h1">Everything in Pay-as-you-go+ </span>
                  <ul class="cards-list-item">
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Minimum 3 users </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Custom styles</span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Multi-tiered documents </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Dynamic image updates </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Custom reports </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Reporting hierarchy </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Multi-tier approvals </span></li>
                  </ul>
                </div>



                <div class="button_div">
                  <a href="https://web.dealdox.io/register?paymentMode=standard">
                    <button class="try_free">Access DealDox CPQ</button>
                  </a>
              

                  <!-- <NuxtLink :to="{
                    name: 'contact-us',
                    params: { source: 'Enterprise' },
                  }">
                    <button class="try_free">Access DealDox CPQ </button>
                  </NuxtLink> -->
                </div>
              </div>
              <div class="pricing-card-body" style="background: linear-gradient(to bottom, #e9d7ff, #ffffff);">
                <div class="plan-text-body">
                  <small class="pricing-plan-label">Premium</small>

                </div>

                <div class="pricing-card-content">

                  <span class="">
                    Integrate CRM & automate approvals, perfect for growing businesses </span>

                </div>
                <div class="cards-cash-amount">

                  <span class="cards-cashs">
                    <small style="font-size: 22px;">{{ currency_symbol }}</small>
                    <span v-if="monthly">{{ monthlypremiumAmount }}</span>
                    <span v-else>{{ premiumAmount }}</span>
                  </span>
                  <div class="perquoteDiv">
                    <span v-if="monthly">/user/month billed monthly</span><span v-else>
                      /user/month billed annually</span>
                  </div>

                </div>
                <div class="card-key-feature-lists">
                  <span class="card-key-feature-lists-h1">Everything in Standard+ </span>
                  <ul class="cards-list-item">
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Minimum 2 users </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Data import from excel </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Rule-based document controlling </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Global currency support </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Report scheduling </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">CRM Integrations </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Mobile Apps </span></li>
                  </ul>
                </div>


                <div class="button_div">
                  <a href="https://web.dealdox.io/register?paymentMode=premium">
                    <button class="try_free">Access DealDox CPQ</button>
                  </a>
                </div>
              </div>
              <div class="pricing-card-body">
                <div class="plan-text-body">
                  <small class="pricing-plan-label">Enterprise</small>

                </div>

                <div class="pricing-card-content">

                  <span class="">
                    Tailored for enterprise-level businesses with complex pricing & estimations </span>

                </div>
                <div class="cards-cash-amount">

                  <span class="custom-pricing-cardss-pric">

                    <span style="font-weight:600">Custom Pricing</span>
                  </span>


                </div>
                <div class="card-key-feature-lists">
                  <span class="card-key-feature-lists-h1">Everything in Premium+ </span>
                  <ul class="cards-list-item">
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">AI capabilities </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Advanced customizations</span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Knowledge articles </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Admin enabled self-service </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Access & activity logs </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">CRM & ERP Integrations </span></li>
                    <li class="card-list-item-content-li"><i class="bi bi-check2 checkmarks-pricing"></i><span
                        class="card-list-item-content">Priority calls & Email support </span></li>
                  </ul>
                </div>


                <div class="button_div">
                  <!-- <a href="https://web.dealdox.io/register?paymentMode=standard">
                    <button class="try_free">Connect to sales </button>
                  </a> -->

                  <NuxtLink :to="{
                    name: 'contact-us',
                    params: { source: 'Enterprise' },
                  }">
                    <button class="try_free">Connect to Sales </button>
                  </NuxtLink>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="tax-container-div"><span class="tax-container">Local taxes (VAT, GST, etc.) will be charged in
            addition to the prices mentioned.</span></div>

        <div class="subscription-table-container">
          <div class="features-header-cpq-compare-body">
            <span class="features-header-cpq-compare" style="line-height:normal">Compare all features of DealDox CPQ
              Pricing</span>
            <div class="table-container-sub1">

              <table class="centered-table1">
                <thead role="rowgroup">
                  <div>
                    <tr class="table_row1" role="row">
                      <th role="columnheader" scope="col" class="table_header">
                        <div class="sub_label-container2">
                          <label class="checkbox_container" :checked="isEnabled" @change="handleCheckboxChange()"
                            style="cursor:'pointer'">
                            <input style="height: 10px; width: 10px;cursor: pointer" type="checkbox" />
                            <span class="hide_expand" v-if="isEnabled" style="cursor: pointer;">Collapse Now</span>
                            <span class="hide_expand" style="cursor: pointer" v-else>Expand All</span>
                          </label>
                        </div>
                      </th>

                      <th role="columnheader" scope="col" class="table__cell2">
                        <a :href="`https://web.dealdox.io/register?paymentMode=payAsYouGo`" class="subscription-anker-tag"
                          target="_blank" rel="noopener noreferrer">
                          <div class="edition_wrapper">
                            <div class="edition__copy__wrapper">
                              <div class="edition_name">Pay-As-You-Go</div>
                            </div>
                          </div>
                        </a>
                        <!-- <NuxtLink :to="{
                          name: 'contact-us',
                          params: { source: 'Enterprise' },
                        }" class="nuxtlink-enterise">
                          <div class="edition_wrapper">
                            <div class="edition__copy__wrapper">
                              <div class="edition_name">Pay-As-You-Go</div>

                            </div>
                          </div>
                        </NuxtLink> -->

                      </th>
                      <th role="columnheader" scope="col" class="table__cell2">
                        <a :href="`https://web.dealdox.io/register?paymentMode=standard`" class="subscription-anker-tag"
                          target="_blank" rel="noopener noreferrer">
                          <div class="edition_wrapper">
                            <div class="edition__copy__wrapper">
                              <div class="edition_name">Standard</div>


                            </div>
                          </div>
                        </a>

                        <!-- <NuxtLink :to="{
                          name: 'contact-us',
                          params: { source: 'Enterprise' },
                        }" class="nuxtlink-enterise">
                          <div class="edition_wrapper">
                            <div class="edition__copy__wrapper">
                              <div class="edition_name">Standard</div>

                            </div>
                          </div>
                        </NuxtLink> -->

                      </th>
                      <th role="columnheader" scope="col" class="table__cell2">
                        <a :href="`https://web.dealdox.io/register?paymentMode=premium`" class="subscription-anker-tag"
                          target="_blank" rel="noopener noreferrer">
                          <div class="edition_wrapper">
                            <div class="edition__copy__wrapper">
                              <div class="edition_name">Premium</div>

                            </div>
                          </div>
                        </a>
                        <!-- <NuxtLink :to="{
                          name: 'contact-us',
                          params: { source: 'Enterprise' },
                        }" class="nuxtlink-enterise">
                          <div class="edition_wrapper">
                            <div class="edition__copy__wrapper">
                              <div class="edition_name">Premium</div>

                            </div>
                          </div>
                        </NuxtLink> -->

                      </th>
                      <th role="columnheader" scope="col" class="table__cell2">

                        <NuxtLink :to="{
                          name: 'contact-us',
                          params: { source: 'Enterprise' },
                        }" class="nuxtlink-enterise">
                          <div class="edition_wrapper">
                            <div class="edition__copy__wrapper">
                              <div class="edition_name">Enterprise</div>

                            </div>
                          </div>
                        </NuxtLink>
                      </th>
                    </tr>
                  </div>
                </thead>
              </table>
            </div>

            <div class="sub_container-questions" :style="{ marginTop: '10px' }">
              <div class="compoFeature">
                <FeaturedData :topText="'Automated Sales Proposal'" :editions="editions" :tableData="tableData3"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />

                <FeaturedData :topText="'Efficient Collaboration'" :editions="editions" :tableData="tableData4"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'Reporting'" :editions="editions" :tableData="tableData20"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />

                <FeaturedDataA77 :topText="'Track & Monitor'" :editions="editions" :tableData="tableData5"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />

                <FeaturedData :topText="'Integrations & API'" :editions="editions" :tableData="tableData6"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'Security & Compliance'" :editions="editions" :tableData="tableData7"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'Governance & Administration'" :editions="editions" :tableData="tableData21"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'Account & Opportunity Management'" :editions="editions"
                  :tableData="tableData16" :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'Mobile Apps'" :editions="editions" :tableData="tableData1"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'Approval Workflow'" :editions="editions" :tableData="tableData14"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />


                <FeaturedData :topText="'Configure Price Quote'" :editions="editions" :sectiontableData="cpqTableData"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'General'" :editions="editions" :tableData="tableData15"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'Customer Support'" :editions="editions" :tableData="tableData8"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <!-- <FeaturedData :topText="'AI Personal Assistant'" :editions="editions" :tableData="tableData17"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" /> -->
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>

</template>
<script>
import axios from "axios";
import CustomPopup from "./CustomPopup.vue";
import FeaturedData from "./FeaturedData.vue";
import  CONSTANTS  from "../Common/currencyList";


export default {
  components: {
    CustomPopup,
    FeaturedData,
  },
  name: "PricingDetails",
  data() {
    return {
      showPopup: false,
      isEnabled: false,
      hideCommonFeatures: false,
      showMessage: false,
      currentCountryCode: "INR",
      currentCurrencyAmount: 1,
      payAsYouGoAmount: 9,
      standardAmount: 499,
      premiumAmount: 799,
      monthlystandardAmount: 899,
      monthlypremiumAmount: 1439,
      monthly: false,
      currency_symbol: "₹",
      editions: [

        {
          name: "Pay-As-You-Go",
          price: 1,
          currency: "INR",
          currency_symbol: "₹",
          billing: "/month/User",
          datapass: "standard",
        },
        {
          name: "STANDARD",
          price: this.standardAmount,
          currency: "INR",
          currency_symbol: "₹",
          billing: "/month/User",
          datapass: "standard",
        },
        {
          name: "Premium",
          price: this.premiumAmount,
          currency: "INR",
          currency_symbol: "₹",
          billing: "/month/User",
          datapass: "premium",
        },
        {
          name: "Enterprise",
          message: "Contact Sales",
          datapass: "enterprise",
        },
      ],
      tableData1: [
        {
          heading: "Android - Playstore",
          cells: ["-", "-", "Included", "Included"],


        },
        {
          heading: "Apple - Appstore",
          cells: ["-", "-", "Included", "Included"],

        },
      ],
      tableData2: [
        {
          heading: "Generate Quotations",
          cells: ["Unlimited", "Unlimited", "Unlimited"],

        },
        {
          heading: "Seat Limit",
          cells: ["Unlimited", "Upto 5", "Unlimited"],

        },
      ],
      tableData3: [
        {
          heading: "Word & PDF Export",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Dynamic Document Generation",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Advanced Product Catalog",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Combination of Product & Service Catalog",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Product, Service, and Expense Document",
          cells: ["Included", "Included", "Included", "Included"],
        },
        {
          heading: "Conditional logic with formula fields",
          cells: ["-", "Included", "Included", "Included"],

        },
        {
          heading: "Multi-tiered Documents generated from each proposal",
          cells: ["-", "Included", "Included", "Included"],

        },
        {
          heading: "Dynamic Documents",
          cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],

        },
        {
          heading: "Rules Engine",
          cells: ["Limited", "Limited", "Unlimited", "Unlimited"],

        },
        {
          heading: "Automated Bundling",
          cells: ["Limited", "Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Configured Pricing",
          cells: ["Included", "Included", "Included", "Included"],
        },
        {
          heading: "Pricing Flexibility",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Multi Tier Discounts",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Rate Card Versioning",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Global Currency Support",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Custom Branding",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Custom Document Templates",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Data Collection via Forms",
          cells: ["Limited", "Limited", "Unlimited", "Unlimited"],

        },
        {
          heading: "Rich Media Content",
          cells: ["Limited", "Limited", "Unlimited", "Unlimited"],

        },
        {
          heading: "Custom Style",
          cells: ["Limited", "Limited", "Unlimited", "Unlimited"],

        },
        {
          heading: "Font & Vibrant Document Styling",
          cells: ["Limited", "Limited", "Unlimited", "Unlimited"],

        },
        {
          heading: "Dynamic Image Updates",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Data Split By Table",
          cells: ["Limited", "Limited", "Unlimited", "Unlimited"],

        },
        {
          heading: "Generate Multiple Quote Iterations",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "DealDox Watermark",
          cells: [
            "Watermarked",
            "Watermarked",
            "Watermarked",
            "Unwatermarked",
          ],
        },
        {
          heading: "Customized Content",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Number of Pages per Document",
          cells: ["Limited", "Limited", "Unlimited", "Unlimited"],

        },
        {
          heading: "Document Types",
          cells: ["1", "Upto 3", "Upto 5", "Unlimited"],

        },
        {
          heading: "DealDox Generated Word Document Editing Restricted",
          cells: ["Locked", "Locked", "Locked", "UnLocked"],

        },
        {
          heading: "Translingual Document",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Saving created DealDocuments within the application",
          cells: ["Included", "Included", "Included", "Included"],
        },
        {
          heading: "Service & Product Line Items",
          cells: ["Limited", "Limited", "Unlimited", "Unlimited"],

        },
        {
          heading: "Custom Quote Name",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Password Protection Digital Proposals",
          cells: ["Included", "Included", "Included", "Included"],

        },

        {
          heading: "In App Document Stored",
          cells: ["Included", "Included", "Included", "Included"],


        },
        {
          heading: "Admin-Enabled Self-Service Configuration",
          cells: ["-", "-", "Included", "Included"],
          icon: "true",
          message: "Minimum 10 Licences to be Procured ",
        },
        {
          heading: "Knowledge Articles",
          cells: ["-", "-", "-", "Included"],

        },
      ],
      tableData4: [
        {
          heading: "Approval Workflow",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Data Import from Excel",
          cells: ["-", "-", "Included", "Included"],
        },
        {
          heading: "Currency Conversions",
          cells: ["-", "-", "10", "Unlimited"],
        },
        {
          heading: "Multi Service Templates",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Pricing Table",
          cells: ["Included", "Included", "Included", "Included"],

        },
      ],
      tableData5: [
        {
          heading: "Audit Trial",
          cells: ["-", "-", "-", "Included"],
        
        },
        {
          heading: "Reports",
          cells: ["Included", "Included", "Included", "Included"],

        },
      ],
      tableData6: [
        {
          heading: "CRM",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "ERP ",
          cells: ["-", "-", "-", "Included"],
        },
        {
          heading: "PSA",
          cells: ["-", "-", "-", "Included"],
        },
        {
          heading: "Custom Application",
          cells: ["-", "-", "-", "Included"],
        },
        {
          heading: "Data merge with CRM and quotes",
          cells: ["-", "-", "-", "Included"],
        },
        {
          heading: "WhatsApp Business",
          cells: ["-", "-", "-", "Included"],

        },
        {
          heading: "Google Maps",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Email",
          cells: ["-", "-", "-", "Included"],

        },
      ],
      tableData7: [
        {
          heading: "Two-Factor Authentication",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Profiles",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Roles",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Reporting Hierarchy",
          cells: ["-", "Included", "Included", "Included"],

        },
        {
          heading: "Audit Logs",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Data Security & Encryption",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Field Level Security",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Proposal Encryption",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Allowed IPs",
          cells: ["-", "Included", "Included", "Included"],

        },
        {
          heading: "SOC 2 Type II Compliant",
          cells: ["Included", "Included", "Included", "Included"],

        },

        {
          heading: "ISO 27001 Compliant",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "GDPR Compliance Settings",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "HIPAA Compliance Settings",
          cells: ["Included", "Included", "Included", "Included"],

        },
      ],
      tableData8: [
        {
          heading: "Web To Case Form",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Email Support",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Call Support",
          cells: ["-", "-", "-", "Included"],

        },
        {
          heading: "Priority Call & Email Support",
          cells: ["-", "-", "-", "Included"],

        },
        {
          heading: "Dedicated Account Manager",
          cells: ["-", "-", "-", "Included"],

        },
      ],
      tableData17: [
        {
          heading: "Real Time Analysis & Insights",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Quotation Assistance",
          cells: ["-", "-", "Included", "Included"],
     
        },
        {
          heading: "Smart Pricing Suggestions",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Automated Email Drafting",
          cells: ["-", "-", "Included", "Included"],
      
        },
        {
          heading: "Real-Time Query Handling",
          cells: ["-", "-", "-", "Included"],
    
        },
        {
          heading: "Scenario Simulation",
          cells: ["-", "-", "-", "Included"],
   
        },
        {
          heading: "Task Automation",
          cells: ["-", "-", "-", "Included"],
        
        },
        {
          heading: "Predictive Sales Analysis",
          cells: ["-", "-", "-", "Included"],
  
        },
      ],
      tableData9: [
        {
          heading: "Sandbox",
          cells: ["-", "Included", "Included"],

        },
        {
          heading: "Production",
          cells: ["Included", "Included", "Included"],

        },
        {
          heading: "Super Admin Access",
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Account & Opportunity Management",
          cells: ["-", "-", "-"],
        },
        {
          heading: "Document Library",
          cells: ["-", "-", "-"],
        },
        {
          heading: "Rules Validation",
          cells: ["-", "-", "-"],
        },
        {
          heading: "Total Number Of Actions",
          cells: ["-", "-", "-"],
        },
      ],
      tableData10: [
        {
          heading: "Super Admin Access",
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Account & Opportunity Management",
          cells: ["-", "-", "-"],
        },
        {
          heading: "Document Library",
          cells: ["-", "-", "-"],
        },
        {
          heading: "Rules Validation",
          cells: ["-", "-", "-"],
        },
        {
          heading: "Total Number Of Actions",
          cells: ["-", "-", "-"],
        },
      ],
      tableData11: [
        {
          heading: "Guided Selling Flows Per CRM Org Account",
          cells: ["10", "50", "100"],
        },
        {
          heading: "Maximum Questions In Guided Selling (Qids)",
          cells: ["100", "1000", "Unlimited"],
        },
        {
          heading: "CSP To Create/Update Templates",
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Self Service Deployment",
          cells: ["-", "-", "Included"],
        },
        {
          heading: "Reports For Quote Creation",
          cells: ["-", "-", "Included"],
        },
        {
          heading: "Reports For Delivery",
          cells: ["-", "-", "Included"],
        },
      ],
      tableData12: [
        {
          heading: "Total Number Of Price Rules",
          cells: ["50", "75", "100"],
        },
        {
          heading: "Module Based Conditions Per Primary Rule",
          cells: ["10", "15", "20"],
        },
        {
          heading: "Cell Range Limit Per Item In Volume Rules",
          cells: ["200", "500", "1000"],
        },
        {
          heading: "Record Range Limit Per Item In Volume Pricing Rules",
          cells: ["200", "500", "1000"],
        },
      ],
      tableData13: [
        {
          heading: "Auto Populate Product Skus Based On Configuration Rules",
          cells: ["50", "100", "1000"],
        },
        {
          heading: "Total Number Of Product Configurations",
          cells: ["50", "100", "1000"],
        },
        {
          heading: "Module Based Conditions Count Under Primary Rule Criteria",
          cells: ["10", "50", "100"],
        },
        {
          heading: "Total Number Of Actions Per Rule Across",
          cells: ["25", "50", "100"],
        },
      ],
      tableData14: [
        {
          heading: "Self Approvals",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Single Click Approvals",
          cells: ["-", "Included", "Included", "Included"],

        },
        {
          heading: "Mobile on the go Approvals",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Sequential Approvals",

          cells: ["-", "-", "Included", "Included"],
        },
        {
          heading: "Parallel Approvals",
          cells: ["-", "-", "Included", "Included"],
        },
        {
          heading: "Threshold-based Approvals",

          cells: ["-", "-", "Included", "Included"],
        },
        {
          heading: "Departmental Approvals",
          cells: ["-", "-", "-", "Included"],
        },
        {
          heading: "Approval Dashboards",

          cells: ["-", "-", "Included", "Included"],
        },
      ],
      tableData15: [
        {
          heading: "Personal Settings",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Profile Picture",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Company Logo and Theme",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Translations",
          cells: ["-", "Included", "Included", "Included"],

        },
        {
          heading: "Multiple Environments",
          cells: ["-", "-", "-", "Included"],

        },
        {
          heading: "Training",
          cells: ["-", "-", "-", "Included"],

        },
      ],
      tableData16: [
        {
          heading: "Leads",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Accounts",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Deals",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Customizable Sales Stages",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Notifications",
          cells: ["Included", "Included", "Included", "Included"],

        },
        {
          heading: "Reminders",
          cells: ["-", "-", "-", "Included"],

        },
        {
          heading: "Additional Fields on Accounts ",
          cells: ["-", "Included", "Included", "Included"],

        },
        {
          heading: "Additional Fields on Opportunity",
          cells: ["-", "Included", "Included", "Included"],

        },
      ],
      cpqTableData: [
        {
          header: "Guided Selling Strategy Guides",
          rows: [
            {
              heading: "Guidance for products selection",
              cells: ["Included", "Included", "Included", "Included"],
            },
            {
              heading: "Guidance based on target markets, business lines, geography, customer profiles, and custom fields",
              cells: ["Included", "Included", "Included", "Included"],
            },
            {
              heading: "Auto-populate product SKUs based on configuration rules",
              cells: ["Included", "Included", "Included", "Included"],
            },

          ],
        },
        {
          header: "Guided Selling",
          rows: [
            {
              heading: "Guided selling flows (across the CRM org Account)",
              cells: ["10", "25", "50", "100"],
            },
            {
              heading: "Built-in functions",
              cells: ["100", "200", "300", "500"],
            },
            {
              heading: "Questions that can be added in Guided Selling ",
              cells: ["100", "300", "1000", "2000"],
            },
            {
              heading: "Guided Selling Templates",
              cells: ["3", "6", "9", "12"],
            },
            {
              heading: "Automated Guided Selling",
              cells: ["1", "3", "5", "10"],
            },
          ],
        },
        {
          header: "Price Rules",
          rows: [
            {
              heading: "Price Rules",
              cells: ["50", "75", "150", "250"],
            },
            {
              heading: "Module-Based Conditions Under Primary Rule Criteria",
              cells: ["10", "15", "20", "25"],
            },
            {
              heading: "Cell range that can be added per item in the Volume type price rules - RULES-Formula-logical ",
              cells: ["150", "250", "500", "1000"],
            },

            {
              heading: "Number of record range that can be added per item in the Volume type price rules - RULES-Formula-logical",
              cells: ["100", "250", "500", "1000"],
            },
          ],
        },
        {
          header: "Product Configuration",
          rows: [
            {
              heading: "Auto-populate product SKUs based on configuration rules",
              cells: ["25", "50", "100", "500"],
            },
            {
              heading: "Product Configurations",
              cells: ["25", "50", "100", "1000"],
            },
            {
              heading: "Module-based Conditions Count under Primary Rule Criteria",
              cells: ["5", "10", "50", "100"],
            },
            {
              heading: "Total number of Actions per Rule",
              cells: ["25", "50", "75", "100"],
            },

          ],
        },
      ],
      tableData20: [
        {
          heading: "Reports",
          cells: ["Included", "Included", "Included", "Included"],
        },
        {
          heading: "Custom Reports",
          cells: ["-", "Included", "Included", "Included"],

        },
        {
          heading: "Design and maintain reports in-app",
          cells: ["-", "Included", "Included", "Included"],

        },
        {
          heading: "Report Scheduling",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Dashboards",
          cells: ["-", "-", "-", "Included"],

        },
        {
          heading: "Audit Trial",
          cells: ["-", "-", "-", "Included"],

        },
      ],
      tableData21: [
        {
          heading: "Fine-grained Access Control",
          cells: ["Included", "Included", "Included", "Included"],
        },
        {
          heading: "Organization Admins",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Workspace Admins",
          cells: ["-", "Included", "Included", "Included"],

        },
        {
          heading: "Custom Roles",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Groups",
          cells: ["-", "-", "-", "Included"],

        },
        {
          heading: "Access Logs",
          cells: ["-", "-", "-", "Included"],

        },
        {
          heading: "Activity Logs",
          cells: ["-", "-", "-", "Included"],

        },
        {
          heading: "Audit History",
          cells: ["-", "-", "-", "Included"],

        },
      ],


    };
  },
  async mounted() {
    document.body.removeAttribute("style");
    try {
      await this.getCurrencyCode();
      await this.getExchangeAmount();
      this.converAmount();
    } catch (error) {
      console.error("Error during initialization:", error);
    }
    this.triggerPopup();
  },
  watch: {
    async currentCountryCode(newCode, oldCode) {
      if (newCode) {
        console.log(`Country code changed from ${oldCode} to ${newCode}`);

       
        const rawSymbol = CONSTANTS.currencyList.find(
          (x) => x.code === newCode
        );
        const parser = new DOMParser();
        this.currency_symbol = parser
          ? parser.parseFromString(rawSymbol.symbol, "text/html").body
            .textContent
          : this.currency_symbol;

        console.log("Currency symbol:", this.currency_symbol);

        // Fetch the exchange amount and update amounts
        await this.getExchangeAmount();
        this.converAmount();
      }
    },
  },
  methods: {
    async getCurrencyCode() {
      try {
        const response = await axios.get(`https://ipapi.co/currency/`);
        this.currentCountryCode = response.data;
        console.log("Detected country code:", this.currentCountryCode);
      } catch (error) {
        console.error("Failed to fetch currency code:", error);
        this.currentCountryCode = "INR";
      }
    },

    async getExchangeAmount() {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/c388446c26da9cbd5b015329/latest/INR`
        );
        console.log("Resposne",response);
        
        this.currentCurrencyAmount =
          response.data.conversion_rates[this.currentCountryCode];
        console.log("Currency amount:", this.currentCurrencyAmount);
      } catch (error) {
        console.error("Failed to fetch exchange amount:", error);
      }
    },

    calculateAmount(baseAmount, multiplier = 1) {
      return parseFloat(Math.ceil(baseAmount * this.currentCurrencyAmount * multiplier));
    },

    converAmount() {
      try {
        const multiplier = this.currentCountryCode.toUpperCase() === "INR" ? 1 : 3;
        this.payAsYouGoAmount = this.calculateAmount(9, multiplier);
        this.standardAmount = this.calculateAmount(499, multiplier);
        this.premiumAmount = this.calculateAmount(799, multiplier);
        this.monthlystandardAmount = this.calculateAmount(899, multiplier);
        this.monthlypremiumAmount = this.calculateAmount(1439, multiplier);
      } catch (error) {
        console.error("Error in converAmount:", error);
        this.payAsYouGoAmount = 9;
        this.standardAmount = 9.55;
        this.premiumAmount = 19.55;
      }
    },

    triggerPopup() {
      const popupIntervals = [3 * 60 * 1000, 540000, 1260000]; 
      popupIntervals.forEach((interval) => {
        setTimeout(() => {
          this.showPopup = true;
        }, interval);
      });
    },

    handleClose() {
      this.showPopup = false;
    },

    navigateToPage(paramValue) {
      this.$router.push({ name: "contact-us", params: { source: paramValue } });
    },

    lastUpdatedDate() {
      const date = new Date("2024-08-01");
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },

    handleHideCommonFeaturesChange() {
      this.hideCommonFeatures = !this.hideCommonFeatures;
    },

    handleCheckboxChange() {
      this.isEnabled = !this.isEnabled;
    },

    leftClick() {
      const toggleButton = this.$refs.toggleButton;
      const button1 = this.$refs.button1;
      const button2 = this.$refs.button2;
      if (toggleButton) {
        toggleButton.style.left = "2px";
        button1.style.color = "white";
        button2.style.color = "black";
        toggleButton.style.width = "47.5%";
        this.monthly = true;
      }
    },

    rightClick() {
      const toggleButton = this.$refs.toggleButton;
      const button1 = this.$refs.button1;
      const button2 = this.$refs.button2;
      if (toggleButton) {
        toggleButton.style.left = "53%";
        button2.style.color = "white";
        button1.style.color = "black";
        toggleButton.style.width = "44%";
        this.monthly = false;
      }
    },

    displayFeatures() {
      const payAsYouGoFeatures = document.getElementById("key-features-hidden");
      const pricingCardBody = document.getElementsByClassName("pricing-card-body");

      if (payAsYouGoFeatures) {
        payAsYouGoFeatures.style.display = "block";
      } else {
        console.error('Element with ID "key-features-hidden" not found.');
      }

      if (pricingCardBody.length > 0) {
        for (let i = 0; i < pricingCardBody.length; i++) {
          pricingCardBody[i].style.height = "450px";
        }
      } else {
        console.error('Elements with class "pricing-card-body" not found.');
      }
    },

    hideFeatures() {
      const payAsYouGoFeatures = document.getElementById("key-features-hidden");
      const pricingCardBody = document.getElementsByClassName("pricing-card-body");

      if (payAsYouGoFeatures) {
        payAsYouGoFeatures.style.display = "none";
      } else {
        console.error('Element with ID "key-features-hidden" not found.');
      }

      if (pricingCardBody.length > 0) {
        for (let i = 0; i < pricingCardBody.length; i++) {
          pricingCardBody[i].style.height = "250px";
        }
      } else {
        console.error('Elements with class "pricing-card-body" not found.');
      }
    },
  },
};
</script>


<style>
@import url('../../assets/css/pages-css/subscription.css');
@import '../../assets/css/pages-css/PricingHeaderFooter.css';

.free_label-span {
  font-size: 12px;
  text-align: center;
  margin: auto;
  margin-top: -6px;
}

.value-div-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: -1px;
}
</style>
