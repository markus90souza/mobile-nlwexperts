import { Header } from '@/components/header'
import React, { FC, useRef, useState } from 'react'
import { FlatList, SectionList, Text, View } from 'react-native'
import { CATEGORIES, MENU } from '@/utils/data/products'
import { CategoryButton } from '@/components/category-button'
import { ProductCard } from '@/components/product-card'
import { Link } from 'expo-router'

const Home: FC = () => {
  const [category, setCategory] = useState(CATEGORIES[0])

  const sectionRef = useRef<SectionList>(null)

  const handleSelectCategatory = (categorySelected: string) => {
    setCategory(categorySelected)

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === categorySelected,
    )

    if (sectionRef.current) {
      sectionRef.current.scrollToLocation({
        itemIndex: 0,
        animated: true,
        sectionIndex,
      })
    }
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

      <SectionList
        ref={sectionRef}
        className="flex-1 px-5"
        sections={MENU}
        keyExtractor={(i) => i.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}` as any} asChild>
            <ProductCard data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-white font-heading mb-3 mt-8">
            {title}
          </Text>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  )
}

export default Home
