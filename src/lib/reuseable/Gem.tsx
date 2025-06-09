import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  type: 'blue' | 'green' | 'red'
}

const Gem = ({ children, type }: Props) => {
  return (
    <label className="flex items-start space-x-2 cursor-pointer w-full">
      <input type="checkbox" className="peer h-5 w-5 text-blue-600" />
      <div
        className={`flex flex-col gap-2 peer-checked:line-through peer-checked:text-gray-400 ${type === 'blue' ? 'text-blue-400' : type === 'green' ? 'text-green-400' : 'text-red-400'}`}
      >
        {children}
      </div>
    </label>
  )
}

export default Gem
