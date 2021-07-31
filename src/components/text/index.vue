<template lang="html">
  <div class="text__block" :class="dynamicClass">
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'BlockTitle',
  props: {
    text: {
      type: String,
      required: true
    },
    border: {
      type: String,
      default: '',
      validator: value => ['', 'bottom', 'center'].indexOf(value) !== -1
    },
    size: {
      type: String,
      default: 's',
      validator: value => ['s', 'm', 'l'].indexOf(value) !== -1
    },
    bold: {
      type: Boolean
    }
  },
  computed: {
    dynamicClass() {
      const result = []

      if (this.border) {
        result.push(`${this.border}__border`)
      }

      if (this.size) {
        result.push(`${this.size}__size`)
      }

      if (this.bold) {
        result.push('bold')
      }

      return result
    }
  }
}
</script>

<style lang="sass" scoped>
  .text__block
    font-size: 14px
    &.bold
      font-weight: bold

  .text__block.bottom__border
    border-bottom: 2px solid
    border-color: inherit

  .text__block.center__border
    position: relative
    overflow: hidden
    padding-right: 10px

  .text__block.center__border span
    padding-right: 14px

  .text__block.center__border:after
    position: absolute
    color: inherit
    top: -2px
    content: '\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026\2026'

  .text__block.m__size
    padding: 2px 0
    font-size: 16px

  .text__block.l__size
    padding: 3px 0
    font-size: 18px
</style>
