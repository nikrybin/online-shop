export const state = () => ({
  items: [],
  open: false,
  successfulRequest: false,
})

export const getters = {
  getItemsInCart: (state) => {
    return state.items
  },
  getItemsCountInCart: (state) => {
    return state.items.length
  },
  isCartOpen: (state) => {
    return state.open
  },
  isRequestSuccessful: (state) => {
    return state.successfulRequest
  },
}

export const actions = {
  addToCart: ({ commit }, newItem) => {
    commit('setItem', newItem)
  },
  removeFromCart: ({ commit }, oldItem) => {
    commit('removeItem', oldItem)
  },
  toggleCart: ({ commit }) => {
    commit('toggleCart')
  },
  sendRequest: ({ commit }) => {
    commit('setSuccess')
  },
  clearCart: ({ commit }) => {
    commit('clearCart')
  },
  fetchCart: ({ commit }) => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      commit('setItems', JSON.parse(cart))
    }
  },
  resetCart: ({ commit }) => {
    commit('resetSeccussfulRequest')
  },
}

export const mutations = {
  setItem: (state, newItem) => {
    state.items = [...state.items, newItem]
    setToLocalStorage(state.items)
  },
  setItems: (state, items) => {
    state.items = items
  },
  removeItem: (state, oldItem) => {
    state.items = state.items.filter((item) => item.id !== oldItem.id)
    setToLocalStorage(state.items)
  },
  toggleCart: (state) => {
    state.open = !state.open
  },
  setSuccess: (state) => {
    state.successfulRequest = true
  },
  clearCart: (state) => {
    state.items = []
    setToLocalStorage(state.items)
  },
  resetSeccussfulRequest: (state) => {
    state.successfulRequest = false
  },
}

const setToLocalStorage = (items) => {
  localStorage.setItem('cart', JSON.stringify(items))
}
