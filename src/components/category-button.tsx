import React, { FC } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'
import { clsx } from 'clsx'
type CategoryButtonProps = PressableProps & {
  title: string
  isSelected?: boolean
}

export const CategoryButton: FC<CategoryButtonProps> = ({
  isSelected,
  title,
  ...rest
}) => {
  return (
    <Pressable
      className={clsx(
        'bg-slate-600 h-10 rounded-md px-4 justify-center',
        isSelected && 'border-2 border-lime-300 bg-transparent',
      )}
      {...rest}
    >
      <Text
        className={clsx(
          'text-sm font-subtitle',
          isSelected ? 'text-white' : 'text-slate-100',
        )}
      >
        {title}
      </Text>
    </Pressable>
  )
}
