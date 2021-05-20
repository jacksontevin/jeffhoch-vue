export default {
  methods: {
    getExtension(fileName) {
      return fileName.split('.').pop()
    },
  },
}
