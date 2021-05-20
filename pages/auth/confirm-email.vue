<template>
  <div class="confirm-mail-box w-75 mx-auto">
    <span class="confirm-mail-icon">
      <svg
        width="117"
        height="117"
        viewBox="0 0 117 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="58.5" cy="58.5" r="58.5" fill="#FFDCD5" />
        <path
          d="M101 62.1332V69.7509L59 88.1259L17 69.7509V62.1332C17 60.3377 17.9188 58.6682 19.4307 57.7022L57.6087 33.3999C58.4593 32.8697 59.5408 32.8697 60.3913 33.3999L98.5693 57.7022C100.081 58.6682 101 60.3377 101 62.1332Z"
          fill="#CA553F"
        />
        <path
          d="M85.25 33H32.75C29.8572 33 27.5 35.3572 27.5 38.25V96C27.5 97.449 28.676 98.625 30.125 98.625H87.875C89.324 98.625 90.5 97.449 90.5 96V38.25C90.5 35.3572 88.148 33 85.25 33Z"
          fill="#FAFAFA"
        />
        <path
          d="M101 69.75V111.75C101 114.638 98.6375 117 95.75 117H22.25C19.3625 117 17 114.638 17 111.75V69.75L59 88.125L101 69.75Z"
          fill="#F36F56"
        />
        <path
          d="M69.2838 49.664C68.2381 48.7631 66.6487 48.9333 65.8176 50.0353L57.9799 60.4277C56.8807 61.8851 54.7457 62.0313 53.4581 60.7373L50.6967 57.9621C49.83 57.0911 48.4202 57.0914 47.5539 57.9627C46.6943 58.8272 46.6943 60.2237 47.5539 61.0882L54.0054 67.5766C55.2825 68.861 57.3977 68.7294 58.5058 67.2968L69.614 52.9349C70.391 51.9302 70.2459 50.4931 69.2838 49.664Z"
          fill="#F36F56"
        />
      </svg>
    </span>
    <h1 class="mt-5 mb-3">Confirm Your Mail</h1>
    <p class="mb-3">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled
    </p>
    <!-- <nuxt-link to="/auth/user-type" class="btn btn-link"
      >Confirm Email</nuxt-link
    > -->
  </div>
</template>
<script>
export default {
  name: 'ConfirmEmail',
  layout: 'auth',
  data() {
    return {}
  },
}
</script>
<style></style>
