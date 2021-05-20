<template>
  <json-viewer v-if="jsonData" :value="jsonData"></json-viewer>
</template>
<script>
import JsonViewer from 'vue-json-viewer/ssr'
import { ADMIN_FETCH_ERRORS_BY_ID } from '~/services/ENDPOINT'
import 'vue-json-viewer/style.css'
export default {
  components: {
    JsonViewer,
  },
  layout: 'admin',
  data() {
    return {
      jsonData: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getErrorById()
    })
  },
  methods: {
    async getErrorById() {
      try {
        this.loading = true
        const data = await ADMIN_FETCH_ERRORS_BY_ID(this.$route.params.id)
        this.jsonData = data.error
        this.jsonData.payload = this.isValidJson(data.error.payload)
        this.jsonData.error = this.isValidJson(data.error.error)
      } catch ({ data }) {
        console.log(data)
      } finally {
        this.loading = false
      }
    },
    isValidJson(data) {
      try {
        return JSON.parse(data)
      } catch {
        return {}
      }
    },
  },
}
</script>
