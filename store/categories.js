export const state = () => ({
  categories: [],
})

export const getters = {
  getCategories: (state) => {
    return state.categories
  },
}

export const actions = {
  async fetchCategories({ commit }) {
    const categories = await this.$axios.$get('/api/product-category')

    commit('setCategories', categories)
  },
}

export const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories
  },
}
