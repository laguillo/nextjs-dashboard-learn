import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <main className='flex min-h-screen flex-col p-6'>
      <div className='flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52'>
        {/* <AcmeLogo /> */}
      </div>
      <div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
        <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
          <div className='relative h-0 w-0 border-r-[15px] border-b-[26px] border-l-[15px] border-r-transparent border-b-black border-l-transparent' />
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <Link href='https://nextjs.org/learn/' className='text-blue-500'>
              Next.js Learn Course
            </Link>
            , brought to you by Vercel.
          </p>
          <Button asChild size={'lg'} className='w-fit'>
            <Link href='/login'>
              <span>Log in</span> <ArrowRight className='size-4' />
            </Link>
          </Button>
        </div>
        <div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
