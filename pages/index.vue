<template>
  <div id="homePage">
    <!-- header section -->
    <section class="header-section-hero">
      <div class="container">
        <b-row>
          <b-col cols="12" md="12" lg="7" sm="12">
            <div class="header-section-card">
              <h4>Commercial property</h4>
              <h1>Discover A Commercial Property</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s when an unknown printer took a
                galley of type and scrambled it to make a type specimen book
              </p>
              <nuxt-link to="/auth" class="btn-link">Explore</nuxt-link>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- discover section -->
    <section class="discover-section">
      <div class="container">
        <div class="header-title">
          <h4>DISCOVER</h4>
          <h1>Find Your Commercial Property</h1>
        </div>
        <div class="discover-search">
          <input
            type="search"
            placeholder="Enter an address, neighborhood, city or zip code"
          />
          <button class="btn-link btn">
            Search
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.98706 11.9735C7.31543 11.9732 8.60551 11.5285 9.65189 10.7103L12.9418 14L14 12.9418L10.7101 9.65213C11.5288 8.60569 11.9738 7.31538 11.9741 5.98674C11.9741 2.6858 9.28818 0 5.98706 0C2.68595 0 0 2.6858 0 5.98674C0 9.28768 2.68595 11.9735 5.98706 11.9735ZM5.98706 1.49669C8.46346 1.49669 10.4774 3.51048 10.4774 5.98674C10.4774 8.46301 8.46346 10.4768 5.98706 10.4768C3.51066 10.4768 1.49677 8.46301 1.49677 5.98674C1.49677 3.51048 3.51066 1.49669 5.98706 1.49669Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
    <!-- about section -->
    <section class="about-section">
      <div class="container">
        <div class="about-card">
          <img src="@/assets/images/property/about-1.svg" />
          <img src="@/assets/images/property/about-2.svg" />
        </div>
        <div class="about-detail-card">
          <h4>ABOUT US</h4>
          <h3>Certified Real Estate Website</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </section>
    <!-- service section -->
    <section class="service-section">
      <div class="container">
        <div class="header-title">
          <h4>SERVICE</h4>
          <h1>We Are Providing</h1>
        </div>
        <b-row class="service-container">
          <b-col cols="12" md="11" lg="11" sm="12" class="mx-auto">
            <b-row>
              <b-col cols="12" class="service-card mx-auto">
                <h5>Buy Properties</h5>
                <span
                  ><svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M57.546 0H49.2794C48.7087 0 48.246 0.462679 48.246 1.03333V3.1H47.2283L40.1862 0.0837566C40.0586 0.0287597 39.9218 0 39.7831 0H28.9124C26.9951 0.00252278 25.1565 0.764909 23.8002 2.12015L15.3862 10.5225C14.0209 11.8505 13.756 13.946 14.7475 15.5722C14.9079 15.8098 15.0921 16.0293 15.2979 16.2286C14.5446 17.5863 14.1485 19.1136 14.146 20.6667C14.1364 24.6567 16.6734 28.2083 20.451 29.4934C24.2286 30.778 28.4048 29.5105 30.8302 26.3419C33.2561 23.1738 33.3903 18.8114 31.1637 15.5H33.7299C34.4696 17.9799 37.7926 19.6333 40.8124 19.6333C43.8317 19.6333 47.1537 17.9799 47.8938 15.5H48.246V17.5667C48.246 18.1373 48.7087 18.6 49.2794 18.6H57.546C58.1167 18.6 58.5794 18.1373 58.5794 17.5667V1.03333C58.5794 0.462679 58.1167 0 57.546 0ZM30.6794 20.6667C30.6794 24.6618 27.4411 27.9 23.446 27.9C19.4509 27.9 16.2127 24.6618 16.2127 20.6667C16.2081 19.1979 16.6572 17.7639 17.4983 16.5601C18.8051 14.6579 20.9429 13.4959 23.2497 13.4333H23.446C23.5752 13.4333 23.7013 13.45 23.8305 13.456C24.5545 14.7305 25.9128 15.5131 27.379 15.5H28.4926C29.8887 16.8568 30.6768 18.7201 30.6794 20.6667ZM47.0124 13.4333C46.4417 13.4333 45.979 13.896 45.979 14.4667C45.979 16.0313 43.4194 17.5667 40.8124 17.5667C38.2053 17.5667 35.6457 16.0313 35.6457 14.4667C35.6457 13.896 35.183 13.4333 34.6124 13.4333H27.379C26.2372 13.4333 25.3124 12.508 25.3124 11.3667C25.3124 10.2254 26.2372 9.3 27.379 9.3H38.7457V7.23333H27.379C25.0959 7.23333 23.2457 9.08405 23.2457 11.3667H23.226C20.6528 11.4292 18.2203 12.5559 16.5094 14.4793C16.5008 14.4677 16.4907 14.4586 16.4821 14.446C16.028 13.6382 16.1789 12.625 16.8494 11.9847L25.2644 3.57933C26.2322 2.61209 27.544 2.06818 28.9124 2.06667H39.5661L46.6052 5.08291C46.7349 5.13892 46.8751 5.16768 47.0164 5.16667H48.246V13.4333H47.0124ZM56.5127 16.5333H50.3127V2.06667H56.5127V16.5333Z"
                        fill="#F36F56"
                      />
                      <path
                        d="M38.075 42.5529L32.7463 38.7914V33.0667C32.7463 32.496 32.2837 32.0334 31.713 32.0334H27.5797C27.009 32.0334 26.5463 32.496 26.5463 33.0667V34.4098L21.975 31.1842C21.6178 30.9324 21.1415 30.9324 20.7843 31.1842L4.68387 42.5509C3.39372 43.4803 3.10108 45.2795 4.03047 46.5697C4.95986 47.8603 6.75912 48.153 8.04977 47.2236L10.013 45.7841V59.9334C10.013 61.0747 10.9384 62 12.0797 62H30.6797C31.821 62 32.7463 61.0747 32.7463 59.9334V45.7841L34.7096 47.2236C35.5436 47.8376 36.6435 47.9567 37.5901 47.5344C38.5361 47.1121 39.1825 46.2144 39.2824 45.1831C39.3823 44.1518 38.9206 43.1467 38.0729 42.5509L38.075 42.5529ZM28.613 34.1H30.6797V37.3322L28.613 35.8741V34.1ZM16.213 59.9334V53.7334H20.3463V59.9334H16.213ZM30.6797 59.9334H22.413V52.7C22.413 52.1294 21.9503 51.6667 21.3797 51.6667H15.1797C14.609 51.6667 14.1463 52.1294 14.1463 52.7V59.9334H12.0797V44.2679L21.3797 37.4483L30.6797 44.2679V59.9334ZM37.0865 45.3552C36.9634 45.5394 36.7702 45.6655 36.5522 45.7033C36.3342 45.7432 36.1097 45.6907 35.9321 45.5585L21.9882 35.3286C21.6244 35.0612 21.1289 35.0612 20.7646 35.3286L6.82118 45.5585C6.58706 45.7558 6.26263 45.8047 5.98109 45.6857C5.70005 45.5666 5.50882 45.2992 5.48763 44.9944C5.46594 44.6897 5.61781 44.3985 5.87967 44.2411L21.3797 33.2983L36.8797 44.2401C37.2404 44.4934 37.3323 44.9894 37.0865 45.3552Z"
                        fill="#F36F56"
                      />
                      <path
                        d="M23.4463 52.7V56.8333C23.4463 57.4039 23.909 57.8666 24.4796 57.8666H28.613C29.1836 57.8666 29.6463 57.4039 29.6463 56.8333V52.7C29.6463 52.1293 29.1836 51.6666 28.613 51.6666H24.4796C23.909 51.6666 23.4463 52.1293 23.4463 52.7ZM25.513 53.7333H27.5796V55.8H25.513V53.7333Z"
                        fill="#F36F56"
                      />
                      <path
                        d="M17.2461 45.4667C17.2461 47.7493 19.0968 49.6 21.3794 49.6C23.662 49.6 25.5128 47.7493 25.5128 45.4667C25.5128 43.1841 23.662 41.3334 21.3794 41.3334C19.0968 41.3334 17.2461 43.1841 17.2461 45.4667ZM23.4461 45.4667C23.4461 46.608 22.5207 47.5334 21.3794 47.5334C20.2381 47.5334 19.3128 46.608 19.3128 45.4667C19.3128 44.3254 20.2381 43.4 21.3794 43.4C22.5207 43.4 23.4461 44.3254 23.4461 45.4667Z"
                        fill="#F36F56"
                      />
                      <path
                        d="M22.413 17.5667H24.4797C25.0503 17.5667 25.513 18.0294 25.513 18.6H27.5797C27.5797 16.888 26.1916 15.5 24.4797 15.5V14.4667H22.413V15.5C20.701 15.5 19.313 16.888 19.313 18.6C19.313 20.312 20.701 21.7 22.413 21.7H24.4797C25.0503 21.7 25.513 22.1627 25.513 22.7333C25.513 23.304 25.0503 23.7667 24.4797 23.7667H22.413C21.8423 23.7667 21.3797 23.304 21.3797 22.7333H19.313C19.313 24.4453 20.701 25.8333 22.413 25.8333V26.8667H24.4797V25.8333C26.1916 25.8333 27.5797 24.4453 27.5797 22.7333C27.5797 21.0214 26.1916 19.6333 24.4797 19.6333H22.413C21.8423 19.6333 21.3797 19.1707 21.3797 18.6C21.3797 18.0294 21.8423 17.5667 22.413 17.5667Z"
                        fill="#F36F56"
                      />
                      <path
                        d="M54.446 43.4H44.1127C42.9714 43.4 42.046 44.3254 42.046 45.4667V47.5334C42.0491 47.6247 42.0581 47.716 42.0738 47.8063C41.4214 48.1676 41.0152 48.8538 41.0127 49.6V51.6667C41.0152 52.4129 41.4214 53.0991 42.0738 53.4604C42.0581 53.5507 42.0491 53.642 42.046 53.7334V55.8C42.0491 55.8914 42.0581 55.9827 42.0738 56.073C41.4214 56.4343 41.0152 57.1205 41.0127 57.8667V59.9334C41.0127 61.0747 41.9381 62 43.0794 62H53.4127C54.554 62 55.4794 61.0747 55.4794 59.9334V57.8667C55.4763 57.7754 55.4673 57.684 55.4516 57.5937C56.104 57.2325 56.5102 56.5463 56.5127 55.8V53.7334C56.5102 52.9871 56.104 52.3009 55.4516 51.9397C55.4673 51.8493 55.4763 51.758 55.4794 51.6667V49.6C55.4763 49.5087 55.4673 49.4174 55.4516 49.3271C56.104 48.9658 56.5102 48.2796 56.5127 47.5334V45.4667C56.5127 44.3254 55.5873 43.4 54.446 43.4ZM44.1127 45.4667H54.446V47.5334H44.1127V45.4667ZM53.4127 51.6667H43.0794V49.6H53.4127V51.6667ZM54.446 53.7334V55.8H44.1127V53.7334H54.446ZM53.4127 59.9334H43.0794V57.8667H53.4127V59.9334Z"
                        fill="#F36F56"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="62" height="62" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </b-col>
              <b-col cols="12" class="service-card mx-auto">
                <h5>Sell Properties</h5>
                <span>
                  <svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M21.7121 45.4875H15.514C14.9435 45.4875 14.481 45.9501 14.481 46.5206V52.7187C14.481 53.2897 14.9435 53.7517 15.514 53.7517H21.7121C22.2826 53.7517 22.7451 53.2897 22.7451 52.7187V46.5206C22.7451 45.9501 22.2826 45.4875 21.7121 45.4875ZM20.6791 51.6857H16.547V47.5536H20.6791V51.6857Z"
                        fill="#FF7557"
                      />
                      <path
                        d="M36.1746 34.1243H25.8444C24.7034 34.1243 23.7783 35.0493 23.7783 36.1903V40.3224C23.7783 41.4639 24.7034 42.3884 25.8444 42.3884H36.1746C37.3155 42.3884 38.2406 41.4639 38.2406 40.3224V36.1903C38.2406 35.0493 37.3155 34.1243 36.1746 34.1243ZM36.1746 37.2233H32.0425V36.1903H36.1746V37.2233ZM29.9764 36.1903V37.2233H25.8444V36.1903H29.9764ZM25.8444 39.2894H29.9764V40.3224H25.8444V39.2894ZM32.0425 40.3224V39.2894H36.1746V40.3224H32.0425Z"
                        fill="#FF7557"
                      />
                      <path
                        d="M56.7448 54.8563C56.4876 53.4974 55.6967 52.2989 54.5486 51.5282C53.4006 50.7575 51.9913 50.4795 50.6365 50.7559V32.4859L52.4886 34.3381C53.7481 35.5976 55.7895 35.5976 57.0485 34.3381C58.3075 33.0791 58.3075 31.0378 57.0485 29.7783L50.6365 23.3668V10.3647C51.7774 10.3647 52.7025 9.44016 52.7025 8.29869V6.23265C52.7025 5.09169 51.7774 4.16661 50.6365 4.16661H40.3063C39.1653 4.16661 38.2402 5.09169 38.2402 6.23265V8.29869C38.2402 9.44016 39.1653 10.3647 40.3063 10.3647V13.0366L33.1962 5.92295C31.9866 4.71843 30.0315 4.71843 28.8225 5.92295L27.1695 7.57588C24.2228 2.15303 18.1594 -0.80228 12.0727 0.217627C5.98555 1.23703 1.21641 6.00718 0.198012 12.0943C-0.820381 18.1815 2.13594 24.2439 7.5598 27.1897L4.96968 29.7783C3.71069 31.0378 3.71069 33.0791 4.96968 34.3381C6.22918 35.5976 8.27051 35.5976 9.5295 34.3381L11.3817 32.4859V54.1466C10.2569 52.8412 8.43746 52.3751 6.82387 52.9789C5.20978 53.5826 4.14296 55.1276 4.15053 56.8507C1.8686 56.8507 0.0184438 58.7008 0.0184438 60.9827C0.0184438 61.5537 0.480983 62.0158 1.05146 62.0158H60.9667C61.5372 62.0158 61.9997 61.5537 61.9997 60.9827C61.9957 57.925 59.7662 55.3259 56.7448 54.8563ZM47.5293 52.761C47.5293 52.7468 47.5374 52.7342 47.5374 52.7186V46.5205C47.5374 45.95 47.0749 45.4874 46.5044 45.4874H40.3063C39.7358 45.4874 39.2732 45.95 39.2732 46.5205V52.7186C39.2732 53.2896 39.7358 53.7516 40.3063 53.7516H46.5044C46.6925 53.7471 46.8756 53.6896 47.0325 53.5857C46.689 54.2797 46.5084 55.0434 46.5044 55.8176V55.9211C44.4802 56.3402 42.8999 57.9245 42.4858 59.9497H38.2402V44.4544C38.2402 43.8839 37.7777 43.4214 37.2072 43.4214H24.8109C24.2405 43.4214 23.7779 43.8839 23.7779 44.4544V59.9497H17.488C17.1097 57.7354 15.5647 55.8978 13.4477 55.1443V31.0252H48.5704V51.7128C48.175 52.0104 47.8244 52.3635 47.5293 52.761ZM45.4714 47.5535V51.6856H41.3393V47.5535H45.4714ZM40.3063 6.23265H50.6365V8.29869H40.3063V6.23265ZM42.3723 10.3647H48.5704V21.3007L42.3723 15.1026V10.3647ZM30.2863 7.38673C30.6883 6.98875 31.3359 6.98875 31.7384 7.38673L55.5907 31.239C56.0427 31.692 56.0427 32.4249 55.5907 32.8773C55.1378 33.3278 54.4059 33.3278 53.9524 32.8773L33.1962 12.1211C31.9866 10.9166 30.0315 10.9166 28.8225 12.1211L28.7438 12.1998C28.601 11.3125 28.3761 10.4404 28.0714 9.59552L30.2863 7.38673ZM2.08449 14.4968C2.08449 7.65053 7.63445 2.10057 14.4807 2.10057C21.327 2.10057 26.877 7.65053 26.877 14.4968C26.877 21.3431 21.327 26.8931 14.4807 26.8931C7.63748 26.886 2.09205 21.3401 2.08449 14.4968ZM8.06874 32.8773C7.61629 33.3293 6.88339 33.3293 6.43044 32.8773C5.98 32.4244 5.98 31.6925 6.43044 31.239L9.58246 28.0875C10.4273 28.3922 11.2995 28.6176 12.1867 28.7599L11.6853 29.2607L8.06874 32.8773ZM14.9312 28.9364C22.5532 28.6913 28.6747 22.5693 28.9203 14.9473L30.2863 13.5849C30.6883 13.1869 31.3359 13.1869 31.7384 13.5849L47.1097 28.9591H14.9085L14.9312 28.9364ZM2.36241 59.9497C2.90566 59.0161 4.0784 58.6615 5.04837 59.1371C5.44483 59.3328 5.9225 59.2542 6.23523 58.9414C6.54847 58.6292 6.62766 58.152 6.43246 57.7546C6.29173 57.4741 6.21808 57.1649 6.21657 56.8507C6.21354 55.8434 6.94039 54.9818 7.93356 54.8144C8.92724 54.6474 9.8957 55.2235 10.2226 56.1763C10.3638 56.6121 10.7819 56.8971 11.2394 56.8683C11.2874 56.8693 11.3353 56.8633 11.3817 56.8507C13.2651 56.8532 14.9095 58.1268 15.3826 59.9497H2.36241ZM25.844 59.9497V45.4874H36.1742V59.9497H25.844ZM44.6149 59.9497C45.0391 58.7291 46.1811 57.9034 47.4733 57.8837C47.5087 57.8837 47.6131 57.8993 47.6479 57.9003C47.9757 57.9134 48.2895 57.7702 48.4948 57.5145C48.6996 57.2587 48.7712 56.9208 48.6875 56.604C48.6143 56.3483 48.575 56.084 48.5704 55.8176C48.5704 54.1062 49.958 52.7186 51.6695 52.7186C53.3809 52.7186 54.7686 54.1062 54.7686 55.8176C54.7686 56.3886 55.2311 56.8507 55.8016 56.8507C57.685 56.8532 59.3294 58.1268 59.8025 59.9497H44.6149Z"
                        fill="#FF7557"
                      />
                      <path
                        d="M15.5142 23.7941V21.728C17.2257 21.728 18.6133 20.3409 18.6133 18.629V16.5629C18.6133 14.8515 17.2257 13.4639 15.5142 13.4639H13.4482C12.8777 13.4639 12.4152 13.0018 12.4152 12.4309V10.3648C12.4152 9.79433 12.8777 9.33179 13.4482 9.33179H15.5142C16.0847 9.33179 16.5472 9.79433 16.5472 10.3648V11.3978H18.6133V10.3648C18.6133 8.65337 17.2257 7.26575 15.5142 7.26575V5.19971H13.4482V7.26575C11.7367 7.26575 10.3491 8.65337 10.3491 10.3648V12.4309C10.3491 14.1428 11.7367 15.5299 13.4482 15.5299H15.5142C16.0847 15.5299 16.5472 15.9925 16.5472 16.5629V18.629C16.5472 19.2 16.0847 19.662 15.5142 19.662H13.4482C12.8777 19.662 12.4152 19.2 12.4152 18.629V17.596H10.3491V18.629C10.3491 20.3409 11.7367 21.728 13.4482 21.728V23.7941H15.5142Z"
                        fill="#FF7557"
                      />
                      <path
                        d="M28.9435 48.5865H26.8774V50.6526H27.9105V52.7186H26.8774V54.7847H28.9435C29.514 54.7847 29.9765 54.3226 29.9765 53.7516V49.6196C29.9765 49.0491 29.514 48.5865 28.9435 48.5865Z"
                        fill="#FF7557"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="62" height="62" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </b-col>
              <b-col cols="12" class="service-card mx-auto">
                <h5>Rent Properties</h5>
                <span>
                  <svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M61.901 45.1551C61.7856 44.9097 61.5776 44.7198 61.3227 44.6273L55.5513 42.5266C55.0195 42.3341 54.4327 42.609 54.2403 43.1408L53.8899 44.103L47.2048 41.6689C47.0359 41.6079 46.8545 41.5919 46.6775 41.6219L32.7656 44.0785C31.5055 44.3039 30.4224 45.1041 29.8366 46.2422L23.4545 43.9135C22.4348 43.5402 21.3082 43.5902 20.3261 44.053C19.0785 44.6353 18.2059 45.8039 18.0024 47.1659C17.748 49.1371 18.9156 51.016 20.7959 51.6607L38.9308 58.2608L41.8163 59.3109C42.0347 59.3914 42.2736 59.3944 42.4941 59.3194L48.3644 57.3377L48.9887 57.5636L48.6388 58.5267C48.4464 59.0585 48.7213 59.6458 49.2531 59.8383L55.025 61.9385C55.5568 62.1314 56.1441 61.8565 56.3365 61.3247L61.938 45.9343C62.029 45.6799 62.0155 45.4 61.901 45.1551ZM48.049 55.2894L42.1797 57.2712L21.4962 49.7389C20.539 49.4205 19.9287 48.4824 20.0262 47.4777C20.1152 46.8675 20.4735 46.3297 21.0023 46.0123C21.5317 45.6949 22.1749 45.6314 22.7552 45.8403L29.3968 48.258C29.3998 48.4464 29.4153 48.6343 29.4428 48.8208C29.8396 51.044 31.9584 52.5279 34.1831 52.1416L45.7069 50.1098L45.351 48.094L33.8322 50.1263C32.7216 50.3192 31.6635 49.5815 31.4601 48.4729C31.4176 48.2395 31.4196 48.0006 31.4656 47.7676C31.473 47.7337 31.479 47.6997 31.4825 47.6652C31.4975 47.5782 31.521 47.4927 31.5535 47.4103C31.8054 46.7235 32.4027 46.2217 33.1225 46.0918L46.7615 43.6876L53.1897 46.0273L49.6889 55.6498L48.7268 55.3004C48.5094 55.2179 48.27 55.2124 48.049 55.2849V55.2894ZM54.7581 59.6673L50.91 58.2668L55.8112 44.8002L59.6593 46.2002L54.7581 59.6673Z"
                        fill="#F36F56"
                      />
                      <path
                        d="M20.7733 26.3145L22.7181 24.8875V37.8743C22.7181 39.0049 23.6347 39.9215 24.7653 39.9215H43.1906C44.3217 39.9215 45.2379 39.0049 45.2379 37.8743V24.8885L47.1832 26.3155C47.668 26.6724 48.2548 26.8643 48.8566 26.8643C49.8207 26.8648 50.7209 26.384 51.2572 25.5827C52.1059 24.2967 51.778 22.5688 50.517 21.6837L42.7548 16.2031C43.0117 15.9712 43.2366 15.7063 43.4241 15.4159C44.3977 13.806 44.1313 11.7373 42.7813 10.4267L34.4543 2.09926C33.1133 0.751252 31.289 -0.00497357 29.3872 2.46195e-05H18.6236C18.4851 -0.000475199 18.3477 0.0280145 18.2207 0.0829946L11.2537 3.07091H10.4345V1.02365C10.4345 0.458358 9.9767 2.46195e-05 9.4109 2.46195e-05H1.22187C0.656576 2.46195e-05 0.198242 0.458358 0.198242 1.02365V17.4017C0.198242 17.967 0.656576 18.4253 1.22187 18.4253H9.4109C9.9767 18.4253 10.4345 17.967 10.4345 17.4017V15.3545H10.584C11.3172 17.8111 14.609 19.449 17.5999 19.449C20.5913 19.449 23.8832 17.8111 24.6159 15.3545H26.4032L17.4375 21.6847C16.1729 22.5803 15.8526 24.3207 16.7148 25.6082C17.6494 26.9098 19.4538 27.2237 20.7733 26.3145ZM8.38727 16.3781H2.2455V2.04728H8.38727V16.3781ZM28.8598 37.8743V31.7325H32.9544V37.8743H28.8598ZM43.1906 37.8743H35.0016V30.7089C35.0016 30.1436 34.5438 29.6853 33.978 29.6853H27.8362C27.2709 29.6853 26.8126 30.1436 26.8126 30.7089V37.8743H24.7653V23.386L33.978 16.624L43.1906 23.386V37.8743ZM23.7417 13.3072C23.1764 13.3072 22.7181 13.7655 22.7181 14.3308C22.7181 15.8808 20.183 17.4017 17.5999 17.4017C15.0174 17.4017 12.4818 15.8808 12.4818 14.3308C12.4818 13.7655 12.024 13.3072 11.4582 13.3072H10.4345V5.11817H11.4582C11.5971 5.11867 11.7346 5.09018 11.8615 5.0352L18.8285 2.04728H29.3822C30.7422 2.04228 32.0472 2.58259 33.0058 3.54674L41.3338 11.8742C42.0066 12.503 42.1575 13.5121 41.6997 14.3103C41.3783 14.7682 40.876 15.0656 40.3202 15.127C39.7649 15.188 39.2096 15.0076 38.7962 14.6307L34.9536 10.7881C34.7197 8.72886 32.9799 7.17142 30.9071 7.16543H21.6944V9.21268H30.9071C32.0382 9.21268 32.9544 10.1294 32.9544 11.2599C32.9544 12.3905 32.0382 13.3072 30.9071 13.3072H23.7417ZM18.4191 24.4647C18.1787 24.0988 18.2692 23.6085 18.6236 23.3521L29.9524 15.3545H30.9071C32.4071 15.3695 33.7886 14.5428 34.4838 13.2142L37.3503 16.0802C38.206 16.9289 39.404 17.3377 40.6001 17.1898L49.3324 23.3521C49.6043 23.5365 49.7358 23.8684 49.6638 24.1893C49.5913 24.5096 49.3309 24.753 49.006 24.8035C48.7906 24.843 48.5687 24.7925 48.3918 24.6636L34.5833 14.5293C34.2224 14.2644 33.7316 14.2644 33.3712 14.5293L19.5727 24.6571C19.4338 24.758 19.2663 24.8125 19.0949 24.813C18.8265 24.8125 18.5751 24.6831 18.4191 24.4647Z"
                        fill="#F36F56"
                      />
                      <path
                        d="M36.0254 30.7089V34.8034C36.0254 35.3687 36.4837 35.8271 37.049 35.8271H41.1435C41.7093 35.8271 42.1672 35.3687 42.1672 34.8034V30.7089C42.1672 30.1436 41.7093 29.6853 41.1435 29.6853H37.049C36.4837 29.6853 36.0254 30.1436 36.0254 30.7089ZM38.0727 31.7326H40.1199V33.7798H38.0727V31.7326Z"
                        fill="#F36F56"
                      />
                      <path
                        d="M30.9072 22.5199C30.9072 24.2157 32.2822 25.5907 33.9781 25.5907C35.6745 25.5907 37.049 24.2157 37.049 22.5199C37.049 20.824 35.6745 19.449 33.9781 19.449C32.2822 19.449 30.9072 20.824 30.9072 22.5199ZM35.0017 22.5199C35.0017 23.0852 34.5439 23.5435 33.9781 23.5435C33.4128 23.5435 32.9545 23.0852 32.9545 22.5199C32.9545 21.9546 33.4128 21.4962 33.9781 21.4962C34.5439 21.4962 35.0017 21.9546 35.0017 22.5199Z"
                        fill="#F36F56"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="62" height="62" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </section>
    <!--  Suggestion section -->
    <section v-if="suggestionProperties.length > 0" class="feature-section">
      <propertySlider
        :items="suggestionProperties"
        :is-feture="true"
        :property-type="'Suggestion Properties'"
      />
      <div class="container text-center mt-5">
        <button
          class="btn btn-link text-center"
          @click="$router.push({ path: '/funnel' })"
        >
          See All
        </button>
      </div>
    </section>
    <!-- feature section -->
    <section v-if="treandingProperties.length > 0" class="feature-section">
      <propertySlider
        :items="treandingProperties"
        :is-feture="true"
        :property-type="'Treanding Propertiess'"
      />
      <!-- <div class="container text-center mt-5">
        <button
          class="btn btn-link text-center"
          @click="$router.push({ path: '/search-result' })"
        >
          See All
        </button>
      </div> -->
    </section>
    <!--  Suggestion section -->
    <section v-if="recentUploadedProperty.length > 0" class="feature-section">
      <propertySlider
        :items="recentUploadedProperty"
        :is-feture="true"
        :property-type="'Recently Uploaded'"
      />
    </section>
    <!-- service section -->
    <section class="work-section">
      <div class="container">
        <div class="header-title">
          <h4>HOW IT WORKS</h4>
          <h1>Get Ready To Start</h1>
        </div>
        <b-row class="work-container">
          <b-col cols="12" md="3" lg="3" sm="12" class="mb-3">
            <div class="work-card">
              <h6>Step 1</h6>
              <h5>Get Started</h5>
              <div>
                <img src="@/assets/images/step1.svg" />
              </div>
              <p>Lorem Ipsum is simply a dummy text of the printing</p>
            </div>
          </b-col>
          <b-col cols="12" md="3" lg="3" sm="12" class="mb-3">
            <div class="work-card">
              <h6>Step 2</h6>
              <h5>Find Property</h5>
              <div>
                <img src="@/assets/images/step2.svg" />
              </div>
              <p>Lorem Ipsum is simply a dummy text of the printing</p>
            </div>
          </b-col>
          <b-col cols="12" md="3" lg="3" sm="12" class="mb-3">
            <div class="work-card">
              <h6>Step 3</h6>
              <h5>Chat with Seller</h5>
              <div>
                <img src="@/assets/images/step3.svg" />
              </div>
              <p>Lorem Ipsum is simply a dummy text of the printing</p>
            </div>
          </b-col>
          <b-col cols="12" md="3" lg="3" sm="12" class="mb-3">
            <div class="work-card">
              <h6>Step 4</h6>
              <h5>Confirm Deal</h5>
              <div>
                <img src="@/assets/images/step4.svg" />
              </div>
              <p>Lorem Ipsum is simply a dummy text of the printing</p>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- why us section -->
    <section class="why-us-section">
      <div class="container position-relative">
        <b-row>
          <b-col cols="12" md="6" lg="6" sm="12">
            <img src="@/assets/images/why-us.png" width="100%" />
          </b-col>
          <b-col cols="12" md="6" lg="6" sm="12">
            <div class="why-use-right">
              <div class="header-title text-left">
                <h4>WHY US</h4>
                <h1>We Are Providing</h1>
              </div>
              <div class="accordion" role="tablist">
                <div class="accordion-list">
                  <div v-b-toggle.accordion-1 class="accordion-tab">
                    <h3>
                      <img src="@/assets/images/down-arrow.svg" class="mr-3" />
                      Get Started In 5 Minutes
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
                      No Personal Gurantee
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
                <div class="accordion-list">
                  <div v-b-toggle.accordion-3 class="accordion-tab">
                    <h3>
                      <img src="@/assets/images/down-arrow.svg" class="mr-3" />
                      Advanced Fraud Protection
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
                      Fair Dealing
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
                      Safe & Secured
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
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- testimonial section -->
    <section class="testimonial-section">
      <div class="container">
        <div class="header-title mb-5">
          <h4>TESTIMONIAL</h4>
          <h1>What Our Clients Say</h1>
        </div>
        <client-only>
          <Carousel
            :margin="20"
            :dots="false"
            :nav="false"
            :loop="true"
            :responsive="{
              0: { items: 1 },
              600: { items: 1 },
              1191: { items: 1 },
              1900: { items: 1 },
            }"
            class="position-relative"
          >
            <b-row>
              <b-col cols="12" md="6" lg="6">
                <div class="testimonial-left">
                  <div class="testimonial-description">
                    <h4>“Simply Amazing”</h4>
                    <p class="comment">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an k.
                    </p>
                    <div class="testimonial-user">
                      <div class="user-avatar">
                        <img
                          src="@/assets/images/user-avatar-testimonial.png"
                        />
                      </div>
                      <h4>John Smith</h4>
                      <p>New Jersey, USA</p>
                      <div class="star">
                        <span class="mr-2"
                          ><img src="@/assets/images/star.svg" width="20px"
                        /></span>
                        <span class="mr-2"
                          ><img src="@/assets/images/star.svg" width="20px"
                        /></span>
                        <span class="mr-2"
                          ><img src="@/assets/images/star.svg" width="20px"
                        /></span>
                        <span class="mr-2"
                          ><img src="@/assets/images/star.svg" width="20px"
                        /></span>
                        <span
                          ><img src="@/assets/images/star.svg" width="20px"
                        /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col cols="12" md="6" lg="6">
                <div class="testimonial-property-img-box">
                  <div class="property-img">
                    <img src="@/assets/images/property/testimonial-1.svg" />
                  </div>
                  <div class="property-rating">
                    <h4>Fully Satisfied</h4>
                    <div class="star justify-content-center">
                      <span class="mr-2"
                        ><img src="@/assets/images/star.svg" width="20px"
                      /></span>
                      <span class="mr-2"
                        ><img src="@/assets/images/star.svg" width="20px"
                      /></span>
                      <span class="mr-2"
                        ><img src="@/assets/images/star.svg" width="20px"
                      /></span>
                      <span class="mr-2"
                        ><img src="@/assets/images/star.svg" width="20px"
                      /></span>
                      <span
                        ><img src="@/assets/images/star.svg" width="20px"
                      /></span>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </Carousel>
        </client-only>
      </div>
    </section>
    <!-- blog section -->
    <section class="feature-section mt-5">
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
            <span v-for="(blog, index) in blogDetail" :key="index">
              <blog-card :data="blog" :index="index" />
            </span>
          </Carousel>
        </client-only>
      </div>
      <div class="container text-center mt-5">
        <button class="btn btn-link text-center">See Full Blog</button>
      </div>
    </section>
    <!-- new sletter section -->
    <section class="new-sletter-section">
      <div class="container">
        <div class="header-title">
          <h4>NEWSLETTER</h4>
          <h1>Subscribe To Get Latest News</h1>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <div class="new-sletter-search">
          <input type="email" placeholder="Enter Your Mail Address" />
          <button class="btn-link btn">Subscribe</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import blogCard from '../components/card/NormalCard'
import {
  FETCH_ALL_TRENDING_PROPERTIES,
  FETCH_FUNNEL_PROPERTYY,
  FETCH_ALL_RECENT_UPLOADED_PROPERTIES,
} from '~/services/ENDPOINT'
import propertySlider from '~/components/core/PropertySlider'
export default {
  name: 'LandingPage',
  components: {
    blogCard,
    propertySlider,
  },
  data() {
    return {
      // blurEffect: true,
      carouselInterval: null,
      treandingProperties: [],
      suggestionProperties: [],
      recentUploadedProperty: [],
      blogDetail: [
        {
          id: 1,
          imgUrl: require(`~/assets/images/property/blog-1.svg`),
          title: 'Why live in New York',
          date: 'February 13, 2021',
          description:
            "Lorem Ipsum is simply dum my text of the printing and type setting industry. Lorem Ip sum has been the industry's standard ",
        },
        {
          id: 2,
          imgUrl: require(`~/assets/images/property/blog-2.svg`),
          title: 'Why live in New York',
          date: 'February 13, 2021',
          description:
            "Lorem Ipsum is simply dum my text of the printing and type setting industry. Lorem Ip sum has been the industry's standard ",
        },
        {
          id: 3,
          imgUrl: require(`~/assets/images/property/blog-3.svg`),
          title: 'Why live in New York',
          date: 'February 13, 2021',
          description:
            "Lorem Ipsum is simply dum my text of the printing and type setting industry. Lorem Ip sum has been the industry's standard ",
        },
        {
          id: 4,
          imgUrl: require(`~/assets/images/property/blog-1.svg`),
          title: 'Why live in New York',
          date: 'February 13, 2021',
          description:
            "Lorem Ipsum is simply dum my text of the printing and type setting industry. Lorem Ip sum has been the industry's standard ",
        },
      ],
      text: `
          Lorem Ipsum is simply dummy text of the printing and type setting industry.
        `,
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'auth/loggedInUser',
      isLoggedin: 'auth/loggedIn',
      userType: 'auth/fetcUserType',
    }),
  },
  mounted() {
    // document.addEventListener('scroll', (e) => {
    //   const percentage = Math.round(this.currentScrollPercentage())
    //   if (percentage > 5) {
    //     console.log('show popup')
    //   }
    // })
    this.$nextTick(() => {
      if (this.isLoggedin && this.userType === 'BUYER') {
        this.suggestionProperty()
      }
      this.fetchTrendingProperty()
      this.fetchRecentUpdatedProperty()
    })
  },
  destroyed() {
    document.removeEventListener('scroll', (e) => {})
  },
  methods: {
    async suggestionProperty() {
      try {
        this.$nextTick(() => this.$nuxt.$loading.start())
        const data = await FETCH_FUNNEL_PROPERTYY()
        this.suggestionProperties = data.properties
      } catch ({ data }) {
        console.log(data)
      } finally {
        this.loader = false
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
    async fetchTrendingProperty() {
      try {
        this.$nextTick(() => this.$nuxt.$loading.start())
        const data = await FETCH_ALL_TRENDING_PROPERTIES()
        this.treandingProperties = data.data
      } catch ({ data }) {
        console.log(data)
      } finally {
        this.loader = false
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
    async fetchRecentUpdatedProperty() {
      try {
        this.$nextTick(() => this.$nuxt.$loading.start())
        const data = await FETCH_ALL_RECENT_UPLOADED_PROPERTIES()
        this.recentUploadedProperty = data.data
      } catch ({ data }) {
        console.log(data)
      } finally {
        this.loader = false
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
    currentScrollPercentage() {
      return (
        ((document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100
      )
    },
  },
}
</script>
