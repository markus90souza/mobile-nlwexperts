import { Header } from '@/components'
import { ProductCard } from '@/components/product-card'
import { useCartStore } from '@/stores/cart-store'
import { formatCurrency } from '@/utils/format-currency'
import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { View, Text, ScrollView } from 'react-native'

import colors from 'tailwindcss/colors'

const Cart: FC = () => {
  const { products } = useCartStore()

  const total = formatCurrency(
    products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    ),
  )
  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />

      <ScrollView>
        {products.length > 0 ? (
          <View className="p-5 flex-1">
            {products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </View>
        ) : (
          <View className="p-5 flex-1 items-center justify-center">
            <Feather color={colors.slate[800]} name="shopping-cart" size={44} />
            <Text className="font-bold  leading-tight text-2xl text-slate-400 my-8 text-center">
              Não há produtos em seu carrinho
            </Text>
          </View>
        )}

        <View className="flex-row items-center gap-2 mt-5 mb-4">
          <Text className="text-white text-xl font-subtitle">Total:</Text>
          <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Cart
