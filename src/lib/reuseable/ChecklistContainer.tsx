import type { ReactNode } from 'react'

type Props = { children: ReactNode }
const ChecklistContainer = ({ children }: Props) => {
  return <div className="flex flex-col p-10 gap-2 w-full">{children}</div>
}

export default ChecklistContainer
