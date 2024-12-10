<template>
  <div>
    <div class="pricing-header-main-container">
      <div class="pricing-header-container">
        <div class="pricing-flexing-software-container">
          <span class="pricing-flexing-software" style="color: white;">Customizable software, Cost-effective price
          </span> </br>
          <small class="new-banner-cpqforAll-content" style="color: white;">CPQ FOR ALL</small>
        </div>
        <div class="pricing-tags-lists-body">
          <ul class="pricing-tags-lists">
            <li class="pricing-tags-li">
              <i class="bi bi-check-circle-fill pricing-fill-logos"></i>
              <div class="pricing-tags-li-container">
                <span class="pricing-tags-li-container-span">Personalized Demo </span>
                <small>With proof of concept </small>
              </div>
            </li>
            <li class="pricing-tags-li">
              <i class="bi bi-check-circle-fill pricing-fill-logos"></i>
              <div class="pricing-tags-li-container">
                <span class="pricing-tags-li-container-span">Document Generation</span>
                <small>Dynamic images, real-time updates </small>
              </div>
            </li>
            <li class="pricing-tags-li">
              <i class="bi bi-check-circle-fill pricing-fill-logos"></i>
              <div class="pricing-tags-li-container">
                <span class="pricing-tags-li-container-span">Rapid Implementation </span>
                <small>50% faster setup </small>
              </div>
            </li>
            <li class="pricing-tags-li">
              <i class="bi bi-check-circle-fill pricing-fill-logos"></i>
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
                  <span @click="displayFeatures">Features List</span>
                  <span @click="hideFeatures">Hide</span>
                  <div id="key-features-hidden">
                    <span class="card-key-feature-lists-h1">Key features </span>
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
                  <a href="https://web.dealdox.io/register?paymentMode=payasyougo">
                    <button class="try_free">Access DealDox CPQ</button>
                  </a>
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

                    <span class="">Custom Pricing</span>
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
                  <a href="https://web.dealdox.io/register?paymentMode=standard">
                    <button class="try_free">Connect to sales </button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="tax-container-div"><span class="tax-container">Local taxes (VAT, GST, etc.) will be charged in
            addition to the prices mentioned.</span></div>

        <div class="subscription-table-container">
          <div class="features-header-cpq-compare-body">
            <span class="features-header-cpq-compare">Compare all features of DealDox CPQ Pricing</span>
            <div class="table-container-sub1">

              <table class="centered-table1">
                <thead role="rowgroup">
                  <div>
                    <tr class="table_row1" role="row">
                      <th role="columnheader" scope="col" class="table_header">
                        <div class="sub_label-container2">
                          <label class="checkbox_container" :checked="isEnabled" @change="handleCheckboxChange()">
                            <input style="height: 10px; width: 10px" type="checkbox" />
                            <span class="hide_expand" v-if="isEnabled">Collapse Now</span>
                            <span class="hide_expand" v-else>Expand All</span>
                          </label>
                        </div>
                      </th>

                      <th role="columnheader" scope="col" class="table__cell2">
                        <a :href="`https://web.dealdox.io/register?paymentMode=standard`" class="subscription-anker-tag"
                          target="_blank" rel="noopener noreferrer">
                          <div class="edition_wrapper">
                            <div class="edition__copy__wrapper">
                              <div class="edition_name">Pay-As-You-Go</div>
                            </div>
                          </div>
                        </a>

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

                      </th>
                      <th role="columnheader" scope="col" class="table__cell2">
                        <a :href="`https://web.dealdox.io/register?paymentMode=standard`" class="subscription-anker-tag"
                          target="_blank" rel="noopener noreferrer">
                          <div class="edition_wrapper">
                            <div class="edition__copy__wrapper">
                              <div class="edition_name">Premium</div>

                            </div>
                          </div>
                        </a>

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

                <FeaturedDataA77 :topText="'Track & Monitor'" :editions="editions" :tableData="tableData5"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />

                <FeaturedData :topText="'Integrations & API'" :editions="editions" :tableData="tableData6"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'Security & Compliance'" :editions="editions" :tableData="tableData7"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'Account & Opportunity Management'" :editions="editions"
                  :tableData="tableData16" :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'Approval Workflow'" :editions="editions" :tableData="tableData14"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />

                <FeaturedData :topText="'Mobile Apps'" :editions="editions" :tableData="tableData1"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'Configure Price Quote'" :editions="editions" :sectiontableData="cpqTableData"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'General'" :editions="editions" :tableData="tableData15"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'Customer Support'" :editions="editions" :tableData="tableData8"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
                <FeaturedData :topText="'AI Personal Assistant'" :editions="editions" :tableData="tableData17"
                  :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
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
      currentCurrencyamount: 1,
      payAsYouGoAmount: 9,
      standardAmount: 499,
      premiumAmount: 799,
      monthlystandardAmount: 719,
      monthlypremiumAmount: 1259,
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
          // cells: ["-", "-", "Included", "Included"],
          heading: "Android - Playstore",
          cells: ["-", "-", "Included", "Included"],

        },
        {
          heading: "Apple - Appstore",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
      ],
      tableData2: [
        {
          heading: "Generate Quotations",
          cells: ["Unlimited", "Unlimited", "Unlimited"],
          // cells: ["Unlimited", "Unlimited"],
        },
        {
          heading: "Seat Limit",
          cells: ["Unlimited", "Upto 5", "Unlimited"],
          // cells: ["Upto 5", "Unlimited"],
        },
      ],
      tableData3: [
        {
          heading: "Word & PDF",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],

        },
        {
          heading: "Advanced Product Catalog",
          cells: ["Included", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],

        },
        {
          heading: "Combination Of Product & Service Catalog",
          cells: ["Included", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Product Service & Expense Document",
          cells: ["-", "-", "-", "Included"],
          // cells: ["-", "-", "Included"],
        },
        {
          heading: "Multi Tiered Documents Generated Per Proposal",
          cells: ["-", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Dynamic Documents",
          cells: ["Included", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Rules Engine",
          cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          // cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Automated Bundling",
          cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          // cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Configured Pricing",
          cells: ["Included", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Pricing Flexibility",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Multi Tier Discounts",
          cells: ["Included", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Rate Card Versioning",
          cells: ["Included", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Global Currency Support",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Custom Branding",
          cells: ["Included", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Custom Document Templates",
          cells: ["Included", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Data Collection via Forms",
          cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          // cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Rich Media Content",
          cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          // cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Custom Style",
          cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          // cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Font & Vibrant Document Styling",
          cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          // cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Dynamic Image Updates per Product Selection",
          cells: ["Included", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Data Split By Table",
          cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          // cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Generate Multiple Quote Iterations",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "DealDox Watermark",
          cells: [
            "Watermarked",
            "Unwatermarked",
            "Unwatermarked",
            "Unwatermarked",
          ],
        },
        {
          heading: "Customized Content",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Number of Pages per Document",
          cells: ["Limited", "Limited", "Unlimited", "Unlimited"],
          // cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Document Types",
          cells: ["Limited", "Upto 3", "Upto 5", "Unlimited"],
          // cells: ["Upto 3", "Upto 5", "Unlimited"],
        },
        {
          heading: "Word Document Editing Restricted",
          cells: ["Locked", "Locked", "Locked", "UnLocked"],
          // cells: ["Locked", "Locked", "UnLocked"],
        },
        {
          heading: "Translingual Document",
          cells: ["-", "-", "-", "Included"],
          // cells: ["-", "-", "Included"],
        },
        {
          heading: "Saving Created Deal Documents Within The Application",
          cells: ["Included", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Service & Product Line Items",
          cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          // cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Custom Quote Name",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Password Protection Digital Proposals",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Conditional Logic Using Formula Fields",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Admin Enabled Self Service Configuration",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
          icon: "true",
          message: "Minimum 10 Licences to be Procured ",
        },
        {
          heading: "Knowledge Articles",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
      ],
      tableData4: [
        {
          heading: "Approval Workflow",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Currency Conversions",
          cells: ["5", "10", "15", "Unlimited"],
          // cells: ["5", "15", "Unlimited"],
        },
        {
          heading: "Multi Service Templates",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Pricing Table",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
      ],
      tableData5: [
        {
          heading: "Audit Trial",
          cells: ["-", "-", "-", "Included"],
          // cells: ["-", "-", "Included"],
        },
        {
          heading: "Reports",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
      ],
      tableData6: [
        {
          heading: "CRM Integrations",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "ERP Integrations",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "PSA Integrations",
          cells: ["-", "-", "-", "Included"],
          // cells: ["-", "-", "Included"],
        },
        {
          heading: "Data Merge With CRM & Quotes",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Whatsapp Business",
          cells: ["Included", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Email",
          cells: ["Included", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Maps",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
      ],
      tableData7: [
        {
          heading: "Two Factor Authentication",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Roles",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Audit Logs",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Data Encryption",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Field Level Security",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Proposal Encryption",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "SOC 1 Type II Compliant",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "SOC 2 Type II Compliant",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "ISO 27001 Compliant",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "GDPR Compliant",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
      ],
      tableData8: [
        {
          heading: "Web To Case Form",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Email Support",
          cells: ["-", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Call Support",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Priority Call & Email Support",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Dedicated Account Manager",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
      ],
      tableData17: [
        {
          heading: "Real Time Analysis & Insights",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Quotation Assistance",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Smart Pricing Suggestions",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Automated Email Drafting",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Real-Time Query Handling",
          cells: ["-", "-", "-", "Included"],
          // cells: ["-", "-", "Included"],
        },
        {
          heading: "Scenario Simulation",
          cells: ["-", "-", "-", "Included"],
          // cells: ["-", "-", "Included"],
        },
        {
          heading: "Task Automation",
          cells: ["-", "-", "-", "Included"],
          // cells: ["-", "-", "Included"],
        },
        {
          heading: "Predictive Sales Analysis",
          cells: ["-", "-", "-", "Included"],
          // cells: ["-", "-", "Included"],
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
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Sequential Approvals",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Parallel Approvals",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Threshold Based Approvals",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Departmental Approvals",
          // cells: ["-", "-", "-", "Included"],
          cells: ["-", "-", "Included"],
        },
        {
          heading: "Approval Dashboards",
          // cells: ["-", "-", "-", "Included"],
          cells: ["-", "-", "Included"],
        },
      ],
      tableData15: [
        {
          heading: "Personal Settings",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Company Logo & Theme",
          cells: ["Included", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Advanced Filters",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Translations",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Multiple Environments",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
      ],
      tableData16: [
        {
          heading: "Account Specific Attributes",
          cells: ["-", "Included", "Included", "Included"],
          // cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Deal Specific Information",
          cells: ["-", "-", "Included", "Included"],
          // cells: ["-", "Included", "Included"],
        },
        {
          heading: "Quote Specific Details",
          cells: ["-", "-", "-", "Included"],
          // cells: ["-", "-", "Included"],
        },
      ],
      cpqTableData: [
        {
          header: "Guided Selling",
          rows: [
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
        },
        {
          header: "Price Rules",
          rows: [
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
        },
        {
          header: "Product Configuration",
          rows: [
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
    showPopup(newValue) {
      // Set body overflow based on popup visibility
      if (newValue) {
        document.body.style.overflow = "hidden"; // Hide overflow when popup is visible
      } else {
        document.body.style.overflow = ""; // Reset overflow when popup is hidden
      }
    },
  },
  methods: {
    handleHideCommonFeaturesChange() {
      this.hideCommonFeatures = !this.hideCommonFeatures;
    },
    handleCheckboxChange() {
      this.isEnabled = !this.isEnabled;
    },
    triggerPopup() {
      setTimeout(() => {
        this.showPopup = true; // Show the popup after a delay
      }, 25000); // Adjust the delay as needed (3000 ms = 3 seconds)
    },
    handleClose() {
      this.showPopup = false; // Hide the popup when closed
    },
    navigateToPage(paramValue) {
      this.$router.push({ name: "contact-us", params: { source: paramValue } });
    },
    lastUpdatedDate() {
      const date = new Date("2024-08-01");
      const formattedDate = date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return formattedDate;
    },
    async getCurrencyCode() {
      try {
        this.currentCountryCode = geoplugin_currencyCode();
        const rawSymbol = geoplugin_currencySymbol();

        // Decode the currency symbol if necessary
        const parser = new DOMParser();
        this.currency_symbol = parser.parseFromString(rawSymbol, "text/html").body.textContent;

        console.log("Detected country code:", this.currentCountryCode);
        console.log("Currency symbol:", this.currency_symbol);
      } catch (error) {
        console.error("Failed to fetch currency code or symbol:", error);

        // Set default fallbacks
        this.currentCountryCode = "INR";
        this.currency_symbol = "₹"; // Default to Indian Rupee
      }
    },

    async getExchangeAmount() {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/c388446c26da9cbd5b015329/latest/INR`
        );
        this.currentCurrencyAmount =
          response.data.conversion_rates[this.currentCountryCode];
        console.log("Currency amount:", this.currentCurrencyAmount);
      } catch (error) {
        console.error("Failed to fetch exchange amount:", error);
      }
    },
    converAmount() {
      try {
        if (this.currentCountryCode.toUpperCase() == 'INR') {
          console.log("inr currency");

          this.payAsYouGoAmount = parseFloat(Math.ceil((9 * this.currentCurrencyAmount)));
          this.standardAmount = parseFloat(Math.ceil((499 * this.currentCurrencyAmount)));
          this.premiumAmount = parseFloat(Math.ceil((799 * this.currentCurrencyAmount)));
          this.monthlystandardAmount = parseFloat(Math.ceil((719 * this.currentCurrencyAmount)));
          this.monthlypremiumAmount = parseFloat(Math.ceil((1259 * this.currentCurrencyAmount)));
        } else {




          this.payAsYouGoAmount = parseFloat(Math.ceil((9 * this.currentCurrencyAmount * 3)));
          this.standardAmount = parseFloat(Math.ceil(((499 * 3) * this.currentCurrencyAmount)));
          this.premiumAmount = parseFloat(Math.ceil((799 * this.currentCurrencyAmount * 3)));
          this.monthlystandardAmount = parseFloat(Math.ceil((719 * this.currentCurrencyAmount * 3)));
          this.monthlypremiumAmount = parseFloat(Math.ceil((1259 * this.currentCurrencyAmount * 3)));
        }
      } catch (error) {
        // Fallback to default values in case of error
        console.error("Error in converAmount:", error);
        this.payAsYouGoAmount = 9;
        this.standardAmount = 9.55;
        this.premiumAmount = 19.55;
      }


    },


    leftClick() {
      const toggleButton = this.$refs.toggleButton;
      const button1 = this.$refs.button1;
      const button2 = this.$refs.button2;
      if (toggleButton) {
        toggleButton.style.left = "2px";
        button1.style.color = "white";
        button2.style.color = "black";
        toggleButton.style.width = "47.5%"
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
      const payAsYouGoFeatures = document.getElementById('key-features-hidden');
      const pricingCardBody = document.getElementsByClassName('pricing-card-body');

      if (payAsYouGoFeatures) {
        payAsYouGoFeatures.style.display = "block";
      } else {
        console.error('Element with ID "key-features-hidden" not found.');
      }

      if (pricingCardBody.length > 0) {
        for (let i = 0; i < pricingCardBody.length; i++) {
          pricingCardBody[i].style.height = '450px';
        }
      } else {
        console.error('Elements with class "pricing-card-body" not found.');
      }
    }, hideFeatures() {
      const payAsYouGoFeatures = document.getElementById('key-features-hidden');
      const pricingCardBody = document.getElementsByClassName('pricing-card-body');

      if (payAsYouGoFeatures) {
        payAsYouGoFeatures.style.display = "none";
      } else {
        console.error('Element with ID "key-features-hidden" not found.');
      }

      if (pricingCardBody.length > 0) {
        for (let i = 0; i < pricingCardBody.length; i++) {
          pricingCardBody[i].style.height = '250px';
        }
      } else {
        console.error('Elements with class "pricing-card-body" not found.');
      }
    }


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


@media (max-width:550px) {
  #key-features-hidden {
    display: none;
  }
}
</style>
