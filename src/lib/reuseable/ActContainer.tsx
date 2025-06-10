import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

type Props = { act: number; children: ReactNode }
const ActContainer = ({ act, children }: Props) => {
  return (
    <>
      <div className="px-10 py-3 w-full h-12 bg-gray-100 flex items-center text-lg">
        Path of Exile Acts Checklist
      </div>
      <div className="flex flex-col px-10 pb-10 pt-5 gap-2 w-full">
        {children}
        <div className="flex justify-between">
          {act > 1 ? (
            // @ts-ignore
            <Link to={`/act${act - 1}`}>« Act {act - 1}</Link>
          ) : (
            <div />
          )}
          {act < 10 ? (
            // @ts-ignore
            <Link to={`/act${act + 1}`}>Act {act + 1} »</Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </>
  )
}

export default ActContainer
