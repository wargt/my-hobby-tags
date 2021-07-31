<template lang="html">
  <div>
    <input
      class="input-form"
      type="text"
      :placeholder="placeholder"
      :name="name"
      v-model="oValue"
      @input="onChangeValue"
      @keyup.enter="$emit('enter', arguments[0])"
    />
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  props: {
    placeholder: String,
    name: String,
    value: String
  },
  data() {
    return {
      oValue: this.value
    }
  },
  methods: {
    onChangeValue(e) {
      const { value } = e.target
      this.$emit('input', value)
    }
  },
  watch: {
    value(value) {
      this.oValue = value
    }
  }
}
</script>

<style lang="sass" scoped>
  .input-form
    border: 1px solid rgba(0,0,0, .3)
    border-radius: 5px
    font-family: inherit
    font-size: 14px
    padding: 4px 6px
    width: 100%
    box-sizing: border-box

  .input-form::placeholder
    color: rgba(0,0,0, .5)
</style>
