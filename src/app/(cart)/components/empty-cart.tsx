import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { View, Text } from 'react-native'
import colors from 'tailwindcss/colors'

export const EmptyCart: FC = () => {
  return (
    <View className="p-5 flex-1 items-center justify-center">
      <Feather color={colors.slate[800]} name="shopping-cart" size={44} />
      <Text className="font-bold  leading-tight text-2xl text-slate-400 my-8 text-center">
        Não há produtos em seu carrinho
      </Text>
    </View>
  )
}
