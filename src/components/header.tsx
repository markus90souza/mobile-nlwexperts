import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

type HeaderProps = {
  title: string
  cartQuantity?: number
}

export const Header: FC<HeaderProps> = ({ title, cartQuantity = 0 }) => {
  const handleToCart = () => {
    router.push('/cart')
  }

  return (
    <View className="flex-row mx-5 py-5 items-center justify-between border-b border-slate-700">
      <View className="flex-1">
        <Image
          className="h-6 w-32"
          alt="nlwexperts"
          source={require('@/assets/logo.png')}
        />
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      {cartQuantity > 0 && (
        <TouchableOpacity
          onPress={handleToCart}
          activeOpacity={0.7}
          className="relative"
        >
          <View className="top-2 -right-3.5 bg-lime-300 items-center justify-center w-4 h-4 rounded-full">
            <Text className="font-bold text-xs text-slate-900">
              {cartQuantity}
            </Text>
          </View>

          <Feather name="shopping-bag" color={colors.white} size={24} />
        </TouchableOpacity>
      )}
    </View>
  )
}
