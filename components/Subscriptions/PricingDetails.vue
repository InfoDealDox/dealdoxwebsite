<template>
  <div class="subscription-layout">
    <CustomPopup v-if="showPopup" @close="handleClose" />
    <div class="container main_container">
      <div class="row align-items-center">
        <div class="contentdata1">
          <h2 style="text-align: center;">DealDox CPQ Pricing for All Industries</h2>
          <span style="text-align: center;" class="boost-the-growth">Boost growth with our economical pricing solutions
            designed for every industry</span>
        </div>

      </div>
    </div>
    <div class="subscription-main-content-box">
      <div class="sub-container">
        <div>
          <div class="cards-section1">
            <div class="cs"></div>
            <!-- <div class="value-div">
              <div class="sub_back_image">
                <label class="free_label">Pay-as-you-go</label>
              </div>
              <div class="content">
                <div class="card-content">
                  <div class="card-info">
                    Perfect for any business size, pay only for created quotes.
                  </div>
                </div>
              </div>
              <div class="usd_usdclass">
                <div>
                  <div class="usd_usdclass1">
                    <div>
                      <span class="dollar_duration">
                        ₹
                        <p class="currency_value">0</p>
                      </span>
                    </div>
                    <span class="doller_num"> user/ month </span>
                  </div>
                </div>
              </div>

              <div class="button_div">
                <a href="https://uat.dealdox.io/register?paymentMode=payAsYouGo">
                  <button class="try_free">Buy Now</button>
                </a>
              </div>
            </div> -->
            <div class="value-div">
              <label class="free_label">Standard</label>

              <div class="content">
                <div class="card-content">
                  <div class="card-info">
                    For creating impressive quotations that close deals faster
                  </div>
                </div>
              </div>
              <div class="usd_usdclass">
                <div class="usd_usdclass1">
                  <span class="dollar_duration">
                    ₹
                    <p class="currency_value">799</p>
                  </span>
                  <span class="doller_num"> user/ month </span>
                </div>
              </div>

              <div class="button_div">
                <a href="https://web.dealdox.io/register?paymentMode=standard">
                  <button class="try_free">Buy Now</button>
                </a>
              </div>
            </div>
            <div class="value-div">
              <span class="highlight_batch zplan3">Most Popular</span>
              <label class="free_label">Premium</label>

              <div class="content">
                <div class="card-content">
                  <div class="card-info">
                    For large enterprises with complex pricing & estimation
                    needs.
                  </div>
                </div>
              </div>
              <div class="usd_usdclass">
                <div class="usd_usdclass1">
                  <span class="dollar_duration">
                    ₹
                    <p class="currency_value">1399</p>
                  </span>
                  <span class="doller_num"> user/ month </span>
                </div>
              </div>

              <div class="button_div">
                <a href="https://web.dealdox.io/register?paymentMode=premium">
                  <button class="try_free">Buy Now</button>
                </a>
              </div>
            </div>
            <div class="value-div">
              <label class="free_label">Enterprise</label>

              <div class="content">
                <div class="card-content">
                  <div class="card-info">
                    CRM integration with quotes & workflow approvals for growing
                    businesses.
                  </div>
                </div>
              </div>
              <div class="usd_usdclass">
                <div>
                  <span class="premium_message">Custom Pricing</span>
                </div>
              </div>

              <div class="button_div">
                <NuxtLink :to="{ name: 'contact-us', params: { source: 'Enterprise' } }">
                  <button class="try_free">Let's Connect</button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="subscription-table-container">
        <div>
          <div class="table-container-sub1">
            <table class="centered-table1">
              <thead role="rowgroup">
                <div>
                  <tr class="table_row1" role="row">
                    <th role="columnheader" scope="col" class="table_header">
                      <!-- <div class="sub_label-container1">
                  <label class="checkbox_container">
                    <input style="height:10px;width:10px" type="checkbox" v-model="hideCommonFeatures" />
                    <span class="hide_expand">Hide Common Features</span>
                  </label>
                </div> -->
                      <div class="sub_label-container2">
                        <label class="checkbox_container" :checked="isEnabled" @change="handleCheckboxChange()">
                          <input style="height: 10px; width: 10px" type="checkbox" />
                          <span class="hide_expand" v-if="isEnabled">Collapse Now</span>
                          <span class="hide_expand" v-else>Expand All</span>
                        </label>
                      </div>
                    </th>

                    <th v-for="(data, index) in editions" :key="index" role="columnheader" scope="col"
                      class="table__cell2">
                      <a v-if="data.name !== 'Enterprise'"
                        :href="`https://web.dealdox.io/register?paymentMode=${data.datapass}`"
                        class="subscription-anker-tag" target="_blank" rel="noopener noreferrer">
                        <div class="edition_wrapper">
                          <div class="edition__copy__wrapper">
                            <div class="edition_name">{{ data.name }}</div>
                            <div class="price_wrapper default" :data-currency="data.currency">
                              <div class="edition_price">
                                <span class="price_text__symbol">{{
                                  data.currency_symbol
                                }}</span>
                                <span v-if="data.price >= 0">{{
                                  data.price
                                }}</span>
                                <span v-if="data.message">{{
                                  data.message
                                }}</span>
                              </div>
                            </div>
                            <div class="price_wrapper default">
                              <span class="edition_billing">{{
                                data.text
                              }}</span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <NuxtLink v-if="data.name === 'Enterprise'" :to="{
                        name: 'contact-us',
                        params: { source: 'Enterprise' },
                      }" class="nuxtlink-enterise">
                        <div class="edition_wrapper">
                          <div class="edition__copy__wrapper">
                            <div class="edition_name">{{ data.name }}</div>
                            <div class="price_wrapper default" :data-currency="data.currency">
                              <div class="edition_price">
                                <span class="price_text__symbol">{{
                                  data.currency_symbol
                                }}</span>
                                <span v-if="data.price">{{ data.price }}</span>
                                <span v-if="data.message">{{
                                  data.message
                                }}</span>
                              </div>
                            </div>
                            <div class="price_wrapper default">
                              <span class="edition_billing">{{
                                data.text
                              }}</span>
                            </div>
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
              <FeaturedData :topText="'Account & Opportunity Management'" :editions="editions" :tableData="tableData16"
                :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
              <FeaturedData :topText="'Approval Workflow'" :editions="editions" :tableData="tableData14"
                :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />

              <!-- <FeaturedData :topText="'Mobile Apps'" :editions="editions" :tableData="tableData1"
                :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" /> -->
              <FeaturedData :topText="'Configure Price Quote'" :editions="editions" :sectiontableData="cpqTableData"
                :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
              <FeaturedData :topText="'General'" :editions="editions" :tableData="tableData15" :initialShow="isEnabled"
                :hideCommonFeatures="hideCommonFeatures" />
              <FeaturedData :topText="'Customer Support'" :editions="editions" :tableData="tableData8"
                :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" />
              <!-- <FeaturedData :topText="'AI Personal Assistant'" :editions="editions" :tableData="tableData17"
                :initialShow="isEnabled" :hideCommonFeatures="hideCommonFeatures" /> -->
            </div>
          </div>
          <!-- <div class="updated_date">
                <div class="updated_date_format">Last Updated On: <span>{lastUpdatedDate}</span></div>
              </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomPopup from "./CustomPopup.vue";
import FeaturedData from "./FeaturedData.vue";



export default {
  components: {
    CustomPopup,
    FeaturedData,
  },
  mounted() {
    document.body.removeAttribute("style");
  },
  name: "PricingDetails",
  data() {
    return {
      showPopup: false,
      isEnabled: false,
      hideCommonFeatures: false,
      showMessage: false,
      editions: [
        // {
        //   name: "PAY-AS-YOU-GO",
        //   price: 0,
        //   currency: "INR",
        //   currency_symbol: "₹",
        //   billing: "/month/User",
        //   datapass: "payAsYouGo",
        // },
        {
          name: "STANDARD",
          price: 799,
          currency: "INR",
          currency_symbol: "₹",
          billing: "/month/User",
          datapass: "standard",
        },
        {
          name: "Premium",
          price: 1399,
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
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
      ],
      tableData2: [
        {
          heading: "Generate Quotations",
          // cells: ["Unlimited", "Unlimited", "Unlimited"],
          cells: ["Unlimited", "Unlimited"],
        },
        {
          heading: "Seat Limit",
          // cells: ["Unlimited", "Upto 5", "Unlimited"],
          cells: ["Upto 5", "Unlimited"],
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
          // cells: ["Included", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],

        },
        {
          heading: "Combination Of Product & Service Catalog",
          // cells: ["Included", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Product Service & Expense Document",
          // cells: ["-", "-", "-", "Included"],
          cells: ["-", "-", "Included"],
        },
        {
          heading: "Multi Tiered Documents Generated Per Proposal",
          // cells: ["-", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Dynamic Documents",
          // cells: ["Included", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Rules Engine",
          // cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Automated Bundling",
          // cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Configured Pricing",
          // cells: ["Included", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Pricing Flexibility",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Multi Tier Discounts",
          // cells: ["Included", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Rate Card Versioning",
          // cells: ["Included", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Global Currency Support",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Custom Branding",
          // cells: ["Included", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Custom Document Templates",
          // cells: ["Included", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Data Collection via Forms",
          // cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Rich Media Content",
          // cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Custom Style",
          // cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Font & Vibrant Document Styling",
          // cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Dynamic Image Updates per Product Selection",
          // cells: ["Included", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Data Split By Table",
          // cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Generate Multiple Quote Iterations",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "DealDox Watermark",
          cells: [
            "Watermarked",
            "Unwatermarked",
            "Unwatermarked",
          ],
        },
        {
          heading: "Customized Content",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Number of Pages per Document",
          // cells: ["Limited", "Limited", "Unlimited", "Unlimited"],
          cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Document Types",
          // cells: ["Limited", "Upto 3", "Upto 5", "Unlimited"],
          cells: ["Upto 3", "Upto 5", "Unlimited"],
        },
        {
          heading: "Word Document Editing Restricted",
          // cells: ["Locked", "Locked", "Locked", "UnLocked"],
          cells: ["Locked", "Locked", "UnLocked"],
        },
        {
          heading: "Translingual Document",
          // cells: ["-", "-", "-", "Included"],
          cells: ["-", "-", "Included"],
        },
        {
          heading: "Saving Created Deal Documents Within The Application",
          // cells: ["Included", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Service & Product Line Items",
          // cells: ["Unlimited", "Limited", "Unlimited", "Unlimited"],
          cells: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          heading: "Custom Quote Name",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Password Protection Digital Proposals",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Conditional Logic Using Formula Fields",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Admin Enabled Self Service Configuration",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
          icon: "true",
          message: "Minimum 10 Licences to be Procured ",
        },
        {
          heading: "Knowledge Articles",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
      ],
      tableData4: [
        {
          heading: "Approval Workflow",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Currency Conversions",
          cells: ["5", "15", "Unlimited"],
        },
        {
          heading: "Multi Service Templates",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Pricing Table",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
      ],
      tableData5: [
        {
          heading: "Audit Trial",
          // cells: ["-", "-", "-", "Included"],
          cells: ["-", "-", "Included"],
        },
        {
          heading: "Reports",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
      ],
      tableData6: [
        {
          heading: "CRM Integrations",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "ERP Integrations",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "PSA Integrations",
          // cells: ["-", "-", "-", "Included"],
          cells: ["-", "-", "Included"],
        },
        {
          heading: "Data Merge With CRM & Quotes",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Whatsapp Business",
          // cells: ["Included", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Email",
          // cells: ["Included", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Maps",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
      ],
      tableData7: [
        {
          heading: "Two Factor Authentication",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Roles",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Audit Logs",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Data Encryption",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Field Level Security",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Proposal Encryption",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "SOC 1 Type II Compliant",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "SOC 2 Type II Compliant",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "ISO 27001 Compliant",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "GDPR Compliant",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
      ],
      tableData8: [
        {
          heading: "Web To Case Form",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Email Support",
          // cells: ["-", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Call Support",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Priority Call & Email Support",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Dedicated Account Manager",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
      ],
      tableData17: [
        {
          heading: "Real Time Analysis & Insights",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Quotation Assistance",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Smart Pricing Suggestions",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Automated Email Drafting",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Real-Time Query Handling",
          // cells: ["-", "-", "-", "Included"],
          cells: ["-", "-", "Included"],
        },
        {
          heading: "Scenario Simulation",
          // cells: ["-", "-", "-", "Included"],
          cells: ["-", "-", "Included"],
        },
        {
          heading: "Task Automation",
          // cells: ["-", "-", "-", "Included"],
          cells: ["-", "-", "Included"],
        },
        {
          heading: "Predictive Sales Analysis",
          // cells: ["-", "-", "-", "Included"],
          cells: ["-", "-", "Included"],
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
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Sequential Approvals",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Parallel Approvals",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Threshold Based Approvals",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
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
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Company Logo & Theme",
          // cells: ["Included", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Advanced Filters",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Translations",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Multiple Environments",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
      ],
      tableData16: [
        {
          heading: "Account Specific Attributes",
          // cells: ["-", "Included", "Included", "Included"],
          cells: ["Included", "Included", "Included"],
        },
        {
          heading: "Deal Specific Information",
          // cells: ["-", "-", "Included", "Included"],
          cells: ["-", "Included", "Included"],
        },
        {
          heading: "Quote Specific Details",
          // cells: ["-", "-", "-", "Included"],
          cells: ["-", "-", "Included"],
        },
      ],
      cpqTableData: [
        {
          header: "Guided Selling",
          rows: [
            {
              heading: "Total Number Of Price Rules",
              cells: [ "50", "75", "100"],
            },
            {
              heading: "Module Based Conditions Per Primary Rule",
              cells: [ "10", "15", "20"],
            },
            {
              heading: "Cell Range Limit Per Item In Volume Rules",
              cells: [ "200", "500", "1000"],
            },
            {
              heading: "Record Range Limit Per Item In Volume Pricing Rules",
              cells: [ "200", "500", "1000"],
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
              cells: [ "10", "15", "20"],
            },
            {
              heading: "Cell Range Limit Per Item In Volume Rules",
              cells: [ "200", "500", "1000"],
            },
            {
              heading: "Record Range Limit Per Item In Volume Pricing Rules",
              cells: [ "200", "500", "1000"],
            },
          ],
        },
        {
          header: "Product Configuration",
          rows: [
            {
              heading: "Total Number Of Price Rules",
              cells: [ "50", "75", "100"],
            },
            {
              heading: "Module Based Conditions Per Primary Rule",
              cells: ["10", "15", "20"],
            },
            {
              heading: "Cell Range Limit Per Item In Volume Rules",
              cells: [ "200", "500", "1000"],
            },
            {
              heading: "Record Range Limit Per Item In Volume Pricing Rules",
              cells: [ "200", "500", "1000"],
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.triggerPopup(); // Call the function to show the popup after the component is mounted
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
  },
};
</script>
