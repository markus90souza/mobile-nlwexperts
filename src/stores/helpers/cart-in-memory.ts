import { ProductProps } from '@/utils/data/products'
import { ProductaCartProps } from '../cart-store'

export const add = (
  products: ProductaCartProps[],
  newProduct: ProductProps,
) => {
  const existProduct = products.find(({ id }) => newProduct.id === id)

  if (existProduct) {
    return products.map((product) =>
      product.id === existProduct.id
        ? {
            ...product,
            quantity: product.quantity + 1,
          }
        : product,
    )
  }

  return [...products, { ...newProduct, quantity: 1 }]
}

export const remove = (
  products: ProductaCartProps[],
  productRemoveId: string,
) => {
  const updateProducts = products.map((product) =>
    product.id === productRemoveId
      ? {
          ...product,
          quantity: product.quantity > 1 ? product.quantity - 1 : 0,
        }
      : product,
  )

  return updateProducts.filter((product) => product.quantity > 0)
}
