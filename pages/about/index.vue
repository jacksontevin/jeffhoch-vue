<template>
  <section class="about-section-page">
    <div class="about-section-header">
      <b-container>
        <h1 class="about-title">About us</h1>
      </b-container>
    </div>
    <div class="about-section-top">
      <b-container>
        <b-row>
          <b-col cols="12" md="6" lg="6">
            <div class="about-us-info">
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
          <b-col cols="12" md="6" lg="6">
            <div class="about-us-info-img">
              <img src="~assets/images/about-us/discover.png" width="100%" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="about-team-section">
      <b-container>
        <h2>Meet Our Team</h2>
        <b-row class="mt-5">
          <b-col
            v-for="(user, intex) of clientsData"
            :key="intex"
            cols="12"
            lg="4"
            md="4"
            class="mb-3"
          >
            <div class="team-box">
              <div class="team-img">
                <img :src="user.image" width="100%" />
              </div>
              <div class="team-body">
                <h4>{{ user.name }}</h4>
                <h5>{{ user.bio }}</h5>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- why us section -->
    <section class="about-accordion">
      <div class="container position-relative">
        <div class="header-title text-left">
          <h4>FREQUENTLY ASKED QUESTIONS</h4>
          <h1>We Have Attached Some Common Informations</h1>
        </div>
        <b-row>
          <b-col cols="12" md="6" lg="6" sm="12">
            <div class="why-use-right w-100">
              <div class="accordion" role="tablist">
                <div class="accordion-list">
                  <div v-b-toggle.accordion-1 class="accordion-tab">
                    <h3>
                      <img src="@/assets/images/down-arrow.svg" class="mr-3" />
                      Can a home depreciate in value?
                    </h3>
                  </div>
                  <b-collapse
                    id="accordion-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-text>{{ text }}</b-card-text>
                  </b-collapse>
                </div>
                <div class="accordion-list">
                  <div v-b-toggle.accordion-2 class="accordion-tab">
                    <h3>
                      <img src="@/assets/images/down-arrow.svg" class="mr-3" />
                      What legal issue I should know before buying space?
                    </h3>
                  </div>
                  <b-collapse
                    id="accordion-2"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-text>{{ text }}</b-card-text>
                  </b-collapse>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="6" lg="6" sm="12">
            <div class="why-use-right w-100">
              <div class="accordion" role="tablist">
                <div class="accordion-list">
                  <div v-b-toggle.accordion-3 class="accordion-tab">
                    <h3>
                      <img src="@/assets/images/down-arrow.svg" class="mr-3" />
                      What is Broker?
                    </h3>
                  </div>
                  <b-collapse
                    id="accordion-3"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-text>{{ text }}</b-card-text>
                  </b-collapse>
                </div>
                <div class="accordion-list">
                  <div v-b-toggle.accordion-4 class="accordion-tab">
                    <h3>
                      <img src="@/assets/images/down-arrow.svg" class="mr-3" />
                      Can I pay my insurance and taxes?
                    </h3>
                  </div>
                  <b-collapse
                    id="accordion-4"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-text>{{ text }}</b-card-text>
                  </b-collapse>
                </div>
                <div class="accordion-list">
                  <div v-b-toggle.accordion-5 class="accordion-tab">
                    <h3>
                      <img src="@/assets/images/down-arrow.svg" class="mr-3" />
                      How can I get help from Land Island if I face any problem?
                    </h3>
                  </div>
                  <b-collapse
                    id="accordion-5"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-text>{{ text }}</b-card-text>
                  </b-collapse>
                </div>
                <div class="accordion-list">
                  <div v-b-toggle.accordion-6 class="accordion-tab">
                    <h3>
                      <img src="@/assets/images/down-arrow.svg" class="mr-3" />
                      How long the loan process take?
                    </h3>
                  </div>
                  <b-collapse
                    id="accordion-6"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-text>{{ text }}</b-card-text>
                  </b-collapse>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      text: `Lorem Ipsum is simply dummy text of the printing and type setting industry.`,
      clientsData: [
        {
          name: 'John Smith',
          image: require('~/assets/images/about-us/our-team/user-1.png'),
          bio: 'Founder & CEO',
        },
        {
          name: 'Robert Fros',
          image: require('~/assets/images/about-us/our-team/user-2.png'),
          bio: 'Chief Technical Officer',
        },
        {
          name: 'Robert Fros',
          image: require('~/assets/images/about-us/our-team/user-3.png'),
          bio: 'Head of Management',
        },
        {
          name: 'Samantha Kety',
          image: require('~/assets/images/about-us/our-team/user-4.png'),
          bio: 'Marketing Strategist',
        },
        {
          name: 'Micheal Clark',
          image: require('~/assets/images/about-us/our-team/user-5.png'),
          bio: 'Head of Management',
        },
        {
          name: 'Robert Fros',
          image: require('~/assets/images/about-us/our-team/user-6.png'),
          bio: 'Head of Management',
        },
      ],
    }
  },
}
</script>
