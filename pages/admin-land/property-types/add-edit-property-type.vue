<template>
  <b-modal
    v-model="showModal"
    centered
    :title="
      propertyTypeInfo._id ? `Edit Property Type` : 'Add New Property Type'
    "
    @ok="saveData"
    @change="$emit('close')"
  >
    <b-form-group label="Send User Mail">
      <b-form-input
        v-model="propertyTypeInfo.name"
        v-validate="'required|min:2|max:40'"
        placeholder="Enter Property Type"
        :class="{ invalid: errors.first('Name') }"
        name="Name"
      ></b-form-input>
      <b-form-text class="error-msg">{{ errors.first('Name') }}</b-form-text>
      <b-form-checkbox
        v-model="propertyTypeInfo.isActive"
        class="pt-3"
        :value="true"
        :unchecked-value="false"
        size="md"
      >
        Resovled
      </b-form-checkbox>
    </b-form-group>
    <template #modal-footer="{ ok, cancel }">
      <b-button size="sm" variant="danger" @click="cancel()"> Cancel </b-button>
      <b-button size="sm" variant="success" @click="ok()"> Save Data </b-button>
    </template>
  </b-modal>
</template>
<script>
import _ from 'lodash'
import { ADMIN_SAVE_CATEGORY, ADMIN_UPDATE_CATEGORY } from '~/services/ENDPOINT'
export default {
  name: 'AddEditPropertyType',
  $_veeValidate: {
    validator: 'new',
  },
  props: {
    showAddEditComponents: {
      type: Boolean,
      default: false,
      required: true,
    },
    addEditData: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data() {
    return {
      propertyTypeInfo: _.cloneDeep(this.addEditData),
      showModal: this.showAddEditComponents,
    }
  },
  methods: {
    saveData(bvModalEvt) {
      bvModalEvt.preventDefault()
      // eslint-disable-next-line require-await
      this.$validator.validate().then(async (isValid) => {
        if (isValid) {
          try {
            this.$nextTick(() => this.$nuxt.$loading.start())
            let result = null
            if (this.propertyTypeInfo._id) {
              result = await ADMIN_UPDATE_CATEGORY(this.propertyTypeInfo)
            } else {
              result = await ADMIN_SAVE_CATEGORY(this.propertyTypeInfo)
            }
            this.$toast.success(result.message)
            this.$emit('success', result.data)
          } catch ({ data }) {
            this.$toast.error(data.message)
          } finally {
            this.$nextTick(() => this.$nuxt.$loading.finish())
          }
        }
      })
    },
  },
}
</script>
