interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className="px-4 py-2 bg-primary flex justify-center items-center gap-2 text-sm rounded-full outline-none">
      {children}
    </button>
  )
}

export default Button
