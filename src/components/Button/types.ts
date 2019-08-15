export interface ButtonProps {
  className?: string
  primary?: boolean
  secondary?: boolean
  thirdary?: boolean
  neutral?: boolean
  error?: boolean
  red?: boolean
  danger?: boolean
  hover?: {
    [themeType: string]: string
  }
  small?: boolean
  medium?: boolean
  large?: boolean
  xlarge?: boolean
  size?: boolean
  disabled?: boolean
  outlined?: boolean
  to?: string
  textColor?: string
  background?: string
  overwriteClassName?: boolean
  overWrittenClassNames?: string
  centerOnSmall?: boolean
}
