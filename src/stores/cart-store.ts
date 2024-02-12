import { ProductProps } from '@/utils/data/products'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import * as CartInMenomy from './helpers/cart-in-memory'

import AsyncStorage from '@react-native-async-storage/async-storage'

export type ProductaCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductaCartProps[]
  add: (product: ProductProps) => void
  remove: (productId: string) => void
  clear: () => void
}

export const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],

      add: (product: ProductProps) =>
        set((state) => ({
          products: CartInMenomy.add(state.products, product),
        })),

      remove: (productId: string) =>
        set((state) => ({
          products: CartInMenomy.remove(state.products, productId),
        })),

      clear: () => set(() => ({ products: [] })),
    }),
    {
      name: '@nlwexperts:cart',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
