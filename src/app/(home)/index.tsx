import { Header, Category, ProductCard } from '@/components'
import { FC, useRef, useState } from 'react'
import { FlatList, SectionList, Text, View } from 'react-native'
import { CATEGORIES, MENU, ProductProps } from '@/utils/data/products'

import { Link } from 'expo-router'
import { useCartStore } from '@/stores/cart-store'

const Home: FC = () => {
  const [category, setCategory] = useState(CATEGORIES[0])

  const sectionRef = useRef<SectionList<ProductProps>>(null)

  const cartStore = useCartStore()

  const cartQuantity = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0,
  )

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
      <Header title="Faça o seu pedido" cartQuantity={cartQuantity} />

      <FlatList
        keyExtractor={(i) => i}
        horizontal
        data={CATEGORIES}
        renderItem={({ item }) => (
          <Category
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
          <Link href={`/product/${item.id}`} asChild>
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
