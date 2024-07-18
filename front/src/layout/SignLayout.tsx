interface SignLayoutProps {
  children?: React.ReactNode
}

const SignLayout: React.FC<SignLayoutProps> = ({ children }) => {
  return <section>{children}</section>
}

export default SignLayout
