import HeroSection from "../components/HeroSection";
import booksLanding from "../assets/booksLanding.png";
import calndarLanding from "../assets/calendarLanding.png";

export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <div>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#3949AB] to-indigo-400 dark:from-[#3949AB] dark:to-[#3949AB]'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2 text-white'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-white'>
                  Discover Transformative Reading Material
                </h2>
                <p className='max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Explore our curated collection of self-development books,
                  articles, and audiobooks to unlock your full potential.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <img
                src={booksLanding}
                width='550'
                height='310'
                alt='Reading Material'
                className=' sm:w-full lg:order-last'
              />
              <div className='flex flex-col justify-center space-y-4 '>
                <ul className='grid gap-6'>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold text-white'>
                        Mindfulness Practices
                      </h3>
                      <p className='text-gray-200'>
                        Discover techniques to cultivate inner peace and
                        self-awareness.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold text-white'>
                        Goal-Setting Strategies
                      </h3>
                      <p className='text-gray-200'>
                        Learn how to set and achieve your personal and
                        professional goals.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold text-white'>
                        Emotional Intelligence
                      </h3>
                      <p className='text-gray-200'>
                        Develop the skills to better understand and manage your
                        emotions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-400 to-blue-300 dark:from-[#3949AB] dark:to-indigo-700'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Stay Organized with Our Calendar
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Easily track your daily tasks, set reminders, and stay on top
                  of your self-development journey.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <img
                src={calndarLanding}
                width='550'
                height='310'
                alt='Calendar'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first'
              />
              <div className='flex flex-col justify-center space-y-4'>
                <ul className='grid gap-6'>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Daily Task Tracking</h3>
                      <p className='text-muted-foreground'>
                        Easily add, edit, and complete your daily tasks to stay
                        on top of your goals.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>
                        Customizable Reminders
                      </h3>
                      <p className='text-muted-foreground'>
                        Set reminders for your tasks, appointments, and
                        self-care activities.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Progress Tracking</h3>
                      <p className='text-muted-foreground'>
                        View your completed tasks and see your progress over
                        time.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-300 to-sky-50 dark:from-indigo-700 dark:to-black'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Reflect and Grow with Our Journaling Tool
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Capture your thoughts, feelings, and progress with our
                  intuitive journaling platform and daily selfie uploads.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <img
                src='https://placehold.co/600x400'
                width='550'
                height='310'
                alt='Journaling'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
              />
              <div className='flex flex-col justify-center space-y-4'>
                <ul className='grid gap-6'>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Daily Journaling</h3>
                      <p className='text-muted-foreground'>
                        Write about your thoughts, feelings, and experiences to
                        gain deeper self-awareness.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Selfie Uploads</h3>
                      <p className='text-muted-foreground'>
                        Upload a daily selfie to track your progress and
                        celebrate your growth.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Secure and Private</h3>
                      <p className='text-muted-foreground'>
                        Your journal entries and selfies are kept safe and
                        private, accessible only to you.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-muted-foreground'>
          &copy; 2024 Self-Development. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
