import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import Navbar from './Navbar'

type Props = { act: number; children: ReactNode }
const ActContainer = ({ act, children }: Props) => {
  return (
    <>
      <Navbar act={act} />
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
