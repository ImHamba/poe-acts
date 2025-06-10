import Navbar from '@/lib/reuseable/Navbar'
import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 px-10 pt-3 pb-10">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <span>
              {'> '}
              <Link
                // @ts-ignore
                to={`/act${i + 1}`}
                className="link"
              >
                Act {i + 1} checklist
              </Link>
            </span>
          ))}
      </div>
    </>
  ),
})
