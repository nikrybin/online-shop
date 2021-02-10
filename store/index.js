export const actions = {
  nuxtServerInit: async ({ dispatch }, { route, redirect }) => {
    const { category } = route.params

    if (!parseInt(category) || parseInt(category) > 3) {
      redirect(301, '/category/1')
    } else {
      await dispatch('products/fetchProducts', category)
      await dispatch('categories/fetchCategories')
    }
  },
}
