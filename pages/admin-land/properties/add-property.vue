<template>
  <add-edit-propertie :edit-mode="false" :is-admin="true" />
</template>
<script>
import addEditPropertie from '~/components/properties/addEditPropertie'
export default {
  name: 'AddPropertyAdmin',
  parent: 'AdminProperties',
  components: {
    addEditPropertie,
  },
  layout: 'admin',
}
</script>
