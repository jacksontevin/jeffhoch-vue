<template>
  <section class="chat-section-page my-4">
    <b-container>
      <div class="row content-area-wrapper">
        <div class="col-12 col-md-4 col-lg-4 sidebar-left">
          <div class="sidebar">
            <!-- Chat Sidebar area -->
            <div class="sidebar-content card">
              <!-- <span class="sidebar-close-icon">
                <i data-feather="x"></i>
              </span> -->
              <!-- Sidebar header start -->
              <h4 class="chat-list-title">Messages</h4>
              <div class="chat-fixed-search">
                <div class="d-flex align-items-center w-100">
                  <search-box class="my-2" placeholder="Search" />
                </div>
              </div>
              <!-- Sidebar header end -->

              <!-- Sidebar Users start -->
              <client-only>
                <VuePerfectScrollbar
                  v-once
                  class="scroll-area"
                  :settings="settings"
                  @ps-scroll-y="scrollHandle"
                >
                  <div
                    id="users-list"
                    class="chat-user-list-wrapper list-group"
                  >
                    <h4 class="chat-list-title">Chats</h4>
                    <ul class="chat-users-list chat-list media-list">
                      <li>
                        <span class="avatar"
                          ><img
                            src="@/assets/images/chat/avatar-s-3.jpg"
                            height="42"
                            width="42"
                            alt="Generic placeholder image"
                          />
                          <span class="avatar-status-offline"></span>
                        </span>
                        <div class="chat-info flex-grow-1">
                          <h5 class="mb-0">Elizabeth Elliott</h5>
                          <p class="card-text text-truncate">
                            Cake pie jelly jelly beans. Marzipan lemon drops
                            halvah cake. Pudding cookie lemon drops icing
                          </p>
                        </div>
                        <div class="chat-meta text-nowrap">
                          <span class="d-flex">
                            <small class="float-right mb-25 chat-time mr-2"
                              >1/3/21</small
                            >
                            <small class="float-right mb-25 chat-time"
                              >4:14 PM</small
                            >
                          </span>
                          <span
                            class="badge badge-danger badge-pill float-right"
                            >3</span
                          >
                        </div>
                      </li>
                      <li>
                        <span class="avatar"
                          ><img
                            src="@/assets/images/chat/avatar-s-3.jpg"
                            height="42"
                            width="42"
                            alt="Generic placeholder image"
                          />
                          <span class="avatar-status-busy"></span>
                        </span>
                        <div class="chat-info flex-grow-1">
                          <h5 class="mb-0">Kristopher Candy</h5>
                          <p class="card-text text-truncate">
                            Cake pie jelly jelly beans. Marzipan lemon drops
                            halvah cake. Pudding cookie lemon drops icing
                          </p>
                        </div>
                        <div class="chat-meta text-nowrap">
                          <span class="d-flex">
                            <small class="float-right mb-25 chat-time mr-2"
                              >1/3/21</small
                            >
                            <small class="float-right mb-25 chat-time"
                              >4:14 PM</small
                            >
                          </span>
                          <span
                            class="badge badge-danger badge-pill float-right"
                            >3</span
                          >
                        </div>
                      </li>
                      <li>
                        <span class="avatar"
                          ><img
                            src="@/assets/images/chat/avatar-s-3.jpg"
                            height="42"
                            width="42"
                            alt="Generic placeholder image"
                          />
                          <span class="avatar-status-away"></span>
                        </span>
                        <div class="chat-info flex-grow-1">
                          <h5 class="mb-0">Sarah Woods</h5>
                          <p class="card-text text-truncate">
                            Cake pie jelly jelly beans. Marzipan lemon drops
                            halvah cake. Pudding cookie lemon drops icing.
                          </p>
                        </div>
                        <div class="chat-meta text-nowrap">
                          <span class="d-flex">
                            <small class="float-right mb-25 chat-time mr-2"
                              >1/3/21</small
                            >
                            <small class="float-right mb-25 chat-time"
                              >4:14 PM</small
                            >
                          </span>
                          <span
                            class="badge badge-danger badge-pill float-right"
                            >3</span
                          >
                        </div>
                      </li>
                      <li>
                        <span class="avatar"
                          ><img
                            src="@/assets/images/chat/avatar-s-3.jpg"
                            height="42"
                            width="42"
                            alt="Generic placeholder image"
                          />
                          <span class="avatar-status-offline"></span>
                        </span>
                        <div class="chat-info flex-grow-1">
                          <h5 class="mb-0">Elizabeth Elliott</h5>
                          <p class="card-text text-truncate">
                            Cake pie jelly jelly beans. Marzipan lemon drops
                            halvah cake. Pudding cookie lemon drops icing
                          </p>
                        </div>
                        <div class="chat-meta text-nowrap">
                          <span class="d-flex">
                            <small class="float-right mb-25 chat-time mr-2"
                              >1/3/21</small
                            >
                            <small class="float-right mb-25 chat-time"
                              >4:14 PM</small
                            >
                          </span>
                          <span
                            class="badge badge-danger badge-pill float-right"
                            >3</span
                          >
                        </div>
                      </li>
                      <li>
                        <span class="avatar"
                          ><img
                            src="@/assets/images/chat/avatar-s-3.jpg"
                            height="42"
                            width="42"
                            alt="Generic placeholder image"
                          />
                          <span class="avatar-status-busy"></span>
                        </span>
                        <div class="chat-info flex-grow-1">
                          <h5 class="mb-0">Kristopher Candy</h5>
                          <p class="card-text text-truncate">
                            Cake pie jelly jelly beans. Marzipan lemon drops
                            halvah cake. Pudding cookie lemon drops icing
                          </p>
                        </div>
                        <div class="chat-meta text-nowrap">
                          <span class="d-flex">
                            <small class="float-right mb-25 chat-time mr-2"
                              >1/3/21</small
                            >
                            <small class="float-right mb-25 chat-time"
                              >4:14 PM</small
                            >
                          </span>
                          <span
                            class="badge badge-danger badge-pill float-right"
                            >3</span
                          >
                        </div>
                      </li>
                      <li>
                        <span class="avatar"
                          ><img
                            src="@/assets/images/chat/avatar-s-3.jpg"
                            height="42"
                            width="42"
                            alt="Generic placeholder image"
                          />
                          <span class="avatar-status-away"></span>
                        </span>
                        <div class="chat-info flex-grow-1">
                          <h5 class="mb-0">Sarah Woods</h5>
                          <p class="card-text text-truncate">
                            Cake pie jelly jelly beans. Marzipan lemon drops
                            halvah cake. Pudding cookie lemon drops icing.
                          </p>
                        </div>
                        <div class="chat-meta text-nowrap">
                          <span class="d-flex">
                            <small class="float-right mb-25 chat-time mr-2"
                              >1/3/21</small
                            >
                            <small class="float-right mb-25 chat-time"
                              >4:14 PM</small
                            >
                          </span>
                          <span
                            class="badge badge-danger badge-pill float-right"
                            >3</span
                          >
                        </div>
                      </li>
                      <li>
                        <span class="avatar"
                          ><img
                            src="@/assets/images/chat/avatar-s-3.jpg"
                            height="42"
                            width="42"
                            alt="Generic placeholder image"
                          />
                          <span class="avatar-status-offline"></span>
                        </span>
                        <div class="chat-info flex-grow-1">
                          <h5 class="mb-0">Elizabeth Elliott</h5>
                          <p class="card-text text-truncate">
                            Cake pie jelly jelly beans. Marzipan lemon drops
                            halvah cake. Pudding cookie lemon drops icing
                          </p>
                        </div>
                        <div class="chat-meta text-nowrap">
                          <span class="d-flex">
                            <small class="float-right mb-25 chat-time mr-2"
                              >1/3/21</small
                            >
                            <small class="float-right mb-25 chat-time"
                              >4:14 PM</small
                            >
                          </span>
                          <span
                            class="badge badge-danger badge-pill float-right"
                            >3</span
                          >
                        </div>
                      </li>
                      <li>
                        <span class="avatar"
                          ><img
                            src="@/assets/images/chat/avatar-s-3.jpg"
                            height="42"
                            width="42"
                            alt="Generic placeholder image"
                          />
                          <span class="avatar-status-busy"></span>
                        </span>
                        <div class="chat-info flex-grow-1">
                          <h5 class="mb-0">Kristopher Candy</h5>
                          <p class="card-text text-truncate">
                            Cake pie jelly jelly beans. Marzipan lemon drops
                            halvah cake. Pudding cookie lemon drops icing
                          </p>
                        </div>
                        <div class="chat-meta text-nowrap">
                          <span class="d-flex">
                            <small class="float-right mb-25 chat-time mr-2"
                              >1/3/21</small
                            >
                            <small class="float-right mb-25 chat-time"
                              >4:14 PM</small
                            >
                          </span>
                          <span
                            class="badge badge-danger badge-pill float-right"
                            >3</span
                          >
                        </div>
                      </li>
                      <li>
                        <span class="avatar"
                          ><img
                            src="@/assets/images/chat/avatar-s-3.jpg"
                            height="42"
                            width="42"
                            alt="Generic placeholder image"
                          />
                          <span class="avatar-status-away"></span>
                        </span>
                        <div class="chat-info flex-grow-1">
                          <h5 class="mb-0">Sarah Woods</h5>
                          <p class="card-text text-truncate">
                            Cake pie jelly jelly beans. Marzipan lemon drops
                            halvah cake. Pudding cookie lemon drops icing.
                          </p>
                        </div>
                        <div class="chat-meta text-nowrap">
                          <span class="d-flex">
                            <small class="float-right mb-25 chat-time mr-2"
                              >1/3/21</small
                            >
                            <small class="float-right mb-25 chat-time"
                              >4:14 PM</small
                            >
                          </span>
                          <span
                            class="badge badge-danger badge-pill float-right"
                            >3</span
                          >
                        </div>
                      </li>
                      <li class="no-results">
                        <h6 class="mb-0">No Chats Found</h6>
                      </li>
                    </ul>
                  </div>
                </VuePerfectScrollbar>
              </client-only>
              <!-- Sidebar Users end -->
            </div>
            <!--/ Chat Sidebar area -->
          </div>
        </div>
        <div class="col-12 col-md-8 col-lg-8 content-right">
          <div class="content-wrapper">
            <div class="content-header row"></div>
            <div class="content-body">
              <div class="body-content-overlay"></div>
              <!-- Main chat area -->
              <section class="chat-app-window">
                <!-- To load Conversation -->
                <!-- <div class="start-chat-area">
                  <div class="mb-1 start-chat-icon">
                    <i data-feather="message-square"></i>
                  </div>
                  <h4 class="sidebar-toggle start-chat-text">
                    Start Conversation
                  </h4>
                </div> -->
                <!--/ To load Conversation -->

                <!-- Active Chat -->
                <div class="active-chat">
                  <!-- Chat Header -->
                  <div class="chat-navbar">
                    <header class="chat-header">
                      <div class="d-flex align-items-center flex-column">
                        <div class="sidebar-toggle d-block d-lg-none mr-1">
                          <i data-feather="menu" class="font-medium-5"></i>
                        </div>
                        <div class="d-flex align-items-center">
                          <div
                            class="avatar avatar-border user-profile-toggle m-0 mr-3"
                          >
                            <img
                              src="@/assets/images/chat/avatar-s-3.jpg"
                              alt="avatar"
                              height="56"
                              width="56"
                            />
                          </div>
                          <div class="avatar-detail">
                            <h6 class="mb-0">Kristopher Candy</h6>
                            <p class="comment-status">For better Living</p>
                            <div class="avatar-status">
                              <span
                                class="avatar-status-busy bg-primary"
                              ></span>
                              <span class="ml-3">Online</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </header>
                  </div>
                  <!--/ Chat Header -->

                  <!-- User Chat messages -->
                  <client-only>
                    <VuePerfectScrollbar
                      v-once
                      class="scroll-right-chat"
                      :settings="settings"
                      @ps-scroll-y="scrollHandle"
                    >
                      <div class="user-chats">
                        <div class="chats">
                          <div class="chat">
                            <div class="chat-avatar">
                              <span class="avatar box-shadow-1 cursor-pointer">
                                <img
                                  src="@/assets/images/chat/avatar-s-3.jpg"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </span>
                            </div>
                            <div class="chat-body">
                              <div class="chat-content">
                                <p>How can we help? We're here for you! 😄</p>
                              </div>
                            </div>
                          </div>
                          <div class="chat chat-left">
                            <div class="chat-avatar">
                              <span class="avatar box-shadow-1 cursor-pointer">
                                <img
                                  src="@/assets/images/chat/avatar-s-3.jpg"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </span>
                            </div>
                            <div class="chat-body">
                              <div class="chat-content">
                                <p>
                                  Hey John, I am looking for the best admin
                                  template.
                                </p>
                                <p>
                                  Could you please help me to find it out? 🤔
                                </p>
                              </div>
                              <div class="chat-content">
                                <p>It should be Bootstrap 4 compatible.</p>
                              </div>
                            </div>
                          </div>
                          <div class="divider">
                            <div class="divider-text">Yesterday</div>
                          </div>
                          <div class="chat">
                            <div class="chat-avatar">
                              <span class="avatar box-shadow-1 cursor-pointer">
                                <img
                                  src="@/assets/images/chat/avatar-s-3.jpg"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </span>
                            </div>
                            <div class="chat-body">
                              <div class="chat-content">
                                <p>Absolutely!</p>
                              </div>
                              <div class="chat-content">
                                <p>
                                  Vuexy admin is the responsive bootstrap 4
                                  admin template.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chat chat-left">
                            <div class="chat-avatar">
                              <span class="avatar box-shadow-1 cursor-pointer">
                                <img
                                  src="@/assets/images/chat/avatar-s-3.jpg"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </span>
                            </div>
                            <div class="chat-body">
                              <div class="chat-content">
                                <p>Looks clean and fresh UI. 😃</p>
                              </div>
                              <div class="chat-content">
                                <p>It's perfect for my next project.</p>
                              </div>
                              <div class="chat-content">
                                <p>How can I purchase it?</p>
                              </div>
                            </div>
                          </div>
                          <div class="chat">
                            <div class="chat-avatar">
                              <span class="avatar box-shadow-1 cursor-pointer">
                                <img
                                  src="@/assets/images/chat/avatar-s-3.jpg"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </span>
                            </div>
                            <div class="chat-body">
                              <div class="chat-content">
                                <p>Thanks, from ThemeForest.</p>
                              </div>
                            </div>
                          </div>
                          <div class="chat chat-left">
                            <div class="chat-avatar">
                              <span class="avatar box-shadow-1 cursor-pointer">
                                <img
                                  src="@/assets/images/chat/avatar-s-3.jpg"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </span>
                            </div>
                            <div class="chat-body">
                              <div class="chat-content">
                                <p>I will purchase it for sure. 👍</p>
                              </div>
                              <div class="chat-content">
                                <p>Thanks.</p>
                              </div>
                            </div>
                          </div>
                          <div class="chat">
                            <div class="chat-avatar">
                              <span class="avatar box-shadow-1 cursor-pointer">
                                <img
                                  src="@/assets/images/chat/avatar-s-3.jpg"
                                  alt="avatar"
                                  height="36"
                                  width="36"
                                />
                              </span>
                            </div>
                            <div class="chat-body">
                              <div class="chat-content">
                                <p>Great, Feel free to get in touch on</p>
                              </div>
                              <div class="chat-content">
                                <p>https://long-island.com/</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </VuePerfectScrollbar>
                  </client-only>
                  <!-- User Chat messages -->

                  <!-- Submit Chat form -->
                  <form
                    class="chat-app-form"
                    action="javascript:void(0);"
                    onsubmit="enterChat();"
                  >
                    <div class="input-group-merge form-send-message">
                      <span class="btn-gallery-select">
                        <span class="avatar box-shadow-1 cursor-pointer">
                          <img
                            src="@/assets/images/chat/avatar-s-3.jpg"
                            alt="avatar"
                            height="36"
                            width="36"
                          />
                        </span>
                      </span>
                      <input
                        type="text"
                        class="form-control message"
                        placeholder="Message here..."
                      />
                      <span class="btn-emoji">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="9"
                            stroke="#F36F56"
                            stroke-width="2"
                          />
                          <path
                            d="M7 12C7.5 13.5 9 14 10 14C11 14 12.5 13.5 13 12"
                            stroke="#F36F56"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <circle cx="7.5" cy="7.5" r="1.5" fill="#F36F56" />
                          <circle cx="12.5" cy="7.5" r="1.5" fill="#F36F56" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        class="btn btn-send"
                        @click="sendMessage"
                      >
                        <span class=""
                          ><svg
                            width="12"
                            height="16"
                            viewBox="0 0 12 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 1L6.70711 0.292893C6.31658 -0.0976312 5.68342 -0.0976312 5.29289 0.292893L6 1ZM10.2929 6.70711C10.6834 7.09763 11.3166 7.09763 11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289L10.2929 6.70711ZM0.292893 5.29289C-0.0976312 5.68342 -0.0976312 6.31658 0.292893 6.70711C0.683417 7.09763 1.31658 7.09763 1.70711 6.70711L0.292893 5.29289ZM5 15C5 15.5523 5.44772 16 6 16C6.55228 16 7 15.5523 7 15H5ZM5.29289 1.70711L10.2929 6.70711L11.7071 5.29289L6.70711 0.292893L5.29289 1.70711ZM5.29289 0.292893L0.292893 5.29289L1.70711 6.70711L6.70711 1.70711L5.29289 0.292893ZM5 1V8H7V1H5ZM5 8V15H7V8H5Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </form>
                  <!--/ Submit Chat form -->
                </div>
                <!--/ Active Chat -->
              </section>
              <!--/ Main chat area -->

              <!-- User Chat profile right area -->

              <!--/ User Chat profile right area -->
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>
<script>
import SearchBox from '../../components/core/SearchBox'
export default {
  components: {
    SearchBox,
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60,
      },
      socket: null,
    }
  },
  mounted() {
    this.initSocket()
  },
  methods: {
    initSocket() {
      this.socket = this.$nuxtSocket({
        name: 'chat',
        reconnection: true,
      })
      /* Listen for events: */
      this.socket.on('onServerMsg', (msg, cb) => {
        /* Handle event */
      })
    },
    scrollHandle(evt) {
      // console.log(evt)
    },
    sendMessage(msg) {
      this.socket.emit('onClientMsg', {
        user: 'this.user',
        msg: 'ms',
      })
    },
    getMessage() {
      this.socket.on('onServerMsg', (msg) => {
        console.log(msg)
      })
    },
  },
}
</script>
<style lang="scss">
.scroll-area,
.scroll-right-chat {
  position: relative;
  margin: auto;
  width: 100%;
}
.scroll-area {
  min-height: 525px;
  max-height: 530px;
}
.scroll-right-chat {
  min-height: 500px;
  max-height: 483px;
}
</style>
