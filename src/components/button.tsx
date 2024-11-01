import clsx from "clsx";
import { ComponentProps } from "react";
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'px-5 py-2.5 w-fit rounded font-bold hover:opacity-90 hover:transition-opacity mt-5',
  variants: {
    variant: {
      primary: 'text-white bg-red-layout',
      secondary: 'text-red-layout font-black uppercase bg-beige'
    },
    size: {
      default: 'md:text-xl',
      sm: 'text-base'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default'
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {}

export function Button(props: ButtonProps) {
  const { className, ...rest } = props

  return (
    <button {...rest} className={clsx(buttonVariants({ variant: props.variant, size: props.size }), className)} />
  )
}