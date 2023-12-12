import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const page = () => {
  return (
    <div>
        <nav className='border-b' style={{ backgroundColor: 'rgb(3, 83, 82)' }}>
          <div className='flex h-16 items-center px-4 container mx-auto text-white'>
            <p className='text-2xl'>Pics App</p>
            <div className='ml-auto flex items-center space-x-4'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

            </div>
          </div>
        </nav>
    </div>
  )
}

export default page