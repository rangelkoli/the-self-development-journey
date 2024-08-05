import { Button } from "./ui/button";
import { Input } from "./ui/input";
import postWaitlist from "../utils/waitlist";
import { useState } from "react";
const HeroSection = () => {
  const [email, setEmail] = useState("");
  const onClickWaitlist = () => {
    postWaitlist(email);
  };

  return (
    <div
      className={`h-screen [background:radial-gradient(100%_100%_at_50%_10%,#fff_40%,#3949AB_90%)] flex justify-center items-center`}
    >
      <section className='w-full pt-12 md:py-24 lg:py-32 xl:py-48 sm:my-24'>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-start'>
                  Unlock Your Potential with Our{" "}
                  <span className='text-indigo-600'>
                    Self-Development Platform
                  </span>
                </h1>
                <p className='max-w-[600px] text-gray-700 md:text-xl text-justify'>
                  Discover a world of self-development resources, including
                  daily reading materials, a calendar to track your tasks, and a
                  journaling page with the ability to add daily selfies.
                </p>
              </div>
              <div className='w-full max-w-md space-y-2 justify-center items-center'>
                <div className='flex gap-2 justify-center items-center'>
                  <Input
                    type='email'
                    placeholder='Enter your email'
                    className='max-w-lg flex-1'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button onClick={onClickWaitlist}>Get Started</Button>
                </div>
                <p className='text-xs text-gray-700'>
                  Sign up to unlock exclusive features and start optimizing your
                  workflow today.{" "}
                  {/* <Link
                    href='#'
                    className='underline underline-offset-2'
                    prefetch={false}
                  >
                    Terms &amp; Conditions
                  </Link> */}
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-primary-foreground rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary'>
                <BookIcon className='h-8 w-8 text-primary' />
                <h3 className='text-lg font-semibold text-primary mt-2'>
                  Reading Materials
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Explore a vast library of self-development resources.
                </p>
              </div>
              <div className='bg-primary-foreground rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary'>
                <CalendarIcon className='h-8 w-8 text-primary' />
                <h3 className='text-lg font-semibold text-primary mt-2'>
                  Daily Tasks
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Stay on track with our intuitive task calendar.
                </p>
              </div>
              <div className='bg-primary-foreground rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary'>
                <CameraIcon className='h-8 w-8 text-primary' />
                <h3 className='text-lg font-semibold text-primary mt-2'>
                  Journaling
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Document your journey with daily selfies and notes.
                </p>
              </div>
              <div className='bg-primary-foreground rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary'>
                <RocketIcon className='h-8 w-8 text-primary' />
                <h3 className='text-lg font-semibold text-primary mt-2'>
                  Unlock Your Potential
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Embark on a transformative self-development journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
    </svg>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M8 2v4' />
      <path d='M16 2v4' />
      <rect width='18' height='18' x='3' y='4' rx='2' />
      <path d='M3 10h18' />
    </svg>
  );
}

function CameraIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z' />
      <circle cx='12' cy='13' r='3' />
    </svg>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z' />
      <path d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' />
      <path d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' />
      <path d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' />
    </svg>
  );
}
export default HeroSection;
