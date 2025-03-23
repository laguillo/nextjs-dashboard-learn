import Link from 'next/link';
import AcmeLogo from '@/components/ui/acme-logo';
import { Button } from '@/components/ui/button';
import { PowerIcon } from 'lucide-react';
import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <Link
        className='mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40'
        href='/'
      >
        <div className='w-32 text-white md:w-40'>
          <AcmeLogo />
        </div>
      </Link>
      <div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-y-2 md:space-x-0'>
        <NavLinks />
        <div className='hidden h-auto w-full grow rounded-md bg-gray-50 md:block'></div>
        <form>
          <Button className='w-full justify-start'>
            <PowerIcon className='w-6' />
            <div className='hidden md:block'>Sign Out</div>
          </Button>
        </form>
      </div>
    </div>
  );
}
