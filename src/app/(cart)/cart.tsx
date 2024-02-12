import { Header, ProductCard, Input, Button, LinkButton } from '@/components'

import { ProductaCartProps, useCartStore } from '@/stores/cart-store'
import { formatCurrency } from '@/utils/format-currency'
import { Feather } from '@expo/vector-icons'
import { FC, useState } from 'react'
import { View, Text, ScrollView, Alert, Linking } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { EmptyCart } from './components/empty-cart'
import { useNavigation } from 'expo-router'

const PHONE_NUMBER = 'seunumero'

const Cart: FC = () => {
  const { goBack } = useNavigation()
  const { products, remove, clear } = useCartStore()

  const [address, setAddress] = useState('')
  const total = formatCurrency(
    products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    ),
  )

  const handleRemoveProduct = (product: ProductaCartProps) => {
    Alert.alert('Remover', `Deseja remover ${product.title} do carrinho ?`, [
      { text: 'Remover', onPress: () => remove(product.id) },
      { text: 'Cancelar' },
    ])
  }

  const handleOrder = () => {
    if (address.trim().length === 0) {
      return Alert.alert('Pedido', 'Informe os dados pra entrega')
    }

    const order = products
      .map((product) => `\n ${product.quantity} - ${product.title}`)
      .join('')

    const message = `
    NOVO PEDIDO:\n ENDEREÇO DE ENTREGA:${address}\n ${order} 
    \n VALOR TOTAL: ${total}`

    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`,
    )

    clear()
    goBack()
  }
  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />

      <KeyboardAwareScrollView
        extraHeight={100}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView className="flex-1">
          <View className="p-5 flex-1">
            {products.length > 0 ? (
              <View className="border-b border-slate-700">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    data={product}
                    onPress={() => handleRemoveProduct(product)}
                  />
                ))}
              </View>
            ) : (
              <EmptyCart />
            )}

            {products.length > 0 && (
              <View>
                <View className="flex-row items-center gap-2 mt-5 mb-4">
                  <Text className="text-white text-xl font-subtitle">
                    Total:
                  </Text>
                  <Text className="text-lime-400 text-2xl font-heading">
                    {total}
                  </Text>
                </View>
                <Input
                  onChangeText={setAddress}
                  onSubmitEditing={handleOrder}
                  blurOnSubmit={true}
                  returnKeyType="next"
                  placeholder="Informe o endereço de entrga com Rua, Bairro, CEP, Número e Complemento"
                />
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="p-5 gap-3">
        {products.length > 0 && (
          <Button onPress={handleOrder}>
            <Button.Title>Enviar pedido</Button.Title>
            <Button.Icon>
              <Feather name="arrow-right-circle" size={20} />
            </Button.Icon>
          </Button>
        )}

        <LinkButton href="/" title="Voltar ao Cardápio" />
      </View>
    </View>
  )
}

export default Cart
