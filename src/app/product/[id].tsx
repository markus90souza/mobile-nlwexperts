import { Button } from '@/components/button'
import { LinkButton } from '@/components/link-button'
import { PRODUCTS } from '@/utils/data/products'
import { formatCurrency } from '@/utils/format-currency'
import { Feather } from '@expo/vector-icons'
import { useLocalSearchParams } from 'expo-router'
import { FC } from 'react'
import { Image, View, Text } from 'react-native'

const ProductDetails: FC = () => {
  const { id } = useLocalSearchParams()

  const product = PRODUCTS.filter((p) => p.id === id)[0]
  return (
    <View className="flex-1">
      <View className="">
        <Image
          alt={product.title}
          resizeMode="contain"
          className="w-full h-60"
          source={product.cover}
        />
      </View>

      <View className="flex-1 mb-8 p-5">
        <Text className="text-lime-300 text-2xl font-heading">
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 mb-6 leading-6 text-base font-body">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient, index) => (
          <Text
            className="text-slate-400 leading-6 text-base font-body"
            key={index}
          >
            {'\u2022'}
            {ingredient}
          </Text>
        ))}

        <View className="pb-8 pt-5 gap-3">
          <Button>
            <Button.Icon>
              <Feather name="plus-circle" size={20} />
            </Button.Icon>

            <Button.Title>Adicionar ao carrinho</Button.Title>
          </Button>
        </View>

        <LinkButton href="/" title="Voltar ao cardapio" />
      </View>
    </View>
  )
}

export default ProductDetails
