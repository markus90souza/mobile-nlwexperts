import { FC } from 'react'
import { ActivityIndicator, View } from 'react-native'

import colors from 'tailwindcss/colors'
export const Loading: FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-slate-900">
      <ActivityIndicator color={colors.white} />
    </View>
  )
}
