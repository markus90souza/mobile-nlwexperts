import { Header } from '@/components/header'
import React, { FC } from 'react'
import { View } from 'react-native'

const Home: FC = () => {
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça o seu pedido" />
    </View>
  )
}

export default Home
