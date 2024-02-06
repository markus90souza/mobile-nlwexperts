import { Link, LinkProps } from 'expo-router'
import { FC } from 'react'
import { View } from 'react-native'

type LinkButtonProps = LinkProps<string> & {
  title: string
}
export const LinkButton: FC<LinkButtonProps> = ({ title, ...rest }) => {
  return (
    <Link className="text-slate-300 font-body text-center text-base" {...rest}>
      {title}
    </Link>
  )
}
