<template>
  <section class="blogs-section-page">
    <div class="blogs-des-section">
      <b-container>
        <h2>The Impact of COVID-19 on Businesses</h2>
        <span class="date">Mar 12, 2021</span> | <span class="date">Admin</span>
      </b-container>
    </div>
    <div class="blogs-des">
      <b-container>
        <div
          class="bg-img"
          :style="{
            'background-image': `url(${require('@/assets/images/property/p-detail-1.png')})`,
          }"
        ></div>
        <h3>What is Coronavirus (COVID-19)?</h3>
        <p>
          COVID-19 is a pandemic that changed the way the world works! Just like
          every other industry, eCommerce websites are also hard hit by this
          pandemic. More and more companies are finding it difficult to fulfill
          their orders. In fact, it is very difficult for budding eCommerce
          ventures to complete orders, and ship on time. Indeed, the pandemic
          has had a severe impact. The direct impact on economies is around a
          billion USD. And, the impact of Coronavirus on eCommerce business has
          seen an overall drop in the consumer by 40 to 50 percent.
        </p>

        <h3>Impact on eCommerce Industry</h3>
        <p>
          y the pandemic would be as follows: The total eCommerce sales by
          industry percentage have dropped significantly. More and more
          consumers are keen on buying only essentials and medical supplies.
          This means eCommerce industries that focus on non-essentials are going
          to see a sharp drop in sales demand. The revenue pattern will change
          for businesses. It is likely to increase in some domains like
          medicines. And, the rest will see a drop. And the increase was seen as
          high as 87.38%. As mentioned previously, a drop of 40 to 50 percent is
          seen in how consumers spend. This means, less money will be invested
          in eCommerce platforms. Yet, the revenue seen from essentials can be
          as high as 46.85%. ROAS changes are inevitable. Businesses need to
          find a way of promoting their products, at a reduced number of clicks
          per ad. With smart changes, ROAS can increase by at least 27.1%. CPC
          is also going to change with COVID-19. The most recent percentage of
          CPC is as high as 17.95%. Best eCommerce marketing ideas during
          COVID-19
        </p>
        <h3>Best eCommerce marketing ideas during COVID-19</h3>
        <div
          class="bg-img"
          :style="{
            'background-image': `url(${require('@/assets/images/property/p-detail-1.png')})`,
          }"
        ></div>

        <h3>1.1. Google Shopping ads</h3>
        <p>
          The talk about eCommerce businesses will be incomplete without Google
          Shopping Ads. This is one of the most effective ways of getting more
          traffic towards your website. With the help of shopping ads, you will
          be able to showcase your products and services to customers who truly
          matter. This means you can take advantage of organic search results
          that are free. When you wish to host a product launch during tough
          times like COVID-19, you need to make use of Google Shopping Ads. The
          tool will bring the traffic you demand into your site. The use of
          Google Shopping Ads is absolutely free. And, all that you need would
          be the right mix of AdWords, a Google Merchant Center account, and an
          active campaign.
        </p>

        <h3>1.2. Retargeting Ads</h3>
        <p>
          Many times, businesses tend to forget about their existing customers.
          They strongly believe that existing customers would keep returning to
          their business. However, this is not how the world works. You need to
          give them a reason to return to your business. And, this is where
          retargeting ads become useful. These advertisements can attract
          customers with coupons, deals, and much more. In fact, you need to
          treat retargeting advertisements as a mode of promotion. It needs to
          be filled with useful content. When you build these ads, bear in mind
          that 80 percent of your revenue will be generated from existing
          customers
        </p>
      </b-container>
    </div>
    <!-- feature section -->
    <section class="feature-section my-5 blog-slider-by-id">
      <div class="container">
        <div class="feature-header">
          <div class="feature-header_left">
            <h4>BLOG</h4>
            <h1>What Our Clients Say</h1>
          </div>
        </div>
        <client-only>
          <Carousel
            :margin="20"
            :dots="false"
            :nav="false"
            :loop="true"
            :responsive="{
              0: { items: 1 },
              600: { items: 2 },
              1191: { items: 3 },
              1900: { items: 3 },
            }"
            class="row position-relative"
          >
            <template slot="prev"
              ><span class="eb-prev"
                ><svg
                  width="34"
                  height="22"
                  viewBox="0 0 34 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34 12.5583L4.35253 12.5584L11.1736 20.199L9.56577 22L-8.30516e-07 11.2848L9.56577 0.569522L11.1736 2.3705L4.35239 10.0113L34 10.0113L34 12.5583Z"
                    fill="#F36F56"
                  />
                </svg> </span
            ></template>
            <span
              v-for="(blog, index) in blogDetail"
              :key="index"
              class="property-card-lg"
            >
              <blog-card :data="blog" :index="index" />
            </span>
            <template slot="next"
              ><span class="eb-next"
                ><svg
                  width="34"
                  height="22"
                  viewBox="0 0 34 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.31803e-07 12.5583L29.6475 12.5584L22.8264 20.199L24.4342 22L34 11.2848L24.4342 0.569522L22.8264 2.3705L29.6476 10.0113L9.29217e-07 10.0113L7.31803e-07 12.5583Z"
                    fill="#F36F56"
                  /></svg></span
            ></template>
          </Carousel>
        </client-only>
      </div>
    </section>
  </section>
</template>
<script>
import blogCard from '../../components/card/NormalCard'
export default {
  components: {
    blogCard,
  },
  data() {
    return {
      blogDetail: [
        {
          id: 1,
          imgUrl: require(`~/assets/images/property/blog-1.svg`),
          title: 'Best office Location',
          date: 'February 13, 2021',
          description:
            "Lorem Ipsum is simply dum my text of the printing and type setting industry. Lorem Ip sum has been the industry's standard ",
        },
        {
          id: 2,
          imgUrl: require(`~/assets/images/property/blog-2.svg`),
          title: 'Export Processing Zone',
          date: 'February 13, 2021',
          description:
            "Lorem Ipsum is simply dum my text of the printing and type setting industry. Lorem Ip sum has been the industry's standard ",
        },
      ],
    }
  },
}
</script>
