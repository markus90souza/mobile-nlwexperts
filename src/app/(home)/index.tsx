import { Header } from '@/components/header'
import React, { FC, useState } from 'react'
import { FlatList, View } from 'react-native'
import { CATEGORIES } from '@/utils/data/products'
import { CategoryButton } from '@/components/category-button'

const Home: FC = () => {
  const [category, setCategory] = useState(CATEGORIES[0])

  const handleSelectCategatory = (category: string) => {
    setCategory(category)
  }
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça o seu pedido" />

      <FlatList
        keyExtractor={(i) => i}
        horizontal
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleSelectCategatory(item)}
          />
        )}
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  )
}

export default Home
