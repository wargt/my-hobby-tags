import Vue from 'vue'
import Vuex from 'vuex'
import { findItemFromArray } from '@/helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    friendTags: [ // теги друзей
      'Баскетбол',
      'Нарезка Photoshop/Fireworks макетов на скорость, в экстримельных условиях, на природе',
      'Бадминтон',
      'Регби',
      'Футбол'
    ],
    myTags: [ // мои теги
      'Хоккей',
      'Высокоточная вёрстка под старые версии Microsoft Internet Explorer, начиная с версии 5.01',
      'Игра на скрипке',
      'Фортепиано'
    ]
  },
  mutations: {
    addMyTag(state, tag) {
      state.myTags.unshift(tag)
    },
    deleteMyTag(state, index) {
      state.myTags.splice(index, 1)
    }
  },
  actions: {
    addMyTag({ state, commit }, tag) {
      const oldTag = findItemFromArray(state.myTags, tag)

      if (oldTag) {
        return true
      }

      return commit('addMyTag', tag)
    },

    deleteMyTag({ commit }, index) {
      return commit('deleteMyTag', index)
    },

    addFriendTag({ state, dispatch }, index) {
      const tag = state.friendTags[index]

      if (!tag) {
        return false
      }

      return dispatch('addMyTag', tag)
    }
  }
})
