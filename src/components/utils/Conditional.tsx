import React, { ReactNode, Children } from "react"

interface SwitchProps {
  children: ReactNode
}

interface CaseProps {
  children: ReactNode
  condition: boolean
}

interface DefaultProps {
  children: ReactNode
}

const Switch: React.FC<SwitchProps> = ({ children }) => {
  let matchChild: ReactNode | null = null
  let defaultCase: ReactNode | null = null

  Children.forEach(children, (child) => {
    if (matchChild && React.isValidElement(child) && child.type === Case) {
      const { condition } = child.props as CaseProps
      const conditionalResult = Boolean(condition)
      if (conditionalResult) {
        matchChild = child
      }
    } else if (
      !defaultCase &&
      React.isValidElement(child) &&
      child.type === Default
    ) {
      defaultCase = child
    }
  })

  return matchChild || defaultCase || null
}

const Case: React.FC<CaseProps> = ({ children }) => {
  return <>{children}</>
}

const Default: React.FC<DefaultProps> = ({ children }) => {
  return <>{children}</>
}

export { Switch, Case, Default }
