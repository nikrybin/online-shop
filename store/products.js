export const state = () => ({
  products: [],
  sortOptions: [
    { key: 'price', title: 'По цене' },
    { key: 'rating', title: 'По популярности' },
  ],
  sortedBy: {
    key: 'rating',
    order: 'desc',
  },
})

export const getters = {
  getProducts: (state) => {
    return state.products
  },
  getSortOptions: (state) => {
    return state.sortOptions
  },
  getSortedBy: (state) => {
    return state.sortedBy
  },
}

export const actions = {
  async fetchProducts({ commit, dispatch, state }, category) {
    const products = await this.$axios.$get(`/api/product?category=${category}`)

    commit('setProducts', products)
    dispatch('sortProductsBy', state.sortedBy)
  },
  sortProductsBy: ({ commit, state }, { key, order }) => {
    const sortedProducts = [...state.products].sort((a, b) =>
      order === 'asc' ? a[key] - b[key] : b[key] - a[key]
    )
    commit('setProducts', sortedProducts)
    commit('setSortedBy', { key, order })
  },
}

export const mutations = {
  setProducts: (state, products) => {
    state.products = products
  },
  setSortedBy: (state, sortedBy) => {
    state.sortedBy = sortedBy
  },
}
