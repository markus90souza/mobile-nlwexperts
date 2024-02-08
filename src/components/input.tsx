import { FC } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import colors from 'tailwindcss/colors'

type InputProps = TextInputProps

export const Input: FC<InputProps> = ({ ...rest }) => {
  return (
    <TextInput
      className="bg-slate-800 h-32 rounded-md px-4 py-3 text-sm text-white font-body"
      placeholderTextColor={colors.slate[400]}
      multiline
      textAlignVertical="top"
      {...rest}
    />
  )
}
