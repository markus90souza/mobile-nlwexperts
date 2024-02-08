import { ProductProps } from '@/utils/data/products'
import { create } from 'zustand'
import * as CartInMenomy from './helpers/cart-in-memory'

export type ProductaCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductaCartProps[]
  add: (product: ProductProps) => void
}

export const useCartStore = create<StateProps>((set) => ({
  products: [],
  add: (product: ProductProps) =>
    set((state) => ({
      products: CartInMenomy.add(state.products, product),
    })),
}))
