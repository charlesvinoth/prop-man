import { Outlet } from 'react-router'
import { LogoMark } from '@/components/base'
import Features from './components/Features'
import Illustration from './components/Illustration'

const AuthLayout = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2'>
      <div className='h-dvh p-4'>
        <div className='flex h-full items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-950'>
          <div className='w-96 px-6 md:w-[540px]'>
            <Illustration />
            <Features />
          </div>
        </div>
      </div>

      <div className='flex h-dvh items-center justify-center'>
        <div className='w-96 space-y-8 px-4 md:px-0'>
          <LogoMark />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
