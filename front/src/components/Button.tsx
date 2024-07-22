import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      className={cn(
        'px-4 py-2 bg-primary flex justify-center items-center gap-2 text-sm rounded-full outline-none',
        props.className
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
