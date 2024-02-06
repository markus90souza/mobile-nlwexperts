import React, { ReactNode, FC } from 'react'
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode
}

type ButtonTitleProps = TextProps & {
  children: ReactNode
}

type ButtonIconProps = {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="h-12 justify-center items-center rounded-md flex-row bg-lime-400"
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}

const ButtonTitle: FC<ButtonTitleProps> = ({ children, ...rest }) => {
  return (
    <Text className="font-heading text-black text-base mx-2" {...rest}>
      {children}
    </Text>
  )
}

const ButtonIcon: FC<ButtonIconProps> = ({ children }) => {
  return children
}

Button.Title = ButtonTitle
Button.Icon = ButtonIcon

export { Button }
