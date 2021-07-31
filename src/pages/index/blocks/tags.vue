<template lang="html">
  <div class="tags__list">
    <ul class="tags__ul">
      <li
        v-for="(tag, index) in tags"
        :key="tag"
        class="tags__li">
        <img
          class="action__icon"
          v-if="makeDelete"
          src="~@/assets/img/close.png"
          @click="$emit('delete', index)"
        />
        <img
          class="action__icon"
          v-if="makeAdd && !added(tag)"
          src="~@/assets/img/add.gif"
          @click="$emit('add', index)"
        />

        <div class="flex__block">
          <div class="flex-item">
            <vText class="text-1" :text="tag" />

            <div class="added__tag" v-if="makeAdd && added(tag)">
              <img src="~@/assets/img/ok.png" />
              добавлено в ваши увлечения
            </div>

          </div>
          <a href="mailto:support@myhobbytags.com" v-if="makeAdd" class="warn__wpr">
            <img src="~@/assets/img/warn.png" />
            <vText class="warn__text" text="пожаловаться" />
          </a>
        </div>
      </li>
    </ul>

    <!--показать все интересы-->
    <span
      v-if="!showAll && this.items.length > this.limit"
      class="list__toggle"
      @click="showAll = true"
    >
      <vText :text="otherCountText" />
    </span>

    <!--Скрыть все интересы-->
    <span
      v-if="showAll && this.items.length > this.limit"
      class="list__toggle"
      @click="showAll = false"
    >
      <vText :text="hideCountText" />
    </span>
  </div>
</template>

<script>
import vText from '@/components/text'
import { declOfNum } from '@/helpers'

export default {
  name: 'Tags',
  components: {
    vText
  },
  props: {
    // возможность удалить
    makeDelete: {
      type: Boolean,
      default: false
    },
    // возможность добавить
    makeAdd: {
      type: Boolean,
      default: false
    },
    // теги
    items: {
      type: Array,
      default: () => []
    },
    // тег добавлен
    addedTagFn: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      showAll: false,
      limit: 2
    }
  },
  computed: {
    tags() {
      if (this.showAll) {
        return this.items
      }

      return this.items.slice().splice(0, this.limit)
    },
    otherCountText() {
      const count = this.items.length - this.limit
      return `еще ${count} ${declOfNum(count, ['интерес', 'интереса', 'интересов'])}`
    },
    hideCountText() {
      return `оставить ${this.limit} ${declOfNum(this.limit, ['интерес', 'интереса', 'интересов'])}`
    }
  },
  methods: {
    added(tag) {
      if (typeof this.addedTagFn !== 'function') {
        return false
      }

      return this.addedTagFn(tag)
    }
  }
}
</script>

<style lang="sass" scoped>
  .tags__list
    position: relative

  .tags__ul
    list-style-type: none
    margin: 0
    padding: 0
    position: relative

  .tags__li
    position: relative
    padding-left: 20px

  .tags__li + .tags__li
    margin-top: 7px

  .list__toggle
    margin-top: 7px
    margin-left: 20px
    display: inline-block
    color: #f1722c
    border-bottom: 1px solid
    border-color: inherit

  .list__toggle:hover
    cursor: pointer
    border-color: transparent

  .action__icon
    position: absolute
    left: 2px
    top: 4px
    display: none

  .tags__li:hover .action__icon
    display: block
    cursor: pointer
    opacity: 0.8
    transition: opacity 0.2s, transform 0.2s

  .action__icon:hover
    opacity: 1 !important
    transform: scale(1.1)

  .added__tag
    color: green
    white-space: nowrap
    display: inline-block
    font-size: 13px
    white-space: nowrap
    padding-left: 20px
    position: relative
    float: left

  .added__tag img
    position: absolute
    left: 0
    top: 1px

  .flex__block
    display: flex
    flex: 1

  .flex-item
    flex: 1
    overflow: hidden
    padding: 2px 0
    position: relative

  .warn__wpr
    flex: 0
    padding: 2px 0
    margin-left: 15px
    position: relative
    padding-left: 15px
    opacity: 0.8
    transition: opacity 0.2s
    display: none
    text-decoration: none
    color: inherit

  .warn__wpr:hover
    opacity: 1
    cursor: pointer

  .warn__wpr img
    position: absolute
    left: 0
    top: 6px

  .tags__li:hover .warn__wpr
    display: block

  .text-1
    float: left
    white-space: nowrap
    overflow: hidden
    display: inline-block
    margin-right: 10px

  .flex-item:after
    content: ''
    position: absolute
    z-index: 2
    top: 0
    right: 0
    bottom: 0
    width: 35px
    background: url('~@/assets/img/fader.png') repeat-y
    background-position: right
    background-size: 100%

  .warn__text
    font-size: 14px
</style>
