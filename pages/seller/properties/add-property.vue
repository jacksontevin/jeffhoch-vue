<template>
  <add-edit-propertie :edit-mode="false" :is-admin="false" />
</template>
<script>
import addEditPropertie from '~/components/properties/addEditPropertie'

export default {
  name: 'SellerPropertyAdd',
  components: {
    addEditPropertie,
  },
  layout: 'seller',
}
</script>
