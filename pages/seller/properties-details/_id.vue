<template>
  <Details :is-admin="false" />
</template>
<script>
import Details from '~/components/properties/details'
export default {
  name: 'PropertyDeatilsSeller',
  components: {
    Details,
  },
  layout: 'seller',
}
</script>
