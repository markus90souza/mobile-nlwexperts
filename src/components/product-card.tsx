/* eslint-disable react/display-name */
import { Link } from 'expo-router'
import React, { FC, forwardRef } from 'react'
import {
  Image,
  ImageProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from 'react-native'

type ProductData = {
  title: string
  description: string
  thumbnail: ImageProps
}

type ProductCardProps = TouchableOpacityProps & {
  data: ProductData
}

export const ProductCard = forwardRef<TouchableOpacity, ProductCardProps>(
  ({ data, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className="flex-row justify-between gap-3 items-center w-full pb-4"
        {...rest}
      >
        <View>
          <Image
            alt={data.title}
            source={data.thumbnail}
            className="w-20 h-20 rounded-md"
          />
        </View>

        <View className="flex-1">
          <Text className="flex-1 text-base text-slate-100 font-subtitle">
            {data.title}
          </Text>

          <Text className="text-slate-400 text-xs leading-5 mt-0.5">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    )
  },
)
