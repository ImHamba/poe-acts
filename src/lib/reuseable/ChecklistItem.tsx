import type { ReactNode } from 'react'

type Props = { children: ReactNode }
const ChecklistItem = ({ children }: Props) => {
  return (
    <label className="flex items-start space-x-2 cursor-pointer w-full">
      <input type="checkbox" className="peer h-5 w-5 text-blue-600" />
      <div className="flex flex-col gap-2 peer-checked:line-through peer-checked:text-gray-400">
        {children}
      </div>
    </label>
  )
}

export default ChecklistItem
