<template>
  <Details :is-admin="true" />
</template>
<script>
import Details from '~/components/properties/details'
export default {
  name: 'PropertyDeatilsSeller',
  components: {
    Details,
  },
  layout: 'admin',
}
</script>
