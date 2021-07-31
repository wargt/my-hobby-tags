<template lang="html">
  <div class="index__page">

    <!--Блок моих тегов-->
    <div class="my__tags__wrp">
      <vText text="О себе" border="bottom" size="l" bold />
      <vText text="Хобби" border="center" class="group__title" />

      <div class="tags__block">
        <InputForm
          class="tags__input"
          placeholder="Введите текст"
          name="tags-input"
          v-model="inputValue"
          @enter="onEnterInput"
        />

        <Tags
          class="tags__list"
          :items="myTags"
          :makeDelete="true"
          @delete="deleteMyTag"
        />
      </div>
    </div>

    <!--Блок тегов друзей-->
    <div class="friend__block">
      <vText text="Интересы друга" border="bottom" size="l" bold />
      <vText text="Хобби" border="center" class="group__title" />

      <div class="tags__block">
        <Tags
          class="tags__list"
          :items="friendTags"
          :makeAdd="true"
          @add="addFriendTag"
          :addedTagFn="addedTagFn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { findItemFromArray } from '@/helpers'
import vText from '@/components/text'
import InputForm from '@/components/form/input-form'
import Tags from './blocks/tags'

export default {
  name: 'IndexPage',
  components: {
    vText,
    InputForm,
    Tags
  },
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    ...mapState(['friendTags', 'myTags'])
  },
  methods: {
    ...mapActions(['addMyTag', 'deleteMyTag', 'addFriendTag']),

    onEnterInput(e) {
      let { value } = e.target
      value = String(value).trim()

      if (value) {
        this.addMyTag(value)
      }

      this.inputValue = ''
    },

    addedTagFn(tag) {
      return !!findItemFromArray(this.myTags, tag)
    }
  }
}
</script>

<style lang="sass" scoped>
  .index__page
    margin-top: 20px
    max-width: 600px
    padding: 10px

  .group__title
    opacity: 0.9
    margin-top: 24px

  .tags__block
    padding-top: 24px
    overflow: hidden
    position: relative

  .tags__input
    max-width: 220px
    padding-bottom: 15px
    padding-left: 20px

  .friend__block
    margin-top: 34px
</style>
