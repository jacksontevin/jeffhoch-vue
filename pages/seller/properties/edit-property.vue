<template>
  <add-edit-propertie :edit-mode="true" :is-admin="false" />
</template>
<script>
import addEditPropertie from '~/components/properties/addEditPropertie'
export default {
  name: 'EditPropertySeller',
  components: {
    addEditPropertie,
  },
  layout: 'seller',
}
</script>
