import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { copyToClipboard } from '../utils'
import Navbar from './Navbar'

type Props = { act: number; regex?: string; children: ReactNode }
const ActContainer = ({ act, regex, children }: Props) => {
  return (
    <>
      <Navbar act={act} />
      <div className="flex flex-col px-10 pb-10 pt-5 gap-2 w-full">
        {regex && (
          <div className="mb-2 flex items-center">
            Act {act} regex: <b className="ms-1">{regex}</b>
            <Button
              variant="ghost"
              className="ms-3 aspect-square p-0"
              onClick={() => copyToClipboard(regex)}
            >
              <i className="fa-regular fa-copy text-xl"></i>
            </Button>
          </div>
        )}
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
