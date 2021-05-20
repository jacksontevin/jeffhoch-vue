<template>
  <section class="blogs-section-page">
    <div class="blogs-section-header">
      <b-container>
        <h1 class="blogs-title">Blog</h1>
      </b-container>
    </div>
    <div class="blogs-section-top">
      <b-container>
        <b-row>
          <b-col cols="12" md="6" lg="6">
            <div>
              <img src="~assets/images/about-us/discover.png" width="100%" />
            </div>
          </b-col>
          <b-col cols="12" md="6" lg="6">
            <div class="blogs-us-info">
              <h4>DISCOVER</h4>
              <h3>We Are Always There For You</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="blogs-section-service">
      <b-container>
        <b-row>
          <b-col cols="12" md="8" lg="8">
            <div class="blogs-us-info">
              <h4>SERVICE</h4>
              <h3>We Are Providing</h3>
            </div>
            <b-row>
              <b-col
                v-for="(blog, index) in blogDetail"
                :key="index"
                cols="12"
                lg="6"
                md="6"
                class="property-card-md px-1"
              >
                <nuxt-link :to="`/blogs/${blog.id}`">
                  <blog-card :data="blog" :index="index" />
                </nuxt-link>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" md="4" lg="4">
            <div class="blogs-us-info">
              <h3 class="mb-5">Most Popular</h3>
              <div class="blogs-popular-scroll">
                <div
                  v-for="(item, index) of mostPopular"
                  :key="index"
                  class="media my-3"
                >
                  <img
                    class="mr-3"
                    :src="item.images"
                    alt="Generic placeholder image"
                  />
                  <div class="media-body">
                    <h5 class="mt-0">Why you should live in own house</h5>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <section class="feature-section my-5">
      <div class="container">
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
            <span
              v-for="(blog, index) in blogDetail"
              :key="index"
              class="property-card-lg"
            >
              <nuxt-link :to="`/blogs/${blog.id}`">
                <blog-card :data="blog" :index="index" />
              </nuxt-link>
            </span>
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
      mostPopular: [
        {
          title: 'Why you should live in own house',
          images: require('~/assets/images/property/industrial/p-1.png'),
        },
        {
          title: 'Why you should live in own house',
          images: require('~/assets/images/property/industrial/p-2.png'),
        },
        {
          title: 'Why you should live in own house',
          images: require('~/assets/images/property/industrial/p-3.png'),
        },
        {
          title: 'Why you should live in own house',
          images: require('~/assets/images/property/industrial/p-4.png'),
        },
        {
          title: 'Why you should live in own house',
          images: require('~/assets/images/property/industrial/p-3.png'),
        },
        {
          title: 'Why you should live in own house',
          images: require('~/assets/images/property/industrial/p-2.png'),
        },
      ],
    }
  },
}
</script>
