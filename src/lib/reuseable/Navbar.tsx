import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from '@tanstack/react-router'

type Props = { act?: number }
const Navbar = ({ act }: Props) => {
  return (
    <div className="px-10 py-3 w-full h-12 bg-gray-100 flex items-center justify-between">
      <Link to="/" className="text-lg">
        PoE Acts Checklist{act && ` - Act ${act}`}
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="cursor-pointer">
            Go to act <i className="fa-solid fa-chevron-down"></i>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <DropdownMenuItem className='p-0'>
                <Link
                  // @ts-ignore
                  to={`/act${i + 1}`}
                  className="w-full h-full px-2 py-1.5"
                >
                  Act {i + 1}
                </Link>
              </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Navbar
