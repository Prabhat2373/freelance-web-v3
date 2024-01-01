import { useEffect, useState, ReactNode } from "react"

interface HydrationWrapperProps {
  children: ReactNode
}

const HydrationWrapper: React.FC<HydrationWrapperProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? <>{children}</> : null
}

export default HydrationWrapper
