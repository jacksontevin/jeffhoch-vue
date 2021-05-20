<template>
  <add-edit-propertie :edit-mode="true" :is-admin="true" />
</template>
<script>
import addEditPropertie from '~/components/properties/addEditPropertie'
export default {
  name: 'EditPropertyAdmin',
  components: {
    addEditPropertie,
  },
  layout: 'admin',
}
</script>
